/** @class A fixed-size queue implemented with an array */
export default class ArrayQueue<T> {
  /**
   * Size of the queue
   * @member
   * @private
   */
  private _size: number;

  /**
   * Index of rear of queue
   * @member
   * @private
   */
  private _rear: number;

  /**
   * Index of front of queue
   * @member
   * @private
   */
  private _front: number;

  /**
   * Queue array
   * @member
   * @private
   */
  private _queue: Array<T | null>;

  /**
   * Creates a new queue of the specified size
   * @param size Size of the queue
   * @constructor
   */
  constructor(size = 5) {
    this._size = size;
    this._rear = this._front = -1;
    this._queue = Array(size).fill(null);
  }

  /**
   * Get size of queue
   * @return Size of queue
   */
  get size(): number {
    return this._size;
  }

  /**
   * Returns next item in the queue without dequeueing
   * @return Next value or null if queue is empty
   */
  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this._queue[this._front];
  }

  /**
   * Adds item to queue if there is enough space
   */
  enqueue(value: T): void {
    if (this.isFull()) {
      throw new Error('Max capacity reached');
    } else if (this.isEmpty()) {
      this._front = 0;
    }

    this._queue[++this._rear] = value;
  }

  /**
   * Removes next item in the queue
   * @return Next value or null if queue is empty
   */
  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      const value = this._queue[this._front];

      if (this._front >= this._rear) {
        this._front = -1;
        this._rear = -1;
      } else {
        this._front++;
      }

      return value;
    }
  }

  /**
   * Check if queue is currently empty
   * @return true if queue is empty, false otherwise
   */
  isEmpty(): boolean {
    return this._front === -1;
  }

  /**
   * Check if queue is currently full
   * @return true if queue is full, false otherwise
   */
  isFull(): boolean {
    return this._rear === this._size - 1;
  }
}
