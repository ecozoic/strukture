export class Node<T> {
    constructor(public value: T, public next: Node<T> = null) { }
}

export class DoublyLinkedNode<T> {
    constructor(public value: T, public next: DoublyLinkedNode<T> = null, public prev: DoublyLinkedNode<T> = null) { }
}

export class BinaryTreeNode<T> {
    constructor(public value: T, public left: BinaryTreeNode<T> = null, public right: BinaryTreeNode<T> = null) { }

    public compareTo(other: T): number {
        if (this.value > other) {
            return 1;
        } else if (this.value < other) {
            return -1;
        }

        return 0;
    }
}