// https://leetcode.com/problems/design-circular-queue/
// ctor(k = size), Front, Rear, enQueue(val), deQueue(val), isEmpty(), isFull()

/** @class A fixed-size circular queue implemented with an array */
export default class CircularQueue<T> {
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

    // circular increment
    this._rear = (this._rear + 1) % this._size;
    this._queue[this._rear] = value;
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
        // circular increment
        this._front = (this._front + 1) % this._size;
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
    if (this._front === 0 && this._rear === this._size - 1) {
      return true;
    } else if (this._front == this._rear + 1) {
      return true;
    }

    return false;
  }
}
