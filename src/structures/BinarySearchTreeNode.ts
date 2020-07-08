/** @class Node in a BST */
export default class BinarySearchTreeNode<T> {
  /**
   * Copy parameters from source node onto target node
   * @param sourceNode Source
   * @param targetNode Target
   * @static
   */
  static copyNode<T>(
    sourceNode: BinarySearchTreeNode<T>,
    targetNode: BinarySearchTreeNode<T>
  ): void {
    targetNode.setData(sourceNode.data);
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }
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
    if (this.value === null) {
      this.value = value;
      this.data = data;

      return this;
    }

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
    console.log(value);

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
        nodeToRemove.setValue(null as any);
        nodeToRemove.setData(null as any);
      }
    } else if (nodeToRemove.left !== null && nodeToRemove.right !== null) {
      // node has two children
      // find next biggest value (min. value in right branch)
      // replace current node value with that node value
      const nextBiggerNode = nodeToRemove.right.findMin();
      if (nextBiggerNode !== nodeToRemove.right) {
        nodeToRemove.setValue(nextBiggerNode.value);
        nodeToRemove.setData(nextBiggerNode.data);
        nodeToRemove.right.remove(nextBiggerNode.value);
      } else {
        // if next right value is next bigger value
        // replace node that is going to be deleted with right node
        nodeToRemove.setValue(nodeToRemove.right.value);
        nodeToRemove.setData(nodeToRemove.right.data);
        nodeToRemove.setRight(nodeToRemove.right.right);
      }
    } else {
      // node has one child
      // make this child direct child of current node's parent
      const childNode = nodeToRemove.left || nodeToRemove.right;
      console.log('one child');
      console.log(nodeToRemove.value);
      console.log(childNode?.value);
      console.log(parent?.value);

      if (parent) {
        parent.replaceChild(nodeToRemove, childNode);
        nodeToRemove.parent = null;
        nodeToRemove.left = null;
        nodeToRemove.right = null;
      } else if (childNode !== null) {
        BinarySearchTreeNode.copyNode(childNode, nodeToRemove);
      }
    }

    return true;
  }

  /**
   * Sets left child of this node
   * @param node Node to set as left child
   * @return this
   */
  setLeft(node: BinarySearchTreeNode<T> | null): this {
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
  setRight(node: BinarySearchTreeNode<T> | null): this {
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

  /**
   * Sets data for current node
   * @param data Data to set
   * @return this
   */
  setData(data: T): this {
    this.data = data;

    return this;
  }

  /**
   * Sets value for current node
   * @param value Value to set
   * @return this
   */
  setValue(value: number): this {
    this.value = value;

    return this;
  }

  /**
   * Traverses the BST in-order (left, root, right)
   * Returns sorted values
   * @return Generator of values
   */
  *traverseInOrder(): Generator<number> {
    if (this.left !== null) {
      yield* this.left.traverseInOrder();
    }

    yield this.value;

    if (this.right !== null) {
      yield* this.right.traverseInOrder();
    }
  }

  /**
   * Check if BST contains a certain value
   * @param value Value to search for
   * @return true if value found, false otherwise
   */
  contains(value: number): boolean {
    return this.find(value) !== null;
  }

  /**
   * Attempt to remove a direct child node
   * @param nodeToRemove Child to remove
   * @return true if removal was successful, false otherwise
   */
  removeChild(nodeToRemove: BinarySearchTreeNode<T>): boolean {
    if (this.left !== null && this.left === nodeToRemove) {
      this.left = null;
      nodeToRemove.parent = null;
      return true;
    }

    if (this.right !== null && this.right === nodeToRemove) {
      this.right = null;
      nodeToRemove.parent = null;
      return true;
    }

    return false;
  }

  /**
   * Attempt to replace a child node with specified replacement
   * @param nodeToReplace Node to replace
   * @param replacementNode Node to replace it with
   * @return true if replacement was succcesful, false otherwise
   */
  replaceChild(
    nodeToReplace: BinarySearchTreeNode<T> | null,
    replacementNode: BinarySearchTreeNode<T> | null
  ): boolean {
    if (nodeToReplace === null || replacementNode === null) {
      return false;
    }

    if (this.left !== null && this.left === nodeToReplace) {
      this.left = replacementNode;
      replacementNode.parent = this;
      nodeToReplace.parent = null;
      return true;
    }

    if (this.right !== null && this.right === nodeToReplace) {
      this.right = replacementNode;
      replacementNode.parent = this;
      nodeToReplace.parent = null;
      return true;
    }

    return false;
  }

  /**
   * Returns node containing minimum value in the tree
   * @return Minimum value node
   */
  findMin(): BinarySearchTreeNode<T> {
    if (this.left === null) {
      return this;
    }

    return this.left.findMin();
  }

  /**
   * Returns node containing maximum value in the tree
   * @return Maximum value node
   */
  findMax(): BinarySearchTreeNode<T> {
    if (this.right === null) {
      return this;
    }

    return this.right.findMax();
  }

  /**
   * Returns string representation of the BST
   * @return string
   * @override
   */
  toString(): string {
    return [...this.traverseInOrder()].toString();
  }
}
