export default function isPowerOfTwo(n: number): boolean {
  if (n < 1) {
    return false;
  }

  let dividedNumber = n;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false;
    }

    dividedNumber /= 2;
  }

  return true;
}

export function isPowerOfTwoBitwise(n: number): boolean {
  if (n < 1) {
    return false;
  }

  // 8 -> 1000, 4 -> 0100, 2 -> 0010, 1 -> 0001
  // -1, 0111        0011        0001      0000
  // AND 0000        0000       0000       0000

  // subtract 1 and AND it, if power of two, equal 0
  return (n & (n - 1)) === 0;
}
