import Node from './Node';

describe('Node', () => {
  it('stores value', () => {
    const node = new Node('foo');

    expect(node.value).toEqual('foo');
  });
});
