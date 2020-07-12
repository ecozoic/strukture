// https://leetcode.com/problems/reordered-power-of-2/
export default function reorderedPowerOfTwo(N: number): boolean {
  const A = count(N);
  // iterate through powers of 2
  for (let i = 0; i < 31; i++) {
    // check if any power of 2 has same # of each digit, that means there exists a permutation that matches
    if (equals(A, count(1 << i))) {
      return true;
    }
  }

  return false;
}

// count # of each digits
function count(N: number): Array<number> {
  const counts: Array<number> = Array(10).fill(0);

  while (N > 0) {
    counts[N % 10]++;
    N = Math.floor(N / 10);
  }

  return counts;
}

// check if 2 arrays are equal
function equals(a1: Array<number>, a2: Array<number>): boolean {
  if (a1.length !== a2.length) {
    return false;
  }

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }

  return true;
}
