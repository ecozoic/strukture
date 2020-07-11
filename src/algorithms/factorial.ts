// Time -> O(n)
// Space -> O(n)
export function factorialRecursive(n: number): number {
  return n > 1 ? n * factorialRecursive(n - 1) : 1;
}

// Time -> O(n)
// Space -> O(1)
export function factorial(n: number): number {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
