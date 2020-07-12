// https://leetcode.com/problems/count-primes/
import isPrime from '../algorithms/prime';

export default function countPrimes(n: number): number {
  let count = 0;
  let start = n - 1;

  while (start > 1) {
    if (isPrime(start)) {
      count++;
    }

    start--;
  }

  return count;
}
