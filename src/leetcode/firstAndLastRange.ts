//  https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

export function searchRangeLinear(
  nums: Array<number>,
  target: number
): [number, number] {
  const range: [number, number] = [-1, -1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (range[0] === -1) {
        range[0] = i;
      }

      range[1] = i;
    }
  }

  return range;
}

export function searchRangeBinary(
  nums: Array<number>,
  target: number
): [number, number] {
  const range: [number, number] = [-1, -1];

  return range;
}
