//  https://leetcode.com/problems/valid-palindrome/
// Time - O(n)
// Space - O(n)
export default function isPalindrome(s: string): boolean {
  const sanitized = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return sanitized === sanitized.split('').reverse().join('').toLowerCase();
}

// Time - O(n)
// Space - O(1)
export function isPalindromePointer(s: string): boolean {
  let head = 0;
  let tail = s.length - 1;

  while (head < tail) {
    while (head < tail && s[head].match(/[a-zA-Z0-9]/) === null) {
      head++;
    }

    while (head < tail && s[tail].match(/[a-zA-Z0-9]/) === null) {
      tail--;
    }

    if (head < tail && s[head].toLowerCase() !== s[tail].toLowerCase()) {
      return false;
    }

    head++;
    tail--;
  }

  return true;
}

// https://leetcode.com/problems/valid-palindrome-ii/
// can delete at most one character

export function validPalindrome(s: string): boolean {
  let head = 0;
  let tail = s.length - 1;

  while (head < tail) {
    if (s[head] === s[tail]) {
      head++;
      tail--;
    } else {
      // two cases
      // either we toss out mismatched character on left or on right
      // since only one mistake allowed, we check both
      // if either is true, we can form palindrome by removing one character
      // otherwise we return false
      if (checkPalindromeSubstring(s, head + 1, tail)) {
        return true;
      } else if (checkPalindromeSubstring(s, head, tail - 1)) {
        return true;
      }
      return false;
    }
  }

  return true;
}

function checkPalindromeSubstring(s: string, head: number, tail: number) {
  while (head < tail) {
    if (s[head] !== s[tail]) {
      return false;
    }

    head++;
    tail--;
  }

  return true;
}
