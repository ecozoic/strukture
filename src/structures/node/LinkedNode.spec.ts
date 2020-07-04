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
});
