import CircularQueue from './CircularQueue';

describe('CircularQueue', () => {
  let queue: CircularQueue<number>;

  beforeEach(() => {
    queue = new CircularQueue<number>();
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

  describe('isFull()', () => {
    it('returns true for full queues', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);

      expect(queue.isFull()).toEqual(true);
    });

    it('returns false for non-full queues', () => {
      queue.enqueue(1);

      expect(queue.isFull()).toEqual(false);
    });
  });

  describe('enqueue()', () => {
    it('adds item to the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.isEmpty()).toEqual(false);
    });

    it('throws error if queue is already at max size', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);

      expect(() => {
        queue.enqueue(6);
      }).toThrow();
    });

    it('does not throw error after enqueue/dequeues w/o full reset', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      queue.dequeue();

      queue.enqueue(4);
      queue.enqueue(5);

      queue.dequeue();

      expect(() => {
        queue.enqueue(6);
      }).not.toThrow();
    });

    it('does not throw error after enqueue/dequeues w/ full reset', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      queue.dequeue();
      queue.dequeue();
      queue.dequeue();

      queue.enqueue(4);
      queue.enqueue(5);

      expect(() => {
        queue.enqueue(6);
      }).not.toThrow();
    });
  });

  describe('dequeue()', () => {
    it('returns null for empty queue', () => {
      expect(queue.dequeue()).toEqual(null);
    });

    it('returns next item from the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
      expect(queue.dequeue()).toEqual(null);
    });
  });

  describe('peek()', () => {
    it('returns null for empty queue', () => {
      expect(queue.peek()).toEqual(null);
    });

    it('returns next item from the queue without dequeueing it', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.peek()).toEqual(1);
      expect(queue.peek()).toEqual(1);
      expect(queue.peek()).toEqual(1);
      expect(queue.isEmpty()).toEqual(false);
    });
  });

  describe('size', () => {
    it('returns size of queue', () => {
      expect(queue.size).toEqual(5);
    });
  });
});
