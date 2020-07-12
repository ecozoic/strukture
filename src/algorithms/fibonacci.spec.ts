import fibonacci, { fibonacciNth, fibonacciNthBinet } from './fibonacci';

describe('fibonacci', () => {
  it('returns sequence', () => {
    expect(fibonacci(1)).toEqual([1]);
    expect(fibonacci(2)).toEqual([1, 1]);
    expect(fibonacci(3)).toEqual([1, 1, 2]);
    expect(fibonacci(4)).toEqual([1, 1, 2, 3]);
    expect(fibonacci(5)).toEqual([1, 1, 2, 3, 5]);
  });
});

describe('fibonacciNth', () => {
  expect(fibonacciNth(1)).toEqual(1);
  expect(fibonacciNth(2)).toEqual(1);
  expect(fibonacciNth(3)).toEqual(2);
  expect(fibonacciNth(4)).toEqual(3);
  expect(fibonacciNth(5)).toEqual(5);
});

describe('fibonacciNthBinet', () => {
  expect(fibonacciNthBinet(1)).toEqual(1);
  expect(fibonacciNthBinet(2)).toEqual(1);
  expect(fibonacciNthBinet(3)).toEqual(2);
  expect(fibonacciNthBinet(4)).toEqual(3);
  expect(fibonacciNthBinet(5)).toEqual(5);
});
