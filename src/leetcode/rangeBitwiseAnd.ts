// https://leetcode.com/problems/bitwise-and-of-numbers-range/
export default function rangeBitwiseAnd(m: number, n: number): number {
  // 7 ->  0111
  // 8  -> 1000
  // 9  -> 1001
  // 10 -> 1010
  // 11 -> 1011
  // 12 -> 1100
  // & ->  1000

  // find common prefix by shifting right until equal, then shift left back
  let power = 0;
  while (m !== n) {
    m >>= 1;
    n >>= 1;
    power++;
  }

  return m << power;
}

export function rangeBitwiseAndBruteForce(m: number, n: number): number {
  // calc the range
  const range = [];
  for (let i = m; i <= n; i++) {
    range.push(i);
  }

  return range.reduce((a, b) => a & b);
}
