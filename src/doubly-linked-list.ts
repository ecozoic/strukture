import { DoublyLinkedNode } from './node';

export class DoublyLinkedList<T> {
    private _head: DoublyLinkedNode<T> = null;
    private _tail: DoublyLinkedNode<T> = null;
    private _count: number = 0;

    public get count(): number {
        return this._count;
    }

    public get empty(): boolean {
        return this.count === 0;
    }

    public get first(): T {
        if (this.empty) {
            return null;
        }

        return this._head.value;
    }

    public get last(): T {
        if (this.empty) {
            return null;
        }

        return this._tail.value;
    }

    // O(1)
    public addFirst(value: T): void {
        this.addFirstNode(new DoublyLinkedNode<T>(value));
    }

    private addFirstNode(node: DoublyLinkedNode<T>): void {
        const temp = this._head;
        this._head = node;
        this._head.next = temp;

        if (this.empty) {
            this._tail = this._head;
        } else {
            temp.prev = this._head;
        }

        this._count++;
    }

    // O(1)
    public addLast(value: T): void {
        this.addLastNode(new DoublyLinkedNode<T>(value));
    }

    private addLastNode(node: DoublyLinkedNode<T>): void {
        if (this.empty) {
            this._head = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
        }

        this._tail = node;
        this._count++;
    }

    // O(1)
    public removeFirst(): void {
        if (!this.empty) {
            this._head = this._head.next;
            this._count--;

            if (this.empty) {
                this._tail = null;
            } else {
                this._head.prev = null;
            }
        }
    }

    // O(1)
    public removeLast(): void {
        if (!this.empty) {
            if (this.count === 1) {
                this._head = null;
                this._tail = null;
            } else {
                this._tail.prev.next = null;
                this._tail = this._tail.prev;
            }

            this._count--;
        }
    }

    // O(n)
    public remove(item: T): boolean {
        let previous = null;
        let current = this._head;

        while (current !== null) {
            if (current.value === item) {
                if (previous !== null) {
                    previous.next = current.next;

                    if (current.next === null) {
                        this._tail = previous;
                    } else {
                        current.next.prev = previous;
                    }

                    this._count--;
                } else {
                    this.removeFirst();
                }

                return true;
            }

            previous = current;
            current = current.next;
        }

        return false;
    }

    // O(n)
    public contains(item: T): boolean {
        let current = this._head;
        while (current !== null) {
            if (current.value === item) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    // O(1)
    public clear(): void {
        this._head = null;
        this._tail = null;
        this._count = 0;
    }

    // O(n)
    *[Symbol.iterator]() {
        let current = this._head;
        while (current !== null) {
            yield current.value;
            current = current.next;
        }
    }
}