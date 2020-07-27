import DoublyLinkedNode from './DoublyLinkedNode';

describe('DoublyLinkedNode', () => {
  it('stores key', () => {
    const node = new DoublyLinkedNode('key', 'foo');

    expect(node.key).toEqual('key');
  });

  it('stores value', () => {
    const node = new DoublyLinkedNode('', 'foo');

    expect(node.value).toEqual('foo');
  });

  it('points to next node', () => {
    const nextNode = new DoublyLinkedNode('', 'bar');
    const node = new DoublyLinkedNode('', 'foo', nextNode);

    expect(node.next).toBe(nextNode);
  });

  it('pointers to previous node', () => {
    const nextNode = new DoublyLinkedNode('', 'bar');
    const prevNode = new DoublyLinkedNode('', 'baz');
    const node = new DoublyLinkedNode('', 'foo', nextNode, prevNode);

    expect(node.prev).toBe(prevNode);
  });

  describe('toString()', () => {
    it('returns string', () => {
      const node = new DoublyLinkedNode('', 'foo');

      expect(node.toString()).toEqual(node.value);
    });

    it('allows optional callback override', () => {
      const node = new DoublyLinkedNode('', 'foo');
      const callback = (value: string) => `Node:${value}`;

      expect(node.toString(callback)).toEqual(callback(node.value));
    });
  });
});
