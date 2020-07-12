export default function isPrime(n: number): boolean {
  if (n % 1 !== 0) {
    // only integers can be prime
    return false;
  }

  if (n <= 1) {
    // less than or equal to 1 is not prime
    return false;
  }

  if (n <= 3) {
    // 2 & 3 are prime
    return true;
  }

  if (n % 2 === 0) {
    // if number is even its divisible by 2 so not prime
    return false;
  }

  // take sqrt of number we are testing
  // if any numbers up to sqrt are divisible its not prime
  // don't need to check numbers above sqrt b/c there would be a corresponding smaller number
  const dividerLimit = Math.sqrt(n);
  for (let divider = 3; divider <= dividerLimit; divider += 2) {
    if (n % divider === 0) {
      return false;
    }
  }

  return true;
}
