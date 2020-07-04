import Node from './Node';

export default class DoublyLinkedNode<T> extends Node<T> {
  public prev: DoublyLinkedNode<T> | null;
  public next: DoublyLinkedNode<T> | null;

  constructor(
    value: T,
    next: DoublyLinkedNode<T> | null = null,
    prev: DoublyLinkedNode<T> | null = null
  ) {
    super(value);

    this.prev = prev;
    this.next = next;
  }
}
