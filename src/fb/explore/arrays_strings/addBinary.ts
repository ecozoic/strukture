// https://leetcode.com/problems/add-binary/

export function addBinaryString(a: string, b: string): string {
  // same as add string but in base 2 instead of base 10
  let carry = 0;
  const result: Array<string> = [];
  let p1 = a.length - 1;
  let p2 = b.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    const b1 = a[p1] !== undefined ? +a[p1] : 0;
    const b2 = b[p2] !== undefined ? +b[p2] : 0;
    const value = (b1 + b2 + carry) % 2;
    carry = Math.floor((b1 + b2 + carry) / 2);

    result.unshift('' + value);

    p1--;
    p2--;
  }

  if (carry !== 0) {
    result.unshift('' + carry);
  }

  return result.join('');
}

export default function addBinary(a: string, b: string): string {
  // answer w/o carry is XOR
  // answer w/ carry is AND left shift 1
  // repeat until carry is 0
  let int1 = Number.parseInt(a, 2);
  let int2 = Number.parseInt(b, 2);

  // wont work for negatives

  while (int2 !== 0) {
    int1 = int1 ^ int2; // XOR
    int2 = (int1 & int2) << 1; // CARRY
  }

  return int1.toString(2);
}

export function addBinaryOneLine(a: string, b: string): string {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}
