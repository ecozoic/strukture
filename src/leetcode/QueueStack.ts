// https://leetcode.com/problems/implement-stack-using-queues/
import Queue from '../structures/Queue';

/**
 * @class A stack implemented with queues
 */
export default class QueueStack<T> {
  /**
   * Queue 1
   * @member
   * @private
   */
  private q1: Queue<T>;

  /**
   * Queue 2
   * @member
   * @private
   */
  private q2: Queue<T>;

  /**
   * Creates a new stack
   * @constructor
   */
  constructor() {
    this.q1 = new Queue<T>();
    this.q2 = new Queue<T>();
  }

  /**
   * Pushes a value onto the stack
   * Time - O(n)
   * Space - O(n)
   */
  push(value: T): void {
    if (this.q1.isEmpty()) {
      this.q1.enqueue(value);
    } else {
      while (!this.q1.isEmpty()) {
        const val = this.q1.dequeue();
        if (val !== null) {
          this.q2.enqueue(val);
        }
      }

      this.q1.enqueue(value);

      while (!this.q2.isEmpty()) {
        const val = this.q2.dequeue();
        if (val !== null) {
          this.q1.enqueue(val);
        }
      }
    }
  }

  /**
   * Pops a value off the stack
   * Time - O(1)
   * Space - O(1)
   * @return Value or null if stack is empty
   */
  pop(): T | null {
    return this.q1.dequeue();
  }

  /**
   * Returns top value from the stack without popping it off
   * Time - O(1)
   * Space - O(1)
   * @return Top value or null if stack is empty
   */
  peek(): T | null {
    return this.q1.peek();
  }

  /**
   * Returns a boolean indicating whether or not stack is empty
   * Time - O(1)
   * Space - O(1)
   * @return True if stack is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.q1.isEmpty();
  }
}

/**
 * @class A stack implemented with queues using an alternate approach
 */
export class QueueStack2<T> {
  private q1: Queue<T>;

  /**
   * Creates a new stack
   * @constructor
   */
  constructor() {
    this.q1 = new Queue<T>();
  }

  /**
   * Pushes a value onto the stack
   * Time - O(n)
   * Space - O(1)
   */
  push(value: T): void {
    this.q1.enqueue(value);

    // idealy this would use queue size and decrement to size > 1 and not value comparison
    while (this.q1.peek() !== value) {
      const val = this.q1.dequeue();
      if (val !== null) {
        this.q1.enqueue(val); // reverse
      }
    }
  }

  /**
   * Pops a value off the stack
   * Time - O(1)
   * Space - O(1)
   * @return Value or null if stack is empty
   */
  pop(): T | null {
    return this.q1.dequeue();
  }

  /**
   * Returns top value from the stack without popping it off
   * Time - O(1)
   * Space - O(1)
   * @return Top value or null if stack is empty
   */
  peek(): T | null {
    return this.q1.peek();
  }

  /**
   * Returns a boolean indicating whether or not stack is empty
   * Time - O(1)
   * Space - O(1)
   * @return True if stack is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.q1.isEmpty();
  }
}
