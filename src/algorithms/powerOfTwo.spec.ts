import isPowerOfTwo, { isPowerOfTwoBitwise } from './powerOfTwo';

describe('isPowerOfTwo', () => {
  it('works', () => {
    expect(isPowerOfTwo(0)).toEqual(false);
    expect(isPowerOfTwo(1)).toEqual(true);
    expect(isPowerOfTwo(2)).toEqual(true);
    expect(isPowerOfTwo(3)).toEqual(false);
    expect(isPowerOfTwo(4)).toEqual(true);
  });
});

describe('isPowerOfTwoBitwise', () => {
  it('works', () => {
    expect(isPowerOfTwoBitwise(0)).toEqual(false);
    expect(isPowerOfTwoBitwise(1)).toEqual(true);
    expect(isPowerOfTwoBitwise(2)).toEqual(true);
    expect(isPowerOfTwoBitwise(3)).toEqual(false);
    expect(isPowerOfTwoBitwise(4)).toEqual(true);
  });
});
