// https://leetcode.com/problems/add-strings/

/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
*/

export default function addStrings(num1: string, num2: string): string {
  let carry = 0;
  const result: Array<string> = [];
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    const int1 = num1[p1] !== undefined ? +num1[p1] : 0;
    const int2 = num2[p2] !== undefined ? +num2[p2] : 0;
    const value = (int1 + int2 + carry) % 10;
    carry = Math.floor((int1 + int2 + carry) / 10);

    result.unshift('' + value);

    p1--;
    p2--;
  }

  if (carry !== 0) {
    result.unshift('' + carry);
  }

  return result.join('');
}
