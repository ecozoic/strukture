export default class BinaryTreeNode<T> {
  public value: T | null = null;
  public left: BinaryTreeNode<T> | null = null;
  public right: BinaryTreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  setLeft(node: BinaryTreeNode<T>): this {
    this.left = node;
    return this;
  }

  setRight(node: BinaryTreeNode<T>): this {
    this.right = node;
    return this;
  }
}
