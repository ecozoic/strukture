import LinkedNode from './LinkedNode';

describe('LinkedNode', () => {
  it('stores value', () => {
    const node = new LinkedNode('foo');

    expect(node.value).toEqual('foo');
  });

  it('points to next node', () => {
    const nextNode = new LinkedNode('bar');
    const node = new LinkedNode('foo', nextNode);

    expect(node.next).toBe(nextNode);
  });

  describe('toString()', () => {
    it('returns string', () => {
      const node = new LinkedNode('foo');

      expect(node.toString()).toEqual(node.value);
    });

    it('allows optional callback override', () => {
      const node = new LinkedNode('foo');
      const callback = (value: string) => `Node:${value}`;

      expect(node.toString(callback)).toEqual(callback(node.value));
    });
  });
});
