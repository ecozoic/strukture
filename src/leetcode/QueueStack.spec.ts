import QueueStack, { QueueStack2 } from './QueueStack';

describe('QueueStack', () => {
  let stack: QueueStack<number>;

  beforeEach(() => {
    stack = new QueueStack<number>();
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
      stack.push(2);
      stack.push(3);

      expect(stack.isEmpty()).toEqual(false);
    });
  });

  describe('pop()', () => {
    it('removes item from stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
    });

    it('returns null for empty stack', () => {
      expect(stack.pop()).toEqual(null);
    });
  });

  describe('peek()', () => {
    it('returns item from stack without popping', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.peek()).toEqual(3);
      expect(stack.peek()).toEqual(3);
      expect(stack.isEmpty()).toEqual(false);
    });

    it('returns null for empty stack', () => {
      expect(stack.peek()).toEqual(null);
    });
  });
});

describe('QueueStack2', () => {
  let stack: QueueStack2<number>;

  beforeEach(() => {
    stack = new QueueStack2<number>();
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
      stack.push(2);
      stack.push(3);

      expect(stack.isEmpty()).toEqual(false);
    });
  });

  describe('pop()', () => {
    it('removes item from stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
    });

    it('returns null for empty stack', () => {
      expect(stack.pop()).toEqual(null);
    });
  });

  describe('peek()', () => {
    it('returns item from stack without popping', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.peek()).toEqual(3);
      expect(stack.peek()).toEqual(3);
      expect(stack.isEmpty()).toEqual(false);
    });

    it('returns null for empty stack', () => {
      expect(stack.peek()).toEqual(null);
    });
  });
});
