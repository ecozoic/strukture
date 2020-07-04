import DoublyLinkedNode from './DoublyLinkedNode';

describe('DoublyLinkedNode', () => {
  it('stores value', () => {
    const node = new DoublyLinkedNode('foo');

    expect(node.value).toEqual('foo');
  });

  it('points to next node', () => {
    const nextNode = new DoublyLinkedNode('bar');
    const node = new DoublyLinkedNode('foo', nextNode);

    expect(node.next).toBe(nextNode);
  });

  it('points to prev node', () => {
    const nextNode = new DoublyLinkedNode('bar');
    const prevNode = new DoublyLinkedNode('baz');
    const node = new DoublyLinkedNode('foo', nextNode, prevNode);

    expect(node.prev).toBe(prevNode);
  });
});
