// longest common subsequence  b/w  two strings
// s t o n e
// l o n g e s t

// 1) recursion
// 2) memoize (top-down)
// 3) dp (bottom-up)

// O(2^(n+m))
export function lcs(p: string, q: string): number {
  return lcsRecursive(p, q, 0, 0);
}

function lcsRecursive(p: string, q: string, i: number, j: number): number {
  // base case
  if (i >= p.length || j >= q.length) {
    return 0;
  }

  // if match, add one to subsequence and advance both pointers
  if (p[i] === q[j]) {
    return 1 + lcsRecursive(p, q, i + 1, j + 1);
  } else {
    // if no match, return largest of both possibilities (advancing i or advancing j)
    return Math.max(lcsRecursive(p, q, i + 1, j), lcsRecursive(p, q, i, j + 1));
  }
}

// O(nm)
export function lcsMemo(p: string, q: string): number {
  // memoize based on i j, memo[i][j] = value
  const cache: Array<Array<number>> = Array(p.length)
    .fill(null)
    .map(() => Array(q.length).fill(null));

  return lcsRecursiveMemo(p, q, 0, 0, cache);
}

function lcsRecursiveMemo(
  p: string,
  q: string,
  i: number,
  j: number,
  cache: Array<Array<number>>
): number {
  if (i >= p.length || j >= q.length) {
    return 0;
  }

  if (cache[i][j] !== null) {
    return cache[i][j];
  }

  let result: number;
  if (p[i] === q[j]) {
    result = 1 + lcsRecursiveMemo(p, q, i + 1, j + 1, cache);
  } else {
    result = Math.max(
      lcsRecursiveMemo(p, q, i + 1, j, cache),
      lcsRecursiveMemo(p, q, i, j + 1, cache)
    );
  }

  cache[i][j] = result;

  return result;
}

/*
  0 l o n g e s t
0 0 0 0 0 0 0 0 0
s 0 0 0 0 0 0 1 1
t 0 0 0 0 0 0 1 2
o 0 0 1 1 1 1 1 2
n 0 0 1 2 2 2 2 2
e 0 0 1 2 2 3 3 3

3     o n   e
*/

export function lcsDp(p: string, q: string): number {
  // dp[i][j] represents LCS up to i,j
  // so if p[i] matches q[j], add one to LCS
  const m = p.length + 1;
  const n = q.length + 1;
  const dp: Array<Array<number>> = Array(m)
    .fill(null)
    .map(() => Array(n).fill(null));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // empty subsequences always 0
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (p[i - 1] === q[j - 1]) {
        // if we have a match, longest subsequence equals
        // 1 + longest subsequence without these matching characters
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        // if we don't have a match, longest subsequence equals
        // max of longest subsequence without i char, and longest ssq without j char
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  // construct actual sequence by working backwords
  const subsequence = [];
  let r = m - 1;
  let c = n - 1;

  while (r > 0 && c > 0) {
    const value = dp[r][c];
    const prevC = dp[r][c - 1];
    const prevR = dp[r - 1][c];

    if (value === Math.max(prevC, prevR)) {
      c--;
    } else {
      subsequence.unshift(q[c - 1]);
      c--;
      r--;
    }
  }

  console.log(subsequence); // o n e

  return dp[m - 1][n - 1];
}
