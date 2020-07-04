import DoublyLinkedNode from '../node/DoublyLinkedNode';

export default class DoublyLinkedList<T> {
  private _head: DoublyLinkedNode<T> | null = null;
  private _tail: DoublyLinkedNode<T> | null = null;
  private _count = 0;

  public get count(): number {
    return this._count;
  }

  public get empty(): boolean {
    return this.count === 0;
  }

  public get first(): T | null {
    if (!this._head) {
      return null;
    }

    return this._head.value;
  }

  public get last(): T | null {
    if (!this._tail) {
      return null;
    }

    return this._tail.value;
  }

  // O(1)
  public addFirst(value: T): void {
    const temp = this._head;
    this._head = new DoublyLinkedNode(value);
    this._head.next = temp;

    if (this.empty) {
      this._tail = this._head;
    } else if (temp) {
      temp.prev = this._head;
    }

    this._count++;
  }

  // O(1)
  public addLast(value: T): void {
    const node = new DoublyLinkedNode(value);

    if (this.empty) {
      this._head = node;
    } else if (this._tail) {
      this._tail.next = node;
      node.prev = this._tail;
    }

    this._tail = node;
    this._count++;
  }

  // O(1)
  public removeFirst(): void {
    if (this._head) {
      this._head = this._head.next;
      this._count--;

      if (this.empty) {
        this._tail = null;
      } else if (this._head) {
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
      } else if (this._tail && this._tail.prev) {
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
  *[Symbol.iterator](): Generator<T> {
    let current = this._head;
    while (current !== null) {
      yield current.value;
      current = current.next;
    }
  }
}
