import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BinarySearchTree<T> {
  private root: BinarySearchTreeNode<T>;

  constructor() {
    this.root = new BinarySearchTreeNode<T>(null as any, null as any);
  }

  /**
   * Find a node by its value
   * @param value
   * @return Node if found, null otherwise */
  find(value: number): BinarySearchTreeNode<T> | null {
    return this.root.find(value);
  }

  /**
   * Find the node with min value
   * @return Node
   */
  findMin(): BinarySearchTreeNode<T> {
    return this.root.findMin();
  }

  /**
   * Find the node with max value
   * @return Node
   */
  findMax(): BinarySearchTreeNode<T> {
    return this.root.findMax();
  }

  /**
   * Insert a new node in a tree
   * @param value Value to add
   * @param data Node data
   * @return Inserted node
   */
  insert(value: number, data: T): BinarySearchTreeNode<T> {
    return this.root.insert(value, data);
  }

  /**
   * Check if tree contains a node with specific value
   * @param value Value to check
   * @return True if found, false otherwise
   */
  contains(value: number): boolean {
    return this.root.contains(value);
  }

  /**
   * Remove node from tree by its value
   * @param value Value to remove
   * @return True if removal was successful, false otherwise
   */
  remove(value: number): boolean {
    return this.root.remove(value);
  }

  /**
   * Convert tree to string
   * @return String representation of tree
   * @override
   */
  toString(): string {
    return this.root.toString();
  }
}
