// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3014/
export default function groupAnagrams(
  strs: Array<string>
): Array<Array<string>> {
  const map = new Map<string, Array<string>>();

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort().join('');

    if (!map.has(key)) {
      map.set(key, [strs[i]]);
    } else {
      const value = map.get(key);
      value?.push(strs[i]);
    }
  }

  return [...map.values()];
}
