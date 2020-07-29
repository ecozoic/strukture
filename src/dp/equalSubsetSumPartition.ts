export default function essp(nums: Array<number>): boolean {
  const sum = nums.reduce((a, b) => a + b);

  if (sum % 2 !== 0) {
    // odd sums can't have two equal parts
    return false;
  }

  // problem reduces to, find a set that equals half sum
  // since by definition other numbers would also equal half sum
  return esspRecursive(nums, sum / 2, 0);
}

function esspRecursive(
  nums: Array<number>,
  sum: number,
  index: number
): boolean {
  // base cases
  if (index >= nums.length) {
    // no more numbers to add to set
    return false;
  }

  if (sum === 0) {
    // satisfied sum!
    return true;
  }

  // choices
  // include if we have capacity
  if (nums[index] <= sum) {
    if (esspRecursive(nums, sum - nums[index], index + 1)) {
      return true;
    }
  }

  // exclude
  return esspRecursive(nums, sum, index + 1);
}

export function esspMemo(nums: Array<number>): boolean {
  const sum = nums.reduce((a, b) => a + b);

  if (sum % 2 !== 0) {
    return false;
  }

  const halfSum = sum / 2;

  const cache = Array(nums.length)
    .fill(null)
    .map(() => Array(halfSum + 1).fill(null));

  return esspRecursiveMemo(nums, halfSum, 0, cache);
}

function esspRecursiveMemo(
  nums: Array<number>,
  sum: number,
  index: number,
  cache: Array<Array<boolean>>
): boolean {
  // base cases
  if (index >= nums.length) {
    // no more numbers to add to set
    return false;
  }

  if (sum === 0) {
    // satisfied sum!
    return true;
  }

  if (cache[index][sum] === null) {
    if (nums[index] <= sum) {
      if (esspRecursiveMemo(nums, sum - nums[index], index + 1, cache)) {
        cache[index][sum] = true;
        return true;
      }
    }

    cache[index][sum] = esspRecursiveMemo(nums, sum, index + 1, cache);
  }

  return cache[index][sum];
}

/*
    sum
      0 1 2 3 4 5
n  1  T T F F F F
u  2  T T T T F F
m  3  T T T T T T
s  4  T T T T T T

dp[i][s] = true if we can make sum s from first i numbers
dp[i][s] = dp[i - 1][s] || dp[i - 1][s - num[i]]
        exclude and see if same sum possible
        thats why we i-1 and keep s same
*/

export function esspDp(nums: Array<number>): boolean {
  let sum = nums.reduce((a, b) => a + b);

  if (sum % 2 !== 0) {
    return false;
  }

  sum /= 2;

  const dp = Array(nums.length)
    .fill(false)
    .map(() => Array(sum + 1).fill(false));

  for (let i = 0; i < nums.length; i++) {
    // can always satisfy 0 sum
    dp[i][0] = true;
  }

  for (let s = 1; s <= sum; s++) {
    // can only satisfy sum w/ a single item set if sum is equal to item
    dp[0][s] = nums[0] === s;
  }

  for (let i = 1; i < nums.length; i++) {
    for (let s = 1; s <= sum; s++) {
      // if we can already satisfy sum even w/o this number...
      if (dp[i - 1][s]) {
        dp[i][s] = dp[i - 1][s];
      } else if (s >= nums[i]) {
        // if we have capacity in the sum to add this number
        // check that we have a subset that can satisfy remaining sum w/o this number
        dp[i][s] = dp[i - 1][s - nums[i]];
      }
    }
  }

  return dp[nums.length - 1][sum];
}
