/** @class Singly-linked node */
export default class DoublyLinkedNode<T> {
  /**
   * Pointer to next node
   * @member
   */
  public next: DoublyLinkedNode<T> | null;

  /**
   * Pointer to previous node
   * @member
   */
  public prev: DoublyLinkedNode<T> | null;

  /**
   * Value stored in node
   * @member
   */
  public value: T;

  /**
   * Key for node
   * @member
   */
  public key: string;

  /**
   * Creates a new linked node
   * @constructor
   * @param value Value to store
   * @param next Pointer to next node in list
   */
  constructor(
    key: string,
    value: T,
    next: DoublyLinkedNode<T> | null = null,
    prev: DoublyLinkedNode<T> | null = null
  ) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  /**
   * Returns string representation of the node
   * @override
   * @param callback Optional callback to customize output
   * @return string representation of node
   */
  toString(callback?: (value: T) => string): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
