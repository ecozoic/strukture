import ArrayQueue from './ArrayQueue';

describe('ArrayQueue', () => {
  let queue: ArrayQueue<number>;

  beforeEach(() => {
    queue = new ArrayQueue<number>();
  });

  describe('isEmpty()', () => {
    it('returns true for empty queues', () => {
      expect(queue.isEmpty()).toEqual(true);
    });

    it('returns false for non-empty queues', () => {
      queue.enQueue(1);

      expect(queue.isEmpty()).toEqual(false);
    });
  });

  describe('isFull()', () => {
    it('returns true for full queues', () => {
      queue.enQueue(1);
      queue.enQueue(2);
      queue.enQueue(3);
      queue.enQueue(4);
      queue.enQueue(5);

      expect(queue.isFull()).toEqual(true);
    });

    it('returns false for non-full queues', () => {
      queue.enQueue(1);

      expect(queue.isFull()).toEqual(false);
    });
  });

  describe('enQueue()', () => {
    it('adds item to the queue', () => {
      queue.enQueue(1);
      queue.enQueue(2);
      queue.enQueue(3);

      expect(queue.isEmpty()).toEqual(false);
    });

    it('returns false if queue is already at max size', () => {
      queue.enQueue(1);
      queue.enQueue(2);
      queue.enQueue(3);
      queue.enQueue(4);
      queue.enQueue(5);

      expect(queue.enQueue(6)).toEqual(false);
    });

    it('returns false after enQueue/deQueues w/o full reset', () => {
      queue.enQueue(1);
      queue.enQueue(2);
      queue.enQueue(3);

      queue.deQueue();

      queue.enQueue(4);
      queue.enQueue(5);

      queue.deQueue();

      expect(queue.enQueue(6)).toEqual(false);
    });

    it('returns true after enQueue/deQueues w/ full reset', () => {
      queue.enQueue(1);
      queue.enQueue(2);
      queue.enQueue(3);

      queue.deQueue();
      queue.deQueue();
      queue.deQueue();

      queue.enQueue(4);
      queue.enQueue(5);

      expect(queue.enQueue(6)).toEqual(true);
    });
  });

  describe('deQueue()', () => {
    it('returns false for empty queue', () => {
      expect(queue.deQueue()).toEqual(false);
    });

    it('returns true for next item from the queue', () => {
      queue.enQueue(1);
      queue.enQueue(2);
      queue.enQueue(3);

      expect(queue.deQueue()).toEqual(true);
      expect(queue.deQueue()).toEqual(true);
      expect(queue.deQueue()).toEqual(true);
      expect(queue.deQueue()).toEqual(false);
    });
  });

  describe('size', () => {
    it('returns size of queue', () => {
      expect(queue.size).toEqual(5);
    });
  });
});
