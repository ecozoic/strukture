import BinaryTreeNode from './BinaryTreeNode';

describe('BinaryTreeNode', () => {
  it('stores value', () => {
    const node = new BinaryTreeNode('foo');

    expect(node.value).toEqual('foo');
  });

  it('points to left node', () => {
    const leftNode = new BinaryTreeNode('bar');
    const node = new BinaryTreeNode('foo', leftNode);

    expect(node.left).toBe(leftNode);
  });

  it('points to right node', () => {
    const leftNode = new BinaryTreeNode('bar');
    const rightNode = new BinaryTreeNode('baz');
    const node = new BinaryTreeNode('foo', leftNode, rightNode);

    expect(node.right).toBe(rightNode);
  });

  describe('compareTo()', () => {
    it('returns 1 if greater', () => {
      const node = new BinaryTreeNode(1);

      expect(node.compareTo(0)).toEqual(1);
    });

    it('returns -1 if lesser', () => {
      const node = new BinaryTreeNode(1);

      expect(node.compareTo(2)).toEqual(-1);
    });

    it('returns 0 if equal', () => {
      const node = new BinaryTreeNode(1);

      expect(node.compareTo(1)).toEqual(0);
    });
  });
});
