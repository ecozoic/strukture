import Comparator, { CompareFunction } from '../structures/Comparator';

// use to find single item in unsorted array
// Space - O(1)
// Worst Case - O(n)
// Best Case - O(1)
// Average - O(n)
export function linearSearch<T>(
  array: Array<T>,
  seekElement: T,
  comparatorCallback: CompareFunction<T>
): Array<number> {
  const comparator = new Comparator<T>(comparatorCallback);
  const foundIndices: Array<number> = [];

  array.forEach((item, index) => {
    if (comparator.equal(item, seekElement)) {
      foundIndices.push(index);
    }
  });

  return foundIndices;
}

// use to find many values in sorted array
export function binarySearch(): boolean {
  return true;
}
