import BinaryTreeNode from '../structures/BinaryTreeNode';

export type VisitCallback<T> = (node: BinaryTreeNode<T>) => void;

// Time - O(n)
// Space - O(log n),  worst case O(n)
// equivalent to preorder traversal (root -> left -> right)
// easy modifications for other orders (in order: left -> root -> right; postorder: left -> right -> root)
export function depthFirstSearch<T>(
  node: BinaryTreeNode<T>,
  visitCallback?: VisitCallback<T>
): void {
  visitCallback?.(node);

  if (node.left) {
    depthFirstSearch(node.left, visitCallback);
  }

  if (node.right) {
    depthFirstSearch(node.right, visitCallback);
  }
}

const preorderTraversal = depthFirstSearch;
export { preorderTraversal };

export function depthFirstSearchStack<T>(
  node: BinaryTreeNode<T>,
  visitCallback?: VisitCallback<T>
): void {
  const stack = [node];

  while (stack.length !== 0) {
    const currentNode = stack.pop() as BinaryTreeNode<T>;

    visitCallback?.(currentNode);

    // push right children first b/c left will be first to pop-off
    if (currentNode.right) {
      stack.push(currentNode.right);
    }

    if (currentNode.left) {
      stack.push(currentNode.left);
    }
  }
}

const preorderTraversalStack = depthFirstSearchStack;
export { preorderTraversalStack };

export function inOrderTraversal<T>(
  node: BinaryTreeNode<T>,
  visitCallback?: VisitCallback<T>
): void {
  if (node.left) {
    inOrderTraversal(node.left, visitCallback);
  }

  visitCallback?.(node);

  if (node.right) {
    inOrderTraversal(node.right, visitCallback);
  }
}

// left, root, right
export function inOrderTraversalStack<T>(
  node: BinaryTreeNode<T>,
  visitCallback?: VisitCallback<T>
): void {
  const stack: Array<BinaryTreeNode<T>> = [];
  let currentNode: BinaryTreeNode<T> | null = node;

  while (currentNode !== null || stack.length > 0) {
    while (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop() as BinaryTreeNode<T>;
    visitCallback?.(currentNode);

    currentNode = currentNode.right;
  }
}

export function postOrderTraversal<T>(
  node: BinaryTreeNode<T>,
  visitCallback?: VisitCallback<T>
): void {
  if (node.left) {
    postOrderTraversal(node.left, visitCallback);
  }

  if (node.right) {
    postOrderTraversal(node.right, visitCallback);
  }

  visitCallback?.(node);
}

export function postOrderTraversalStack<T>(
  node: BinaryTreeNode<T>,
  visitCallback?: VisitCallback<T>
): void {
  const stack1 = [node];
  const stack2: Array<BinaryTreeNode<T>> = [];

  while (stack1.length !== 0) {
    const currentNode = stack1.pop() as BinaryTreeNode<T>;
    stack2.push(currentNode);

    if (currentNode.left !== null) {
      stack1.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      stack1.push(currentNode.right);
    }
  }

  while (stack2.length !== 0) {
    const currentNode = stack2.pop() as BinaryTreeNode<T>;
    visitCallback?.(currentNode);
  }
}

// Time - O(n)
// Space - O(n) worst case
export function breadthFirstSearch<T>(
  node: BinaryTreeNode<T>,
  visitCallback?: VisitCallback<T>
): void {
  const queue = [node];

  while (queue.length !== 0) {
    const currentNode = queue.shift() as BinaryTreeNode<T>;

    visitCallback?.(currentNode);

    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
}
