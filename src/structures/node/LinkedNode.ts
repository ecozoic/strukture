import Node from './Node';

export default class LinkedNode<T> extends Node<T> {
  public next: LinkedNode<T> | null;

  constructor(value: T, next: LinkedNode<T> | null = null) {
    super(value);

    this.next = next;
  }
}
