// https://leetcode.com/problems/monotonic-array/
export default function isMonotonic(A: Array<number>): boolean {
  let isDecreasing = true;
  let isIncreasing = true;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] > A[i + 1]) {
      isIncreasing = false;
    } else if (A[i] < A[i + 1]) {
      isDecreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
}
