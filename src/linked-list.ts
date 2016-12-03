// single chain, head pointer, tail pointer, add/remove/find/enumerate operations
// efficient insertion O(1)
import { Node } from './node';

export class LinkedList<T> {
    private _head: Node<T> = null;
    private _tail: Node<T> = null;
    private _count: number = 0;

    public get count(): number {
        return this._count;
    }

    public get empty(): boolean {
        return this._count === 0;
    }

    // O(1)
    public addFirst(value: T): void {
        this.addFirstNode(new Node(value));
    }

    // O(1)
    public addFirstNode(node: Node<T>): void {
        const temp = this._head;
        this._head = node;
        this._head.next = temp;
        this._count++;

        if (this._count === 1) {
            this._tail = this._head;
        }
    }

    // O(1)
    public addLast(value: T): void {
        this.addLastNode(new Node(value));
    }

    // O(1)
    public addLastNode(node: Node<T>): void {
        if (this.empty) {
            this._head = node;
        } else {
            this._tail.next = node;
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
            }
        }
    }

    // O(n)
    public removeLast(): void {
        if (!this.empty) {
            if (this._count === 1) {
                this._head = null;
                this._tail = null;
            } else {
                let current = this._head;
                while (current.next != this._tail) {
                    current = current.next;
                }

                current.next = null;
                this._tail = current;
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