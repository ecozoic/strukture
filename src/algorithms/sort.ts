import Comparator, { CompareFunction } from '../structures/Comparator';
// quick sort
// 1. pivot selection
// 2. partition
// 3. recurse
// O(n log n)
// worst case O(n^2) if array is already sorted in increasing order and we pick first element as pivot
export function quickSort<T>(
  originalArray: Array<T>,
  comparatorCallback?: CompareFunction<T>
): Array<T> {
  if (originalArray.length <= 1) {
    return originalArray;
  }

  const comparator = new Comparator(comparatorCallback);

  // clone array to avoid side effects (not sorting in place)
  const array = [...originalArray];

  const leftArray = [];
  const rightArray = [];

  // take first element as pivot
  const pivotElement = array.shift() as T;
  const centerArray = [pivotElement];

  // split all array elements b/w left, right, and center arrays
  while (array.length) {
    const currentElement = array.shift() as T;

    if (comparator.equal(currentElement, pivotElement)) {
      centerArray.push(currentElement);
    } else if (comparator.lessThan(currentElement, pivotElement)) {
      leftArray.push(currentElement);
    } else {
      rightArray.push(currentElement);
    }
  }

  // sort left and right arrays recursively
  const leftArraySorted = quickSort(leftArray, comparatorCallback);
  const rightArraySorted = quickSort(rightArray, comparatorCallback);

  // combine
  return leftArraySorted.concat(centerArray, rightArraySorted);
}

export function mergeSort<T>(
  originalArray: Array<T>,
  comparatorCallback?: CompareFunction<T>
): Array<T> {
  if (originalArray.length <= 1) {
    return originalArray;
  }

  const comparator = new Comparator(comparatorCallback);

  // find midpoint
  const mid = Math.floor(originalArray.length / 2);
  const leftArray = originalArray.slice(0, mid);
  const rightArray = originalArray.slice(mid, originalArray.length);

  // sort 2 halves of array
  const leftSortedArray = mergeSort(leftArray, comparatorCallback);
  const rightSortedArray = mergeSort(rightArray, comparatorCallback);

  // merge two sorted arrays into one
  let sortedArray: Array<T> = [];

  while (leftSortedArray.length && rightSortedArray.length) {
    let minimumElement: T | null = null;

    // find min element
    if (comparator.lessThanOrEqual(leftSortedArray[0], rightSortedArray[0])) {
      minimumElement = leftSortedArray.shift() as T;
    } else {
      minimumElement = rightSortedArray.shift() as T;
    }

    sortedArray.push(minimumElement);
  }

  // if arrays still have elements, concatenate since already sorted
  if (leftSortedArray.length) {
    sortedArray = sortedArray.concat(leftSortedArray);
  }

  if (rightSortedArray.length) {
    sortedArray = sortedArray.concat(rightSortedArray);
  }

  return sortedArray;
}
