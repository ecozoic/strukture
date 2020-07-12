// https://leetcode.com/problems/peak-index-in-a-mountain-array

export function peakIndexLinear(A: Array<number>): number {
  let i = 0;
  while (A[i] < A[i + 1]) i++;
  return i;
}

export function peakIndexBinary(A: Array<number>): number {
  return 0;
}
