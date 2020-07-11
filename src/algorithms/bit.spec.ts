import {
  getBit,
  setBit,
  clearBit,
  updateBit,
  isEven,
  isPositive,
  multiplyByTwo,
  divideByTwo,
  switchSign,
  multiply,
  multiplyUnsigned,
  countSetBits,
  bitsDiff,
  bitLength,
} from './bit';

describe('getBit', () => {
  it('gets specified bit', () => {
    expect(getBit(5, 2)).toEqual(1);
    expect(getBit(5, 1)).toEqual(0);
    expect(getBit(5, 0)).toEqual(1);
  });
});

describe('setBit', () => {
  it('sets specified bit', () => {
    expect(setBit(5, 3)).toEqual(13);
  });
});

describe('clearBit', () => {
  it('clears specified bit', () => {
    expect(clearBit(5, 2)).toEqual(1);
  });
});

describe('updateBit', () => {
  it('updates specified bit', () => {
    expect(updateBit(5, 3, 1)).toEqual(13);
    expect(updateBit(5, 2, 0)).toEqual(1);
  });
});

describe('isEven', () => {
  it('checks for even', () => {
    expect(isEven(4)).toEqual(true);
    expect(isEven(5)).toEqual(false);
  });
});

describe('isPositive', () => {
  it('checks for positive', () => {
    expect(isPositive(0)).toEqual(false);
    expect(isPositive(1)).toEqual(true);
    expect(isPositive(-1)).toEqual(false);
  });
});

describe('multiplyByTwo', () => {
  it('multiplies by two', () => {
    expect(multiplyByTwo(5)).toEqual(10);
  });
});

describe('divideByTwo', () => {
  it('divides by two', () => {
    expect(divideByTwo(10)).toEqual(5);
  });
});

describe('switchSign', () => {
  it('switches signs', () => {
    expect(switchSign(5)).toEqual(-5);
    expect(switchSign(-5)).toEqual(5);
  });
});

describe('multiply', () => {
  it('multiplies two signed numbers', () => {
    expect(multiply(0, 0)).toEqual(0);
    expect(multiply(1, 0)).toEqual(0);
    expect(multiply(2, 3)).toEqual(6);
    expect(multiply(2, 4)).toEqual(8);
    expect(multiply(2, -3)).toEqual(-6);
  });
});

describe('multiplyUnsigned', () => {
  it('multiplies two unsigned numbers', () => {
    expect(multiplyUnsigned(12, 5)).toEqual(60);
  });
});

describe('countSetBits', () => {
  it('counts set bits', () => {
    expect(countSetBits(5)).toEqual(2);
  });
});

describe('bitsDiff', () => {
  it('calculates bit differences', () => {
    expect(bitsDiff(5, 4)).toEqual(1);
    expect(bitsDiff(5, 2)).toEqual(3);
  });
});

describe('bitLength', () => {
  it('returns number of significant bits', () => {
    expect(bitLength(5)).toEqual(3);
  });
});
