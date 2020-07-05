import LinkedNode from './LinkedNode';

/**
 * @class Singly-linked list
 * Complexities:
 * Access - O(n)
 * Search - O(n)
 * Insertion - O(1)
 * Deletion - O(1)
 */
export default class LinkedList<T> {
  /**
   * Pointer to start of list
   * @member
   */
  public head: LinkedNode<T> | null;

  /**
   * Pointer to end of list
   * @member
   */
  public tail: LinkedNode<T> | null;

  /**
   * Creates a new linked list
   * @constructor
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Adds item to beginning of list
   * @param value Value to add
   * @return List
   */
  prepend(value: T): LinkedList<T> {
    const newNode = new LinkedNode<T>(value, this.head);

    if (!this.tail) {
      this.tail = newNode;
    }

    this.head = newNode;

    return this;
  }

  /**
   * Adds item to end of list
   * @param value Value to add
   * @return List
   */
  append(value: T): LinkedList<T> {
    const newNode = new LinkedNode<T>(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentTail = this.tail;
      currentTail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  /**
   * Remove head of the list
   * @return Deleted node or null if list is empty
   */
  deleteHead(): LinkedNode<T> | null {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   * Remove tail of the list
   * @return Deleted node or null if list is empty
   */
  deleteTail(): LinkedNode<T> | null {
    if (!this.head || !this.tail) {
      return null;
    }

    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        if (currentNode.next.next === null) {
          currentNode.next = null;
        } else {
          currentNode = currentNode.next;
        }
      }

      this.tail = currentNode;
    }

    return deletedTail;
  }

  /**
   * Removes first node in list matching specified value
   * @param value Value to delete
   * @return Deleted node or null value is not found or list is empty
   */
  delete(value: T): LinkedNode<T> | null {
    if (!this.head || !this.tail) {
      return null;
    }

    let deletedNode: LinkedNode<T> | null = null;

    if (this.head.value === value) {
      deletedNode = this.head;

      if (this.head === this.tail) {
        this.tail = null;
      }

      this.head = this.head.next;

      return deletedNode;
    }

    let currentNode: LinkedNode<T> | null = this.head;

    while (currentNode !== null && currentNode.next !== null) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;

        if (deletedNode === this.tail) {
          this.tail = currentNode;
        }

        break;
      } else {
        currentNode = currentNode.next;
      }
    }

    return deletedNode;
  }

  /**
   * Find a node with the specified value in the list
   * @param {Object} options
   * @param options.value Value to search for
   * @param options.callback Callback to check for value
   * @returns Found node or null if value is not found or list is empty
   */
  find({
    value,
    callback,
  }: {
    value?: T;
    callback?: (value: T) => boolean;
  }): LinkedNode<T> | null {
    if (!this.head) {
      return null;
    }

    let foundNode: LinkedNode<T> | null = null;
    let currentNode: LinkedNode<T> | null = this.head;

    while (currentNode) {
      if (callback !== undefined && callback(currentNode.value)) {
        foundNode = currentNode;
        break;
      } else if (value !== undefined && currentNode.value === value) {
        foundNode = currentNode;
        break;
      }

      currentNode = currentNode.next;
    }

    return foundNode;
  }

  /**
   * Converts list into an array
   * @return array of nodes
   */
  toArray(): Array<LinkedNode<T>> {
    const nodes: Array<LinkedNode<T>> = [];

    let currentNode = this.head;

    while (currentNode !== null) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * Returns string representation of the list
   * @override
   * @param callback Optional callback to customize output
   * @return string representation of list
   */
  toString(callback?: (value: T) => string): string {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  /**
   * Iterator
   * @override
   */
  *[Symbol.iterator](): Generator<LinkedNode<T>> {
    let currentNode = this.head;
    while (currentNode !== null) {
      yield currentNode;
      currentNode = currentNode.next;
    }
  }
}
