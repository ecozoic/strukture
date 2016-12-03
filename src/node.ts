export class Node<T> {
    constructor(public value: T, public next: Node<T> = null) { }
}

export class DoublyLinkedNode<T> {
    constructor(public value: T, public next: DoublyLinkedNode<T> = null, public prev: DoublyLinkedNode<T> = null) { }
}