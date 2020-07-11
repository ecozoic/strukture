import { factorialRecursive, factorial } from './factorial';

describe('factorialRecursive', () => {
  it('works', () => {
    expect(factorialRecursive(5)).toEqual(5 * 4 * 3 * 2 * 1);
    expect(factorialRecursive(1)).toEqual(1);
    expect(factorialRecursive(0)).toEqual(1);
  });
});

describe('factorial', () => {
  it('works', () => {
    expect(factorial(5)).toEqual(5 * 4 * 3 * 2 * 1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(0)).toEqual(1);
  });
});
