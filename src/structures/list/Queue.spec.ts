import Queue from './Queue';

describe('Queue', () => {
  let queue: Queue<string>;

  beforeEach(() => {
    queue = new Queue<string>();
  });

  it('initializes empty', () => {
    expect(queue.count).toEqual(0);
    expect(queue.empty).toEqual(true);
  });

  it('is iterable', () => {
    queue.enqueue('foo');
    queue.enqueue('bar');
    queue.enqueue('baz');

    expect([...queue]).toEqual(['foo', 'bar', 'baz']);
  });

  describe('enqueue()', () => {
    it('adds item to queue', () => {
      queue.enqueue('foo');
      queue.enqueue('bar');
      queue.enqueue('baz');

      expect(queue.count).toEqual(3);
      expect(queue.empty).toEqual(false);
    });
  });

  describe('peek()', () => {
    it('shows next item in queue', () => {
      queue.enqueue('foo');
      queue.enqueue('bar');
      queue.enqueue('baz');

      expect(queue.peek()).toEqual('foo');
      expect(queue.count).toEqual(3);
      expect(queue.empty).toEqual(false);
    });

    it('returns null if empty', () => {
      expect(queue.peek()).toEqual(null);
    });
  });

  describe('dequeue()', () => {
    it('removes next item from queue', () => {
      queue.enqueue('foo');
      queue.enqueue('bar');
      queue.enqueue('baz');

      expect(queue.dequeue()).toEqual('foo');
      expect(queue.count).toEqual(2);
      expect(queue.empty).toEqual(false);
    });

    it('returns null if empty', () => {
      expect(queue.dequeue()).toEqual(null);
    });
  });

  describe('clear()', () => {
    it('empties queue', () => {
      queue.enqueue('foo');
      queue.enqueue('bar');
      queue.enqueue('baz');

      queue.clear();

      expect(queue.count).toEqual(0);
      expect(queue.empty).toEqual(true);
    });
  });
});
