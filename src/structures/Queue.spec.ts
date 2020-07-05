import Queue from './Queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  describe('isEmpty()', () => {
    it('returns true for empty queues', () => {
      expect(queue.isEmpty()).toEqual(true);
    });

    it('returns false for non-empty queues', () => {
      queue.enqueue(1);
      expect(queue.isEmpty()).toEqual(false);
    });
  });

  describe('enqueue()', () => {
    it('adds item to queue', () => {
      queue.enqueue(1);
      expect(queue.isEmpty()).toEqual(false);
    });
  });

  describe('dequeue()', () => {
    it('removes item from queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toEqual(1);
    });

    it('returns null for empty queue', () => {
      expect(queue.dequeue()).toEqual(null);
    });
  });

  describe('peek()', () => {
    it('returns item from queue without dequeueing', () => {
      queue.enqueue(1);

      expect(queue.peek()).toEqual(1);
      expect(queue.peek()).toEqual(1);
      expect(queue.isEmpty()).toEqual(false);
    });

    it('returns null for empty queue', () => {
      expect(queue.peek()).toEqual(null);
    });
  });

  describe('toArray()', () => {
    it('returns array', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.toArray()).toEqual([1, 2, 3]);
    });
  });

  describe('toString()', () => {
    it('returns string', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.toString()).toEqual('1,2,3');
    });

    it('allows optional callback override', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      const callback = (value: number) => `Node:${value}`;

      expect(queue.toString(callback)).toEqual(
        [1, 2, 3].map((i) => callback(i)).join(',')
      );
    });
  });
});
