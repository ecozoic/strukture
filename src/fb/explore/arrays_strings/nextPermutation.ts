// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3012/

export default function nextPermutation(nums: Array<number>): void {
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }
  reverse(nums, i + 1);
}

function reverse(nums: Array<number>, start: number) {
  let i = start,
    j = nums.length - 1;

  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}

function swap(nums: Array<number>, i: number, j: number) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
