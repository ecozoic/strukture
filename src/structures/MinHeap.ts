import Comparator, { CompareFunction } from './ Comparator';

/**
 * @class A min heap
 */
export default class MinHeap<T> {
  /**
   * Array representation of heap
   * @member
   * @private
   */
  private heap: Array<T>;

  /**
   * Comparator to use for comparisons
   * @member
   * @private
   */
  private compare: Comparator<T>;

  /**
   * Map of heap elements for fast look-up
   * @member
   * @private
   */
  private map: Map<T, T>;

  /**
   * Creates a new min heap
   * @param compare Compare function
   * @constructor
   */
  constructor(compare: CompareFunction<T>) {
    this.heap = [];
    this.map = new Map<T, T>();
    this.compare = new Comparator<T>(compare);
  }

  /**
   * Get index of left child
   * @param parentIndex Index of parent
   * @return Index of left child
   * @private
   */
  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  /**
   * Get index of right child
   * @param parentIndex Index of parent
   * @return Index of right child
   * @private
   */
  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  /**
   * Get index of parent
   * @param childIndex Index of child
   * @return Index of parent
   * @private
   */
  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  /**
   * Check whether or not child has a parent
   * @param childIndex Index of child
   * @return true if child has parent, false otherwise
   * @private
   */
  private hasParent(childIndex: number): boolean {
    return this.getParentIndex(childIndex) >= 0;
  }

  /**
   * Check whether or not item exists in heap
   * @param item Item to look for
   * @return true if item exists in heap, false otherwise
   * @private
   */
  private has(item: T): boolean {
    return this.map.get(item) !== undefined;
  }

  /**
   * Check if parent has a left child
   * @param parentIndex Index of parent
   * @return True if parent has left child, false otherwise
   * @private
   */
  private hasLeftChild(parentIndex: number): boolean {
    return this.getLeftChildIndex(parentIndex) < this.heap.length;
  }

  /**
   * Check if parent has a right child
   * @param parentIndex Index of parent
   * @return True if parent has right child, false otherwise
   * @private
   */
  private hasRightChild(parentIndex: number): boolean {
    return this.getRightChildIndex(parentIndex) < this.heap.length;
  }

  /**
   * Gets left child
   * @param parentIndex Index of parent
   * @return Left child node
   * @private
   */
  private leftChild(parentIndex: number): T {
    return this.heap[this.getLeftChildIndex(parentIndex)];
  }

  /**
   * Gets right child
   * @param parentIndex Index of parent
   * @return Right child node
   * @private
   */
  private rightChild(parentIndex: number): T {
    return this.heap[this.getRightChildIndex(parentIndex)];
  }

  /**
   * Gets parent
   * @param childIndex Index of child
   * @return Parent node
   * @private
   */
  private parent(childIndex: number): T {
    return this.heap[this.getParentIndex(childIndex)];
  }

  /**
   * Swaps two indexes on the heap
   * @param indexOne First index
   * @param indexTwo Second index
   * @private
   */
  private swap(indexOne: number, indexTwo: number): void {
    const tmp = this.heap[indexTwo];
    this.heap[indexTwo] = this.heap[indexOne];
    this.heap[indexOne] = tmp;
  }

  /**
   * Check whether heap is currently empty
   * @return true if heap is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  /**
   * Get positions of items in the heap by matching value
   * @param item Item to find
   * @param comparator Comparator to use for comparison logic
   * @return Array of matching heap indices
   * @private
   */
  private find(
    item: T,
    comparator: Comparator<T> = this.compare
  ): Array<number> {
    const found: Array<number> = [];

    for (let index = 0; index < this.heap.length; index++) {
      if (comparator.equal(this.heap[index], item)) {
        found.push(index);
      }
    }

    return found;
  }

  /**
   * Return string representation of the heap
   * @return string
   * @override
   */
  toString(): string {
    return this.heap.toString();
  }
}
