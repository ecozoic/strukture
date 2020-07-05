import Stack from './Stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  describe('isEmpty()', () => {
    it('returns true for empty stacks', () => {
      expect(stack.isEmpty()).toEqual(true);
    });

    it('returns false for non-empty stacks', () => {
      stack.push(1);
      expect(stack.isEmpty()).toEqual(false);
    });
  });

  describe('push()', () => {
    it('adds item to stack', () => {
      stack.push(1);
      expect(stack.isEmpty()).toEqual(false);
    });
  });

  describe('pop()', () => {
    it('removes item from stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toEqual(3);
    });

    it('returns null for empty stack', () => {
      expect(stack.pop()).toEqual(null);
    });
  });

  describe('peek()', () => {
    it('returns item from stack without popping', () => {
      stack.push(1);

      expect(stack.peek()).toEqual(1);
      expect(stack.peek()).toEqual(1);
      expect(stack.isEmpty()).toEqual(false);
    });

    it('returns null for empty stack', () => {
      expect(stack.peek()).toEqual(null);
    });
  });

  describe('toArray()', () => {
    it('returns array', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.toArray()).toEqual([3, 2, 1]);
    });
  });

  describe('toString()', () => {
    it('returns string', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.toString()).toEqual('3,2,1');
    });

    it('allows optional callback override', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      const callback = (value: number) => `Node:${value}`;

      expect(stack.toString(callback)).toEqual(
        [3, 2, 1].map((i) => callback(i)).join(',')
      );
    });
  });
});
