import BinaryTreeNode from '../node/BinaryTreeNode';
import Stack from '../list/Stack';

// Space - O(N) average / O(N) worst case
// Search - O(log N) average / O(N) worst case
// Insert - O(log N) average / O(N) worst case
// Delete - O(log N) average / O(N) worst case
export default class BinarySearchTree<T> {
  private _root: BinaryTreeNode<T> | null = null;
  private _count = 0;

  public get count(): number {
    return this._count;
  }

  public get empty(): boolean {
    return this._root === null;
  }

  // average O(log N)
  // worst-case O(N)
  // in general O(h) where h is height of tree
  public add(item: T): void {
    if (!this._root) {
      this._root = new BinaryTreeNode<T>(item);
    } else {
      this.addTo(this._root, item);
    }

    this._count++;
  }

  private addTo(node: BinaryTreeNode<T>, value: T): void {
    // Case 1: value is less than the current node value
    if (node.compareTo(value) > 0) {
      if (node.left === null) {
        node.left = new BinaryTreeNode<T>(value);
      } else {
        this.addTo(node.left, value);
      }
    } else {
      // Case 2: value is equal to or greater than the current value
      if (node.right === null) {
        node.right = new BinaryTreeNode<T>(value);
      } else {
        this.addTo(node.right, value);
      }
    }
  }

  // average O(log N)
  // worst-case O(N)
  // in general O(h) where h is height of tree
  public contains(item: T): boolean {
    return this.findWithParent(item).match !== null;
  }

  private findWithParent(
    value: T
  ): { match: BinaryTreeNode<T> | null; parent: BinaryTreeNode<T> | null } {
    let current = this._root;
    let parent = null;

    while (current !== null) {
      const result = current.compareTo(value);

      if (result > 0) {
        // if value is less than current, go left
        parent = current;
        current = current.left;
      } else if (result < 0) {
        // if value is more than current, go right
        parent = current;
        current = current.right;
      } else {
        break;
      }
    }

    return {
      match: current,
      parent,
    };
  }

  // average O(log N)
  // worst-case O(N)
  // in general O(h) where h is height of tree
  public remove(item: T): boolean {
    const { match, parent } = this.findWithParent(item);

    if (match === null) {
      return false;
    }

    this._count--;

    // Case 1: match has no right child, match's left replaces match
    if (match.right === null) {
      if (parent === null) {
        this._root = match.left;
      } else {
        const result = parent.compareTo(match.value);
        if (result > 0) {
          parent.left = match.left;
        } else if (result < 0) {
          parent.right = match.left;
        }
      }
    } else if (match.right.left === null) {
      // Case 2: match's right child has no left child, match's right child replaces match
      match.right.left = match.left;

      if (parent === null) {
        this._root = match.right;
      } else {
        const result = parent.compareTo(match.value);
        if (result > 0) {
          parent.left = match.right;
        } else if (result < 0) {
          parent.right = match.right;
        }
      }
    } else {
      // Case 3: if current's right child has left child, current's right child's left most child replaces current
      let leftMost = match.right.left;
      let leftMostParent = match.right;

      while (leftMost.left !== null) {
        leftMostParent = leftMost;
        leftMost = leftMost.left;
      }

      leftMostParent.left = leftMost.right;
      leftMost.left = match.left;
      leftMost.right = match.right;

      if (parent === null) {
        this._root = leftMost;
      } else {
        const result = parent.compareTo(match.value);
        if (result > 0) {
          parent.left = leftMost;
        } else if (result < 0) {
          parent.right = leftMost;
        }
      }
    }

    return true;
  }

  public clear(): void {
    this._root = null;
    this._count = 0;
  }

  // traversals
  // pre-order (node -> left -> right)
  // in-order (left -> node -> right)
  // post-order (left -> right -> node)
  public *preOrder(): Generator<T> {
    yield* this.preOrderTraversal(this._root);
  }

  private *preOrderTraversal(node: BinaryTreeNode<T> | null): Generator<T> {
    if (node !== null) {
      yield node.value;
      yield* this.preOrderTraversal(node.left);
      yield* this.preOrderTraversal(node.right);
    }
  }

  public *inOrder(): Generator<T> {
    yield* this.inOrderTraversal(this._root);
  }

  private *inOrderTraversal(node: BinaryTreeNode<T> | null): Generator<T> {
    if (node !== null) {
      yield* this.inOrderTraversal(node.left);
      yield node.value;
      yield* this.inOrderTraversal(node.right);
    }
  }

  public *postOrder(): Generator<T> {
    yield* this.postOrderTraversal(this._root);
  }

  private *postOrderTraversal(node: BinaryTreeNode<T> | null): Generator<T> {
    if (node !== null) {
      yield* this.postOrderTraversal(node.left);
      yield* this.postOrderTraversal(node.right);
      yield node.value;
    }
  }

  // non-recursive in-order
  *[Symbol.iterator](): Generator<T> {
    if (this._root) {
      const stack = new Stack<BinaryTreeNode<T>>();
      let current = this._root;
      let goLeftNext = true;

      stack.push(current);

      while (stack.count > 0) {
        if (goLeftNext) {
          while (current.left !== null) {
            stack.push(current);
            current = current.left;
          }
        }

        yield current.value;

        if (current.right !== null) {
          current = current.right;
          goLeftNext = true;
        } else {
          const next = stack.pop();
          if (next) {
            current = next;
          }
          goLeftNext = false;
        }
      }
    }
  }
}
