// https://leetcode.com/problems/verifying-an-alien-dictionary/

/*
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order.
The order of the alphabet is some permutation of lowercase letters.
Given a sequence of words written in the alien language, and the order of the alphabet,
return true if and only if the given words are sorted lexicographicaly in this alien language.

Example 1:
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Example 2:
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

Example 3:
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.)
According to lexicographical rules "apple" > "app", because 'l' > '∅'
where '∅' is defined as the blank character which is less than any other character
*/

// Time: O(order.length + words.length * word.length)
// Space: O(order.length + words.length * word.length)
export default function isAlienSorted(
  words: Array<string>,
  order: string
): boolean {
  // build priority dictionary (lower number = higher priority)
  // O(order.length)
  const dictionary = new Map<string, number>();
  for (let i = 0; i < order.length; i++) {
    dictionary.set(order[i], i);
  }

  // using transitive property, array is in order if every pair of elements is in order
  // O(words.length)
  for (let i = 0; i < words.length; i++) {
    // pair of words to compare
    let isInOrder = true;
    const word = words[i];
    const nextWord = words[i + 1];

    // if we get to end of array, we are in order
    if (nextWord === undefined) {
      return true;
    }

    // find first different character between word and next word
    // O(word.length)
    for (let j = 0; j < word.length; j++) {
      if (word[j] !== nextWord[j]) {
        if (nextWord[j] === undefined) {
          isInOrder = false;
          break;
        }

        const letterPriority = dictionary.get(word[j]) as number;
        const nextLetterPriority = dictionary.get(nextWord[j]) as number;

        if (letterPriority > nextLetterPriority) {
          isInOrder = false;
        }

        break;
      }
    }

    if (!isInOrder) {
      break;
    }
  }

  return false;
}
