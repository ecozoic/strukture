// https://leetcode.com/problems/implement-queue-using-stacks/
import Stack from '../structures/Stack';

/**
 * @class A queue implemented with stacks
 */
export default class StackQueue<T> {
  /**
   * Stack 1
   * @member
   * @private
   */
  private s1: Stack<T>;

  /**
   * Stack 2
   * @member
   * @private
   */
  private s2: Stack<T>;

  /**
   * Creates a new queue
   * @constructor
   */
  constructor() {
    this.s1 = new Stack<T>();
    this.s2 = new Stack<T>();
  }

  /**
   * Adds an item to the queue
   * Time - O(n)
   * Space - O(n)
   * @param value Value to add
   */
  enqueue(value: T): void {
    if (this.s1.isEmpty()) {
      // if stack 1 is empty, just push it on
      this.s1.push(value);
    } else {
      // if stack 1 is not empty, pop everything off and push to stack 2
      // then push new value onto stack 1
      // then pop everything off stack 2 and push back onto stack 1
      // effectively reversing the order
      while (!this.s1.isEmpty()) {
        const val = this.s1.pop();
        if (val !== null) {
          this.s2.push(val);
        }
      }

      this.s1.push(value);

      while (!this.s2.isEmpty()) {
        const val = this.s2.pop();
        if (val !== null) {
          this.s1.push(val);
        }
      }
    }
    return;
  }

  /**
   * Returns next item from the queue
   * Time - O(1)
   * Space - O(1)
   * @return Next value or null if queue is empty
   */
  dequeue(): T | null {
    return this.s1.pop();
  }

  /**
   * Returns next value in queue without dequeueing it
   * Time - O(1)
   * Space - O(1)
   * @return Next value or null if queue is empty
   */
  peek(): T | null {
    return this.s1.peek();
  }

  /**
   * Returns a boolean indicating whether or not queue is empty
   * Time - O(1)
   * Space - O(1)
   * @return boolean
   */
  isEmpty(): boolean {
    return this.s1.isEmpty();
  }
}

/**
 * @class A queue implemented with stacks (alternate approach)
 */
export class StackQueue2<T> {
  /**
   * Stack 1
   * @member
   * @private
   */
  private s1: Stack<T>;

  /**
   * Stack 2
   * @member
   * @private
   */
  private s2: Stack<T>;

  /**
   * Pointer to front of queue
   * @member
   * @private
   */
  private front: T | null;

  /**
   * Creates a new queue
   * @constructor
   */
  constructor() {
    this.s1 = new Stack<T>();
    this.s2 = new Stack<T>();
    this.front = null;
  }

  /**
   * Adds an item to the queue
   * Time - O(1)
   * Space - O(n)
   * @param value Value to add
   */
  enqueue(value: T): void {
    if (this.s1.isEmpty()) {
      this.front = value;
    }

    // push onto stack 1
    this.s1.push(value);
  }

  /**
   * Returns next item from the queue
   * Time (Amortized) - O(1)
   * Time (Worst Case) - O(n)
   * Space - O(1)
   * @return Next value or null if queue is empty
   */
  dequeue(): T | null {
    // if stack 2 is empty, pop everything off stack 1 and push onto stack 2
    // to reverse it
    // and then return popped value from stack 2
    // this is similar to StackQueue except the transfer from stack 1 to stack 2 is batched on dequeue()
    // instead of being computed with every enqueue()
    if (this.s2.isEmpty()) {
      while (!this.s1.isEmpty()) {
        const value = this.s1.pop();

        if (value !== null) {
          this.s2.push(value);
        }
      }
    }
    return this.s2.pop();
  }

  /**
   * Returns next value in queue without dequeueing it
   * Time - O(1)
   * Space - O(1)
   * @return Next value or null if queue is empty
   */
  peek(): T | null {
    // if stack 2 is not empty, front element is top of stack
    if (!this.s2.isEmpty()) {
      return this.s2.peek();
    }

    // otherwise front element is pointer to bottom of stack 1
    return this.front;
  }

  /**
   * Returns a boolean indicating whether or not queue is empty
   * Time - O(1)
   * Space - O(1)
   * @return boolean
   */
  isEmpty(): boolean {
    // since both stacks can have values, need to check both
    return this.s1.isEmpty() && this.s2.isEmpty();
  }
}
