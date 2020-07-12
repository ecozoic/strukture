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
// TODO: version w/ 2 binary searches
// 1 to find start index
// 1 to find end index
export function searchRangeBinary(
  nums: Array<number>,
  target: number
): [number, number] {
  // logarithmic
  const range: [number, number] = [-1, -1];
  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (nums[middleIndex] === target) {
      range[0] = range[1] = middleIndex;
      // walk left
      let leftIndex = middleIndex - 1;
      while (nums[leftIndex] === target) {
        range[0] = leftIndex;
        leftIndex--;
      }

      // walk right
      let rightIndex = middleIndex + 1;
      while (nums[rightIndex] === target) {
        range[1] = rightIndex;
        rightIndex++;
      }

      return range;
    } else if (nums[middleIndex] < target) {
      // go to right
      startIndex = middleIndex + 1;
    } else {
      // go to left
      endIndex = middleIndex - 1;
    }
  }

  return range;
}
