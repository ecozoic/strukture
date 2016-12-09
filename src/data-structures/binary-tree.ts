import { BinaryTreeNode } from './node';
import { Stack } from './stack';

export class BinaryTree<T> {
    private _root: BinaryTreeNode<T> = null;
    private _count: number = 0;

    public get count(): number {
        return this._count;
    }

    public get empty(): boolean {
        return this._root === null;
    }

    public add(item: T): void {
        if (this.empty) {
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

    public contains(item: T): boolean {
        return this.findWithParent(item).parent !== null;
    }

    private findWithParent(value: T): { match: BinaryTreeNode<T>, parent: BinaryTreeNode<T> } {
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
            parent
        };
    }

    public remove(item: T): boolean {
        let { match:current, parent } = this.findWithParent(item);

        if (current === null) {
            return false;
        }

        this._count--;

        // Case 1: current has no right child, current's left replaces current
        if (current.right === null) {
            if (parent === null) {
                this._root = current.left;
            } else {
                const result = parent.compareTo(current.value);
                if (result > 0) {
                    parent.left = current.left;
                } else if (result < 0) {
                    parent.right = current.left;
                }
            }
        } else if (current.right.left === null) {
            // Case 2: current's right child has no left child, current's right child replaces current
            current.right.left = current.left;

            if (parent === null) {
                this._root = current.right;
            } else {
                const result = parent.compareTo(current.value);
                if (result > 0) {
                    parent.left = current.right;
                } else if (result < 0) {
                    parent.right = current.right;
                }
            }
        } else {
            // Case 3: if current's right child has left child, current's right child's left most child replaces current
            let leftMost = current.right.left;
            let leftMostParent = current.right;

            while (leftMost.left !== null) {
                leftMostParent = leftMost;
                leftMost = leftMost.left;
            }

            leftMostParent.left = leftMost.right;
            leftMost.left = current.left;
            leftMost.right = current.right;

            if (parent === null) {
                this._root = leftMost;
            } else {
                const result = parent.compareTo(current.value);
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
    public* preOrder() {
        yield* this.preOrderTraversal(this._root);
    }

    private* preOrderTraversal(node: BinaryTreeNode<T>) {
        if (node !== null) {
            yield node.value;
            yield* this.preOrderTraversal(node.left);
            yield* this.preOrderTraversal(node.right);
        }
    }

    public* inOrder() {
        yield* this.inOrderTraversal(this._root);
    }

    private* inOrderTraversal(node: BinaryTreeNode<T>) {
        if (node !== null) {
            yield* this.inOrderTraversal(node.left);
            yield node.value;
            yield* this.inOrderTraversal(node.right);
        }
    }

    public* postOrder() {
        yield* this.postOrderTraversal(this._root);
    }

    private* postOrderTraversal(node: BinaryTreeNode<T>) {
        if (node !== null) {
            yield* this.postOrderTraversal(node.left);
            yield* this.postOrderTraversal(node.right);
            yield node.value;
        }
    }

    // non-recursive in-order
    *[Symbol.iterator]() {
        if (!this.empty) {
            const stack = new Stack<BinaryTreeNode<T>>();
            let current = this._root;
            let goLeftNext = false;

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
                    current = stack.pop();
                    goLeftNext = false;
                }
            }
        }
    }
}