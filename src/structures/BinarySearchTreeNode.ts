/** @class Node in a BST */
export default class BinarySearchTreeNode<T> {
  /**
   * Value of the node used for comparisons
   * @member
   */
  public value: number;

  /**
   * Arbitary data attached to each node
   * @member
   */
  public data: T;

  /**
   * Pointer to left child
   * @member
   */
  public left: BinarySearchTreeNode<T> | null;

  /**
   * Pointer to right child
   * @member
   */
  public right: BinarySearchTreeNode<T> | null;

  /**
   * Pointer to parent
   * @member
   */
  public parent: BinarySearchTreeNode<T> | null;

  constructor(value: number, data: T) {
    this.value = value;
    this.data = data;

    this.left = null;
    this.right = null;
    this.parent = null;
  }

  /**
   * Performs binary search in tree for specified value
   * @param value Value to search for
   * @return Node if found, null otherwise
   */
  find(value: number): BinarySearchTreeNode<T> | null {
    if (this.value === value) {
      return this;
    }

    if (value < this.value && this.left !== null) {
      return this.left.find(value);
    }

    if (value > this.value && this.right !== null) {
      return this.right.find(value);
    }

    return null;
  }

  /**
   * Inserts new node into the tree
   * @param value Value to insert
   * @param data Data to insert with value
   * @return Inserted node
   */
  insert(value: number, data: T): BinarySearchTreeNode<T> {
    // what is this for?
    if (this.value === null) {
      this.value = value;
      this.data = data;

      return this;
    }
    // end what is this for?

    if (value < this.value) {
      if (this.left !== null) {
        return this.left.insert(value, data);
      }

      const newNode = new BinarySearchTreeNode<T>(value, data);
      this.setLeft(newNode);

      return newNode;
    }

    if (value > this.value) {
      if (this.right !== null) {
        return this.right.insert(value, data);
      }

      const newNode = new BinarySearchTreeNode<T>(value, data);
      this.setRight(newNode);

      return newNode;
    }

    return this;
  }

  /**
   * Remove a node from the tree
   * @param value Value of node to remove
   * @return True if node was removed, false otherwise
   */
  remove(value: number): boolean {
    const nodeToRemove = this.find(value);

    if (nodeToRemove === null) {
      return false;
    }

    const { parent } = nodeToRemove;

    if (nodeToRemove.left === null && nodeToRemove.right === null) {
      // node is a leaf
      if (parent !== null) {
        // node has a parent, remove pointer to this node
        parent.removeChild(nodeToRemove);
      } else {
        // node has no parent, erase current node value
        nodeToRemove.setValue(undefined);
      }
    } else if (nodeToRemove.left !== null && nodeToRemove.right !== null) {
      // node has two children
    } else {
      // node has one child
    }

    // clear parent of removed node
    nodeToRemove.parent = null;

    return true;
  }

  /**
   * Sets left child of this node
   * @param node Node to set as left child
   * @return this
   */
  private setLeft(node: BinarySearchTreeNode<T>): this {
    // reset parent for left node since it is going to be detached
    if (this.left !== null) {
      this.left.parent = null;
    }

    // attach new node to left
    this.left = node;

    // set current node as parent
    if (this.left !== null) {
      this.left.parent = this;
    }

    return this;
  }

  /**
   * Sets right child of this node
   * @param node Node to set as right child
   * @return this
   */
  private setRight(node: BinarySearchTreeNode<T>): this {
    // reset parent for right node since it is going to be detached
    if (this.right !== null) {
      this.right.parent = null;
    }

    // attach new node to right
    this.right = node;

    // set current node as parent
    if (this.right !== null) {
      this.right.parent = this;
    }

    return this;
  }
}
