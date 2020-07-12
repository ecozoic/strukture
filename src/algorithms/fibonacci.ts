export default function fibonacci(n: number): Array<number> {
  const sequence = [1];

  if (n === 1) {
    return sequence;
  }

  let currentValue = 1;
  let previousValue = 0;
  let iterationsCounter = n - 1;

  while (iterationsCounter > 0) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    sequence.push(currentValue);

    iterationsCounter -= 1;
  }

  return sequence;
}

export function fibonacciNth(n: number): number {
  let currentValue = 1;
  let previousValue = 0;

  if (n === 1) {
    return 1;
  }

  let iterationsCounter = n - 1;

  while (iterationsCounter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    iterationsCounter -= 1;
  }

  return currentValue;
}

export function fibonacciNthBinet(n: number): number {
  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;

  return Math.floor(phi ** n / sqrt5 + 0.5);
}
