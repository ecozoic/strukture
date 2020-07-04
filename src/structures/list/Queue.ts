import LinkedList from './LinkedList';

export default class Queue<T> {
  private _list: LinkedList<T> = new LinkedList<T>();

  public get count(): number {
    return this._list.count;
  }

  public get empty(): boolean {
    return this._list.empty;
  }

  public enqueue(item: T): void {
    this._list.addLast(item);
  }

  public dequeue(): T | null {
    if (this.empty) {
      return null;
    }

    const value = this._list.first;
    this._list.removeFirst();

    return value;
  }

  public peek(): T | null {
    if (this.empty) {
      return null;
    }

    return this._list.first;
  }

  public clear(): void {
    this._list.clear();
  }

  *[Symbol.iterator](): Generator<T> {
    yield* this._list;
  }
}
