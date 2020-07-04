import Node from './Node';

export default class BinaryTreeNode<T> extends Node<T> {
  public left: BinaryTreeNode<T> | null;
  public right: BinaryTreeNode<T> | null;

  constructor(
    value: T,
    left: BinaryTreeNode<T> | null = null,
    right: BinaryTreeNode<T> | null = null
  ) {
    super(value);

    this.left = left;
    this.right = right;
  }

  public compareTo(other: T): number {
    if (this.value > other) {
      return 1;
    } else if (this.value < other) {
      return -1;
    }

    return 0;
  }
}
