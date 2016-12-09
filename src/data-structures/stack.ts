import { LinkedList } from './linked-list';

export class Stack<T> {
    private _list: LinkedList<T> = new LinkedList<T>();

    public get count(): number {
        return this._list.count;
    }

    public get empty(): boolean {
        return this._list.empty;
    }

    public push(item: T): void {
        this._list.addFirst(item);
    }

    public pop(): T {
        if (this.empty) {
            return null;
        }

        const value = this._list.first;
        this._list.removeFirst();

        return value;
    }

    public peek(): T {
        if (this.empty) {
            return null;
        }

        return this._list.first;
    }

    public clear(): void {
        this._list.clear();
    }

    *[Symbol.iterator]() {
        yield* this._list;
    }
}