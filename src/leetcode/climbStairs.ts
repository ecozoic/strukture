// https://leetcode.com/problems/climbing-stairs/
// https://www.youtube.com/watch?v=5o-kdjv7FD0

// calculate # of ways to climb stairs of length n
// when taking 1 or 2 steps
// Time: O(2^n)
// Space: O(n)
export default function climbStairs(numStairs: number): number {
  // recursive
  if (numStairs === 1 || numStairs === 0) {
    return 1;
  }

  // fibonacci!
  return climbStairs(numStairs - 1) + climbStairs(numStairs - 2);
}

// top-down dynamic programming with memoization
// Time - O(n)
// Space - O(n)
export function climbStairsMemo(numStairs: number): number {
  if (numStairs === 1 || numStairs === 0) {
    return 1;
  }

  const cache = new Map<number, number>();
  cache.set(0, 1);
  cache.set(1, 1);

  return memoize(numStairs, cache);
}

function memoize(num: number, cache: Map<number, number>): number {
  if (cache.has(num)) {
    return cache.get(num) as number;
  }

  cache.set(num, memoize(num - 1, cache) + memoize(num - 2, cache));

  return memoize(num, cache);
}

// bottom-up dynamic programming with tabulation
// Time - O(n)
// Space - O(n)
export function climbStairsTab(numStairs: number): number {
  if (numStairs === 1 || numStairs === 0) {
    return 1;
  }

  const nums = [1, 1];
  for (let i = 2; i <= numStairs; i++) {
    nums.push(nums[i - 1] + nums[i - 2]);
  }
  return nums[nums.length - 1];
}

// support for arbitrary step counts
export function climbStairsGeneric(
  numStairs: number,
  allowedSteps: Array<number>
): number {
  if (numStairs === 1 || numStairs === 0) {
    return 1;
  }

  return allowedSteps
    .map((step) => {
      const diff = numStairs - step;
      return diff >= 0 ? climbStairsGeneric(diff, allowedSteps) : 0;
    })
    .reduce((a, b) => a + b);
}
