// https://leetcode.com/problems/reverse-bits/

export default function reverseBits(n: number): number {
  let ret = 0;
  let power = 31; // 32 - 1

  while (n != 0) {
    // grab right most bit, left shift it by power to move it to other end
    ret += (n & 1) << power;
    n = n >> 1;
    power--;
  }
  return ret;
}
