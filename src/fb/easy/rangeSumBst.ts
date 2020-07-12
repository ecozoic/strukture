// https://leetcode.com/problems/range-sum-of-bst/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
type TreeNode = { val: number; left: TreeNode | null; right: TreeNode | null };

export default function rangeSumBst(
  root: TreeNode,
  L: number,
  R: number
): number {
  let sum = 0;
  let node: TreeNode | null = root;
  const stack: Array<TreeNode> = [];

  // in-order traversal w/ loops
  while (node !== null || stack.length !== 0) {
    while (node !== null) {
      stack.push(node);

      // only traverse left subtree if current value is still in range
      if (node.val >= L) {
        node = node.left;
      } else {
        node = null;
      }
    }

    node = stack.pop() as TreeNode;

    if (node.val >= L && node.val <= R) {
      sum += node.val;
    }

    // only traverse right subtree if current value is still in range
    if (node.val <= R) {
      node = node.right;
    } else {
      node = null;
    }
  }

  return sum;
}

// TODO: recursive DFS

/**
 * iterative DFS
 * var rangeSumBST = function(root, L, R) {
    let sum = 0;
    const stack = [];
    stack.push(root);

    while (stack.length !== 0) {
        let node = stack.pop();
        if (node !== null) {
            if (node.val >= L && node.val <= R) {
                sum += node.val;
            }

            if (node.val > L) {
                stack.push(node.left);
            }

            if (node.val < R) {
                stack.push(node.right);
            }
        }
    }

    return sum;
};
 */
