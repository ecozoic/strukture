export class ArrayQueue<T> {
    private _items: T[] = [];

    public get count(): number {
        return this._items.length;
    }

    public get empty(): boolean {
        return this.count === 0;
    }

    public enqueue(item: T): void {
        this._items.push(item);
    }

    public dequeue(): T {
        if (this.empty) {
            return null;
        }

        return this._items.splice(0, 1)[0];
    }

    public peek(): T {
        if (this.empty) {
            return null;
        }

        return this._items[0];
    }

    public clear(): void {
        this._items.splice(0);
    }

    *[Symbol.iterator]() {
        yield* this._items;
    }
}