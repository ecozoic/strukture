// https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/
// Time O(N^2 logM)
// Space O(N)
export default function lenLongestFibSubseq(A: Array<number>): number {
  const set = new Set<number>();
  A.forEach((a) => set.add(a));

  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    // O(n)
    for (let j = i + 1; j < A.length; j++) {
      // O(n)
      // check pairs
      let x = A[j];
      let y = A[i] + A[j]; // expected value to find in set
      let length = 2; // array strictly increasing, so min length 2 for every pair

      while (set.has(y)) {
        // O(log M)
        const tmp = y;
        y += x;
        x = tmp;
        ans = Math.max(ans, ++length);
      }
    }
  }

  return ans >= 3 ? ans : 0;
}
