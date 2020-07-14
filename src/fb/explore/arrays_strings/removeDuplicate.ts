// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3011/

// Time - O(n)
// Space - O(1)
export default function removeDuplicates(nums: Array<number>): number {
  let i = 0;

  for (let j = i; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

/*
[0, 0, 1, 1, 1, 2], i = j = 0
 ij
 i  j
 i     j
[0, 1, 1, 1, 1, 2], i = 1, j = 2
    i  j
    i           j
[0, 1, 2, 1, 1, 2], i = 2, j =5

return i + 1 = 3
*/
