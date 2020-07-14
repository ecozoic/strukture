// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3013/
export default function multiply(num1: string, num2: string): string {
  let ptr1 = num1.length - 1;
  let ptr2 = num2.length - 1;
  const result = [];

  while (ptr2 >= 0) {
    const int2 = num2[ptr2] !== undefined ? +num2[ptr2] : 0;

    while (ptr1 >= 0) {
      const int1 = num1[ptr1] !== undefined ? +num1[ptr1] : 0;

      const p2 = int2 * getPowerOfTen(ptr2, num2);
      const p1 = int1 * getPowerOfTen(ptr1, num1);
      const product = p2 * p1;
      result.push(product);

      ptr1--;
    }

    ptr1 = num1.length - 1;
    ptr2--;
  }

  const sum = result.reduce((a, b) => a + b);

  return sum.toString();
}

function getPowerOfTen(ptr: number, num: string): number {
  return 10 ** (num.length - ptr - 1);
}

// 5 * 15 = 5 * 5 + 10 * 5
