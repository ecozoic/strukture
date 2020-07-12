import isPrime from './prime';

describe('isPrime', () => {
  it('checks for prime numbers', () => {
    expect(isPrime(0.5)).toEqual(false);
    expect(isPrime(0)).toEqual(false);
    expect(isPrime(-1)).toEqual(false);
    expect(isPrime(1)).toEqual(false);
    expect(isPrime(2)).toEqual(true);
    expect(isPrime(3)).toEqual(true);
    expect(isPrime(4)).toEqual(false);
    expect(isPrime(5)).toEqual(true);
    expect(isPrime(6)).toEqual(false);
    expect(isPrime(7)).toEqual(true);
    expect(isPrime(8)).toEqual(false);
    expect(isPrime(9)).toEqual(false);
    expect(isPrime(10)).toEqual(false);
    expect(isPrime(11)).toEqual(true);
    expect(isPrime(12)).toEqual(false);
  });
});
