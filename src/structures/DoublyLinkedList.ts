import DoublyLinkedNode from './DoublyLinkedNode';

/**
 * @class Doubly-linked list
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
  public head: DoublyLinkedNode<T> | null;

  /**
   * Pointer to end of list
   * @member
   */
  public tail: DoublyLinkedNode<T> | null;

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
  prepend(key: string, value: T): LinkedList<T> {
    const newNode = new DoublyLinkedNode<T>(key, value, this.head);

    if (!this.tail) {
      this.tail = newNode;
    }

    if (this.head) {
      this.head.prev = newNode;
    }

    this.head = newNode;

    return this;
  }

  /**
   * Adds item to end of list
   * @param value Value to add
   * @return List
   */
  append(key: string, value: T): LinkedList<T> {
    const newNode = new DoublyLinkedNode<T>(key, value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentTail = this.tail;
      currentTail.next = newNode;
      newNode.prev = currentTail;
      this.tail = newNode;
    }

    return this;
  }

  /**
   * Remove head of the list
   * @return Deleted node or null if list is empty
   */
  deleteHead(): DoublyLinkedNode<T> | null {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
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
  deleteTail(): DoublyLinkedNode<T> | null {
    if (!this.head || !this.tail) {
      return null;
    }

    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = deletedTail.prev as DoublyLinkedNode<T>;
      this.tail.next = null;
    }

    return deletedTail;
  }

  /**
   * Removes first node in list matching specified value
   * @param value Value to delete
   * @return Deleted node or null value is not found or list is empty
   */
  delete(value: T): DoublyLinkedNode<T> | null {
    if (!this.head || !this.tail) {
      return null;
    }

    let deletedNode: DoublyLinkedNode<T> | null = null;

    if (this.head.value === value) {
      return this.deleteHead();
    } else if (this.tail.value === value) {
      return this.deleteTail();
    }

    let currentNode: DoublyLinkedNode<T> | null = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        deletedNode = currentNode;

        if (deletedNode.prev) {
          deletedNode.prev.next = deletedNode.next;
        }

        if (deletedNode.next) {
          deletedNode.next.prev = deletedNode.prev;
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
  }): DoublyLinkedNode<T> | null {
    if (!this.head) {
      return null;
    }

    let foundNode: DoublyLinkedNode<T> | null = null;
    let currentNode: DoublyLinkedNode<T> | null = this.head;

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
  toArray(): Array<DoublyLinkedNode<T>> {
    const nodes: Array<DoublyLinkedNode<T>> = [];

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
  *[Symbol.iterator](): Generator<DoublyLinkedNode<T>> {
    let currentNode = this.head;
    while (currentNode !== null) {
      yield currentNode;
      currentNode = currentNode.next;
    }
  }

  remove(node: DoublyLinkedNode<T>): void {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }
  }
}
