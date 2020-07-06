import StackQueue, { StackQueue2 } from './StackQueue';

describe('StackQueue', () => {
  let queue: StackQueue<number>;

  beforeEach(() => {
    queue = new StackQueue<number>();
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
    it('adds item to the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.isEmpty()).toEqual(false);
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
});

describe('StackQueue2', () => {
  let queue: StackQueue2<number>;

  beforeEach(() => {
    queue = new StackQueue2<number>();
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
    it('adds item to the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.isEmpty()).toEqual(false);
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
});
