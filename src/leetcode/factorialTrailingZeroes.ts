// https://leetcode.com/problems/factorial-trailing-zeroes/
export default function trailingZeroes(n: number): number {
  // to calc # of trailing zeroes, we need to see how many times factorial has a mulitple of 10
  // 10 = 2 * 5
  // way more 2s than 5s, so really we need to see how many times factorial has multiple of 5
  // so need to count the powers of 5 that fit into n
  // n / 5 + n / 5^2 + n / 5^3, etc
  // until 5^x > n because that will return 0
  let numZeroes = 0;
  for (let i = 5; i <= n; i *= 5) {
    numZeroes += Math.floor(n / i);
  }
  return numZeroes;
}
