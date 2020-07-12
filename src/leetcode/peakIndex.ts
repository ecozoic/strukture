// https://leetcode.com/problems/peak-index-in-a-mountain-array

export function peakIndexLinear(A: Array<number>): number {
  let i = 0;
  while (A[i] < A[i + 1]) i++;
  return i;
}

export function peakIndexBinary(A: Array<number>): number {
  let startIndex = 0;
  let endIndex = A.length - 1;

  while (startIndex < endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (A[middleIndex] < A[middleIndex + 1]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex;
    }
  }

  return startIndex;
}
