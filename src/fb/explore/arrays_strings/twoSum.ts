// https://leetcode.com/problems/two-sum/

// Time - O(n)
// Space - O(n)
export default function twoSum(
  nums: Array<number>,
  target: number
): [number, number] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff) as number, i] as [number, number];
    } else {
      map.set(nums[i], i);
    }
  }

  return [-1, -1] as [number, number];
}

// assumes sorted array
// Time - O(n)
// Space - O(1)
export function twoSumII(
  nums: Array<number>,
  target: number
): [number, number] {
  let ptr1 = 0;
  let ptr2 = nums.length - 1;

  while (ptr1 < ptr2) {
    const sum = nums[ptr1] + nums[ptr2];

    if (sum === target) {
      return [ptr1, ptr2] as [number, number];
    }

    if (sum < target) {
      ptr1++;
    } else {
      ptr2--;
    }
  }

  return [-1, -1] as [number, number];
}
