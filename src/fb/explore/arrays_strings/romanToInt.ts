// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3010/

export default function romanToInt(s: string): number {
  const map = new Map<string, number>();

  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  let index = 0;
  let ans = 0;

  while (index < s.length) {
    const thisValue = map.get(s[index]) as number;
    const nextValue = map.get(s[index + 1]) as number;
    if (s[index + 1] !== undefined && thisValue < nextValue) {
      const diff = nextValue - thisValue;
      ans += diff;
      index += 2;
    } else {
      ans += thisValue;
      index += 1;
    }
  }

  return ans;
}
