import LinkedList from './LinkedList';

/**
 * @class FIFO Queue
 * Complexities
 * Access - O(n)
 * Search - O(n)
 * Insertion (enqueue) - O(1)
 * Deletion (dequeue) - O(1)
 */
export default class Queue<T> {
  /**
   * Linked list
   * @member
   * @private
   */
  private list: LinkedList<T>;

  /**
   * Creates a new queue
   * @constructor
   */
  constructor() {
    this.list = new LinkedList<T>();
  }

  /**
   * Adds item to queue
   * @param value Value to add
   */
  enqueue(value: T): void {
    this.list.append(value);
  }

  /**
   * Removes next item from queue
   * @return Item or null if queue is empty
   */
  dequeue(): T | null {
    const dequeuedItem = this.list.deleteHead();
    return dequeuedItem !== null ? dequeuedItem.value : null;
  }

  /**
   * Returns next item from queue without removing it
   * @return Item or null if queue is empty
   */
  peek(): T | null {
    if (this.list.head === null) {
      return null;
    }

    return this.list.head.value;
  }

  /**
   * Determine whether or not queue is empty
   * @return Boolean indicating whether or not queue is empty
   */
  isEmpty(): boolean {
    return this.list.head === null;
  }

  /**
   * Returns array representation of the queue
   * @return array
   */
  toArray(): Array<T> {
    return this.list.toArray().map((node) => node.value);
  }

  /**
   * Return string representation of the queue
   * @override
   * @param callback Optional callback to customize output
   * @return string representation
   */
  toString(callback?: (value: T) => string): string {
    return this.list.toString(callback);
  }
}
