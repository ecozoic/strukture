import Stack from './Stack';

describe('Stack', () => {
  let stack: Stack<string>;

  beforeEach(() => {
    stack = new Stack<string>();
  });

  it('initializes empty', () => {
    expect(stack.count).toEqual(0);
    expect(stack.empty).toEqual(true);
  });

  it('is iterable', () => {
    stack.push('foo');
    stack.push('bar');
    stack.push('baz');

    expect([...stack]).toEqual(['baz', 'bar', 'foo']);
  });

  describe('push()', () => {
    it('adds item to stack', () => {
      stack.push('foo');
      stack.push('bar');
      stack.push('baz');

      expect(stack.count).toEqual(3);
      expect(stack.empty).toEqual(false);
    });
  });

  describe('peek()', () => {
    it('shows next item in stack', () => {
      stack.push('foo');
      stack.push('bar');
      stack.push('baz');

      expect(stack.peek()).toEqual('baz');
      expect(stack.count).toEqual(3);
      expect(stack.empty).toEqual(false);
    });

    it('returns null if empty', () => {
      expect(stack.peek()).toEqual(null);
    });
  });

  describe('pop()', () => {
    it('returns next item in stack', () => {
      stack.push('foo');
      stack.push('bar');
      stack.push('baz');

      expect(stack.pop()).toEqual('baz');
      expect(stack.count).toEqual(2);
      expect(stack.empty).toEqual(false);
    });

    it('returns null if empty', () => {
      expect(stack.pop()).toEqual(null);
    });
  });

  describe('clear()', () => {
    it('empties stack', () => {
      stack.push('foo');
      stack.push('bar');
      stack.push('baz');

      stack.clear();

      expect(stack.count).toEqual(0);
      expect(stack.empty).toEqual(true);
    });
  });
});
