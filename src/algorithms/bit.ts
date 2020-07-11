export function getBit(number: number, bitPosition: number): number {
  // 5 -> 000101
  // shift 1 right -> 000010
  // shift 2 right -> 000001
  // zeroth bit 1 & 1 = 1
  return (number >> bitPosition) & 1;
}

export function setBit(number: number, bitPosition: number): number {
  // 5 -> 000101
  // take 1 -> 000001
  // shift 1 left -> 000010
  // shift 2 left -> 000100
  // shift 3 left -> 001000
  // OR with 5 -> 001000 | 000101 -> 001101 -> 13
  return number | (1 << bitPosition);
}

export function clearBit(number: number, bitPosition: number): number {
  // 5 -> 000101
  // create mask with 1 -> 000001
  // shift 1 left -> 000010
  // shift 2 left -> 000100
  // NOT -> 111011
  // AND with 5 -> 111011 & 000101 -> 000001 -> 1
  const mask = ~(1 << bitPosition);
  return number & mask;
}

export function updateBit(
  number: number,
  bitPosition: number,
  bitValue: 1 | 0
): number {
  const clearMask = ~(1 << bitPosition);
  return (number & clearMask) | (bitValue << bitPosition);
}

export function isEven(number: number): boolean {
  // even if LSB is 0, odd if LSB is 1
  return (number & 1) === 0;
}

export function isPositive(number: number): boolean {
  // zero is neither positive nor negative
  if (number === 0) {
    return false;
  }

  // shift MSB 31 times and AND with 1
  // negative = 1, positive = 0
  return ((number >> 31) & 1) === 0;
}

export function multiplyByTwo(number: number): number {
  // shift all bits to the left by 1
  // 5 -> 000101
  // shift 1 left -> 001010 -> 10
  return number << 1;
}

export function divideByTwo(number: number): number {
  // shift all bits to the right by 1
  // 10 -> 001010
  // shift 1 right -> 000101 -> 5
  return number >> 1;
}

export function switchSign(number: number): number {
  // invert all bits and add 1
  // 5 -> 000101
  // NOT 5 -> 111010
  // add 1 -> 111011 (twos complement -5)
  // -5 -> 111011
  // NOT -5 -> 000100
  // add 1 -> 000101
  return ~number + 1;
}

export function multiply(a: number, b: number): number {
  // signed numbers
  // based on following rules:
  // a * b =
  // 0 if a is 0, b is 0 or both a and b are zero
  // 2a * (b/2) if b is even
  // 2a * (b - 1)/2 + a if b is odd and positive
  // 2a * (b + 1)/2 - a if b is odd and negative
  // O(log b) runtime
  if (b === 0 || a === 0) {
    return 0;
  }

  const multiplyByOddPositive = () =>
    multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;

  const multiplyByOddNegative = () =>
    multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;

  const multiplyByEven = () => multiply(multiplyByTwo(a), divideByTwo(b));

  const multiplyByOdd = () =>
    isPositive(b) ? multiplyByOddPositive() : multiplyByOddNegative();

  return isEven(b) ? multiplyByEven() : multiplyByOdd();
}

export function multiplyUnsigned(a: number, b: number): number {
  // based on idea that every number can be represented as sum of powers of 2
  // i.e, 19 -> 2^4 + 2^1 + 2^0
  // so x * 19 = x * 2^4 + x * 2^1 + x * 2^0
  // and x * 2^4 equals shifting left by 4 bits (x << 4)
  let result = 0;
  let multiplier = b;
  let bitIndex = 0;

  while (multiplier !== 0) {
    if (multiplier & 1) {
      result += a << bitIndex;
    }
    bitIndex++;
    multiplier >>= 1;
  }

  return result;
}

export function countSetBits(originalNumber: number): number {
  // while number is greater than zero
  // shift right one bit at a time, and with 1
  // if true, increment counter
  let setBitsCount = 0;
  let number = originalNumber;

  while (number) {
    setBitsCount += number & 1;

    number >>= 1;
  }

  return setBitsCount;
}

export function bitsDiff(a: number, b: number): number {
  // calculates differences in bits using XOR
  return countSetBits(a ^ b);
}

export function bitLength(number: number): number {
  // calc num of valuable bits by shifting left one bit and see if shifted bit bigger than input number
  let bitsCounter = 0;

  while (1 << bitsCounter <= number) {
    bitsCounter++;
  }

  return bitsCounter;
}
