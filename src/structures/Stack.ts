import LinkedList from './LinkedList';

/**
 * @class LIFO Stack
 * Complexities:
 * Access - O(n)
 * Search - O(n)
 * Insertion - O(1)
 * Deletion - O(1)
 */
export default class Stack<T> {
  /**
   * Linked list
   * @member
   * @private
   */
  private list: LinkedList<T>;

  /**
   * Creates a new stack
   * @constructor
   */
  constructor() {
    this.list = new LinkedList<T>();
  }

  /**
   * Returns next item from stack without removing it
   * @return Item or null if stack is empty
   */
  peek(): T | null {
    if (this.list.head === null) {
      return null;
    }

    return this.list.head.value;
  }

  /**
   * Adds item to stack
   * @param value Value to add
   */
  push(value: T): void {
    this.list.prepend(value);
  }

  /**
   * Removes next item from stack
   * @return Item or null if stack is empty
   */
  pop(): T | null {
    const poppedItem = this.list.deleteHead();
    return poppedItem !== null ? poppedItem.value : null;
  }

  /**
   * Determine whether or not stack is empty
   * @return Boolean indicating whether or not stack is empty
   */
  isEmpty(): boolean {
    return this.list.head === null;
  }

  /**
   * Returns array representation of the stack
   * @return array
   */
  toArray(): Array<T> {
    return this.list.toArray().map((node) => node.value);
  }

  /**
   * Return string representation of the stack
   * @override
   * @param callback Optional callback to customize output
   * @return string representation
   */
  toString(callback?: (value: T) => string): string {
    return this.list.toString(callback);
  }
}
