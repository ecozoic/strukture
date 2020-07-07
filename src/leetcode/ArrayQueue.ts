/** @class A fixed-size queue implemented with an array */
export default class ArrayQueue<T> {
  /**
   * Index of front of queue
   * @member
   * @private
   */
  private head: number;

  /**
   * Number of items currently in queue
   * @member
   * @private
   */
  private count: number;

  /**
   * Queue array
   * @member
   * @private
   */
  private queue: Array<T | null>;

  /**
   * Creates a new queue of the specified size
   * @param size Size of the queue
   * @constructor
   */
  constructor(size = 5) {
    this.head = 0;
    this.count = 0;
    this.queue = Array(size).fill(null);
  }

  /**
   * Get size of queue
   * @return Size of queue
   */
  get size(): number {
    return this.queue.length;
  }

  /**
   * Adds item to queue if there is enough space
   * @return true if add was successful, false otherwise
   */
  enQueue(value: T): boolean {
    if (this.isFull()) {
      return false;
    }

    this.queue[this.head + this.count] = value;
    this.count++;

    return true;
  }

  /**
   * Removes next item in the queue
   * @return true if removal was successful, false otherwise
   */
  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    this.head = this.head + 1;
    this.count--;

    if (this.count === 0) {
      this.head = 0;
    }

    return true;
  }

  /**
   * Check if queue is currently empty
   * @return true if queue is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.count === 0;
  }

  /**
   * Check if queue is currently full
   * @return true if queue is full, false otherwise
   */
  isFull(): boolean {
    return this.head + this.count === this.size;
  }
}
