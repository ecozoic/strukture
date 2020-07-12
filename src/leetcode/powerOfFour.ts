// https://leetcode.com/problems/power-of-four/
export default function isPowerOfFour(num: number): boolean {
  if (num < 1) {
    return false;
  }

  const isPowerOfTwo = (num & (num - 1)) === 0;

  return isPowerOfTwo && (num & 0b10101010101010101010101010101010) == 0;
  // or 0xaaaaaaaa
}
