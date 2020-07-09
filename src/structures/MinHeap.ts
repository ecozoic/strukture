import Comparator, { CompareFunction } from './ Comparator';

/**
 * @class A min heap
 * Complexities:
 * Peek - O(1)
 * Poll - O(log N)
 * Add - O(log N)
 * Remove - O(log N)
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
  protected compare: Comparator<T>;

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
  constructor(compare?: CompareFunction<T>) {
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
   * Ensures heap property is satisfied after item is added to the heap.
   * Lifts item in the heap until it's in proper location
   * @param customStartIndex Optional index to use instead of last item in array
   * @private
   */
  private heapifyUp(customStartIndex?: number): void {
    // take last element (last in array, bottom left of tree)
    // lift it up until its in correct spot
    let currentIndex = customStartIndex || this.heap.length - 1;

    while (
      this.hasParent(currentIndex) &&
      this.compare.greaterThan(
        this.parent(currentIndex),
        this.heap[currentIndex]
      )
    ) {
      const parentIndex = this.getParentIndex(currentIndex);
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  /**
   * Ensures heap property is satisfied after root is polled out.
   * Lowers item in the heap until it's in proper location.
   * @param customStartIndex Optional index to use instead of beginning of array
   * @private
   */
  private heapifyDown(customStartIndex = 0): void {
    // compare parent to its children and swap parent with appropriate child
    let currentIndex = customStartIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.compare.lessThanOrEqual(
          this.rightChild(currentIndex),
          this.leftChild(currentIndex)
        )
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (
        this.compare.lessThanOrEqual(
          this.heap[currentIndex],
          this.heap[nextIndex]
        )
      ) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  /**
   * Return head of the heap without removing it
   * @return First item or null if heap is empty
   */
  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.heap[0];
  }

  /**
   * Remove and return head of the heap
   * @return First item or null if heap is empty
   */
  poll(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heap.length === 1) {
      // if heap is just one element, extract it
      const element = this.heap.pop();

      if (element !== undefined) {
        this.map.delete(element);
        return element;
      }

      return null;
    }

    const item = this.heap[0];

    // move last item in array to head to preserve shape property
    const lastItem = this.heap.pop();
    if (lastItem !== undefined) {
      this.heap[0] = lastItem;
    }

    // heapify down to preserve heap property
    this.heapifyDown();

    return item;
  }

  /**
   * Add a new item to the heap
   * @return this
   */
  add(item: T): this {
    // add new item to end of heap (shape property is preserved)
    this.heap.push(item);

    // add current item to map for fast access
    this.map.set(item, item);

    // preserve heap property by moving element up if necessary
    this.heapifyUp();

    return this;
  }

  /**
   * Remove items from the heap
   * @param item Item to remove
   * @param comparator Comparator to use for comparison logic
   * @return this
   */
  remove(item: T, comparator = this.compare): this {
    // find number of items to remove
    const numberToRemove = this.find(item, comparator).length;

    this.map.delete(item);

    for (let iteration = 0; iteration < numberToRemove; iteration++) {
      // we need to find index to remove each iteration because
      // indices will change after heapify process
      const indexToRemove = this.find(item, comparator).pop();

      // if we need to remove last child in heap, just remove, no need to heapify
      if (indexToRemove === this.heap.length - 1) {
        this.heap.pop();
      } else if (indexToRemove !== undefined) {
        // move last element in heap to vacant position
        const lastElement = this.heap.pop();
        if (lastElement !== undefined) {
          this.heap[indexToRemove] = lastElement;
        }

        // get parent
        const parent = this.parent(indexToRemove);

        // if there is no parent or parent is in correct order, heapify down
        // otherwise heapify up
        if (
          this.hasLeftChild(indexToRemove) &&
          (parent === null ||
            this.compare.lessThanOrEqual(parent, this.heap[indexToRemove]))
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }

    return this;
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
