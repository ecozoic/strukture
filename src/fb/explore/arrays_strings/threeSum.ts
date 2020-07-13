// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/283/

// Time - O(n^2) (n log n sorting)
// Space - O(1)
export default function threeSum(
  nums: Array<number>
): Array<[number, number, number]> {
  const ans: Array<[number, number, number]> = [];

  // sort array to speed up searches - O(n log n)
  nums.sort((a, b) => {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  });

  // b/c array is sorted & we are checking ltr
  // no need to further iterate if nums[i] > 0 b/c no way a sum can be negative from there
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    // don't check duplicates (looking for unique triplets), repeating values are next to each other b/c sorted
    if (i === 0 || nums[i] !== nums[i - 1]) {
      // sum of pair needs to be -nums[i]
      twoSum(nums, -nums[i], i, ans);
    }
  }

  return ans;
}

function twoSum(
  nums: Array<number>,
  target: number,
  i: number,
  ans: Array<[number, number, number]>
): void {
  let lo = i + 1;
  let hi = nums.length - 1;

  while (lo < hi) {
    const sum = nums[lo] + nums[hi];

    // if sum is too small, increment the lo counter
    // also if this lo is the same as a lo we've already checked
    if (sum < target || (lo > i + 1 && nums[lo] === nums[lo - 1])) {
      lo++;
    } else if (
      sum > target ||
      (hi < nums.length - 1 && nums[hi] === nums[hi + 1])
    ) {
      // if sum is too large, decrement the hi counter
      // also if this hi is the same as a hi we've already checked
      hi--;
    } else {
      // otherwise we found a matching triplet, push onto array
      ans.push([nums[i], nums[lo++], nums[hi--]]);
    }
  }
}
