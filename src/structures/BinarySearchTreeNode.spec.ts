import BinarySearchTreeNode from './BinarySearchTreeNode';

describe('BinarySearchTreeNode', () => {
  describe('static copyNode()', () => {
    it('copies parameters from source to target node', () => {
      const sourceNode = new BinarySearchTreeNode<{ foo: string }>(10, {
        foo: 'foo',
      });
      sourceNode.left = new BinarySearchTreeNode<{ foo: string }>(5, {
        foo: 'baz',
      });
      sourceNode.right = new BinarySearchTreeNode<{ foo: string }>(15, {
        foo: 'qux',
      });

      const targetNode = new BinarySearchTreeNode<{ foo: string }>(20, {
        foo: 'bar',
      });

      BinarySearchTreeNode.copyNode(sourceNode, targetNode);

      expect(targetNode.data).toBe(sourceNode.data);
      expect(targetNode.value).toEqual(sourceNode.value);
      expect(targetNode.left).toBe(sourceNode.left);
      expect(targetNode.right).toBe(sourceNode.right);
    });
  });

  describe('constructor()', () => {
    it('initializes node', () => {
      const node = new BinarySearchTreeNode<string>(10, 'foo');

      expect(node.value).toEqual(10);
      expect(node.data).toEqual('foo');
      expect(node.left).toEqual(null);
      expect(node.right).toEqual(null);
      expect(node.parent).toEqual(null);
    });
  });

  describe('setLeft()', () => {
    it('sets left child', () => {
      const node = new BinarySearchTreeNode<string>(10, 'foo');
      const left = new BinarySearchTreeNode<string>(5, 'bar');

      node.setLeft(left);

      expect(node.left).toBe(left);
      expect(node.left?.parent).toBe(node);
    });

    it('replaces existing left child', () => {
      const node = new BinarySearchTreeNode<string>(10, 'foo');
      const left1 = new BinarySearchTreeNode<string>(5, 'bar');
      const left2 = new BinarySearchTreeNode<string>(6, 'baz');

      node.setLeft(left1);
      node.setLeft(left2);

      expect(node.left).toBe(left2);
      expect(node.left?.parent).toBe(node);
      expect(left1.parent).toEqual(null);
    });

    it('uses fluent API', () => {
      const node = new BinarySearchTreeNode<string>(10, 'foo');
      const left = new BinarySearchTreeNode<string>(5, 'bar');

      expect(node.setLeft(left)).toBe(node);
    });
  });

  describe('setRight()', () => {
    it('sets right child', () => {
      const node = new BinarySearchTreeNode<string>(10, 'foo');
      const right = new BinarySearchTreeNode<string>(15, 'bar');

      node.setRight(right);

      expect(node.right).toBe(right);
      expect(node.right?.parent).toBe(node);
    });

    it('replaces existing right child', () => {
      const node = new BinarySearchTreeNode<string>(10, 'foo');
      const right1 = new BinarySearchTreeNode<string>(15, 'bar');
      const right2 = new BinarySearchTreeNode<string>(16, 'baz');

      node.setRight(right1);
      node.setRight(right2);

      expect(node.right).toBe(right2);
      expect(node.right?.parent).toBe(node);
      expect(right1.parent).toEqual(null);
    });

    it('uses fluent API', () => {
      const node = new BinarySearchTreeNode<string>(10, 'foo');
      const right = new BinarySearchTreeNode<string>(15, 'bar');

      expect(node.setRight(right)).toBe(node);
    });
  });

  describe('setData()', () => {
    it('sets data', () => {
      const node = new BinarySearchTreeNode<string>(10, 'foo');
      node.setData('bar');

      expect(node.data).toEqual('bar');
    });

    it('uses fluent API', () => {
      const node = new BinarySearchTreeNode<string>(10, 'foo');

      expect(node.setData('bar')).toBe(node);
    });
  });

  describe('setValue()', () => {
    it('sets value', () => {
      const node = new BinarySearchTreeNode<string>(10, 'foo');
      node.setValue(15);

      expect(node.value).toEqual(15);
    });

    it('uses fluent API', () => {
      const node = new BinarySearchTreeNode<string>(10, 'foo');

      expect(node.setValue(15)).toBe(node);
    });
  });

  describe('removeChild()', () => {
    let node: BinarySearchTreeNode<string>;
    let left: BinarySearchTreeNode<string>;
    let right: BinarySearchTreeNode<string>;

    beforeEach(() => {
      node = new BinarySearchTreeNode(10, 'foo');
      left = new BinarySearchTreeNode(5, 'bar');
      right = new BinarySearchTreeNode(15, 'baz');

      node.setLeft(left);
      node.setRight(right);
    });

    it('removes left child', () => {
      expect(node.removeChild(left)).toEqual(true);
      expect(node.left).toEqual(null);
      expect(left.parent).toEqual(null);
    });

    it('removes right child', () => {
      expect(node.removeChild(right)).toEqual(true);
      expect(node.right).toEqual(null);
      expect(right.parent).toEqual(null);
    });

    it('returns false if child not found', () => {
      const unknownNode = new BinarySearchTreeNode<string>(20, 'qux');
      expect(node.removeChild(unknownNode)).toEqual(false);
      expect(node.left).toBe(left);
      expect(node.left?.parent).toBe(node);
      expect(node.right).toBe(right);
      expect(node.right?.parent).toBe(node);
    });
  });

  describe('replaceChild()', () => {
    let node: BinarySearchTreeNode<string>;
    let left: BinarySearchTreeNode<string>;
    let right: BinarySearchTreeNode<string>;

    beforeEach(() => {
      node = new BinarySearchTreeNode(10, 'foo');
      left = new BinarySearchTreeNode(5, 'bar');
      right = new BinarySearchTreeNode(15, 'baz');

      node.setLeft(left);
      node.setRight(right);
    });

    it('replaces left child', () => {
      const newLeft = new BinarySearchTreeNode(6, 'qux');

      expect(node.replaceChild(left, newLeft)).toEqual(true);
      expect(node.left).toBe(newLeft);
      expect(node.left?.parent).toBe(node);
      expect(left.parent).toEqual(null);
    });

    it('replaces right child', () => {
      const newRight = new BinarySearchTreeNode(16, 'qux');

      expect(node.replaceChild(right, newRight)).toEqual(true);
      expect(node.right).toBe(newRight);
      expect(node.right?.parent).toBe(node);
      expect(right.parent).toEqual(null);
    });

    it('returns false if one of arguments is null', () => {
      expect(node.replaceChild(left, null)).toEqual(false);
      expect(node.replaceChild(null, right)).toEqual(false);
    });

    it('returns false if child not found', () => {
      const unknownNode = new BinarySearchTreeNode(20, 'qux');

      expect(node.replaceChild(unknownNode, left)).toEqual(false);
    });
  });

  describe('insert()', () => {
    let root: BinarySearchTreeNode<string>;

    beforeEach(() => {
      root = new BinarySearchTreeNode(10, 'foo');
    });

    it('inserts node with smaller value to the left', () => {
      root.insert(5, 'bar');

      expect(root.left).not.toEqual(null);
      expect(root.left?.parent).toBe(root);
      expect(root.left?.value).toEqual(5);
      expect(root.left?.data).toEqual('bar');
    });

    it('inserts node with smaller value to the left (recursive)', () => {
      root.insert(5, 'bar');
      root.insert(3, 'baz');

      expect(root.left).not.toEqual(null);
      expect(root.left?.parent).toBe(root);
      expect(root.left?.value).toEqual(5);
      expect(root.left?.data).toEqual('bar');

      expect(root.left?.left).not.toEqual(null);
      expect(root.left?.left?.parent).toBe(root.left);
      expect(root.left?.left?.value).toEqual(3);
      expect(root.left?.left?.data).toEqual('baz');
    });

    it('inserts node with larger value to the right', () => {
      root.insert(15, 'bar');

      expect(root.right).not.toEqual(null);
      expect(root.right?.parent).toBe(root);
      expect(root.right?.value).toEqual(15);
      expect(root.right?.data).toEqual('bar');
    });

    it('inserts node with larger value to the right (recursive)', () => {
      root.insert(15, 'bar');
      root.insert(20, 'baz');

      expect(root.right).not.toEqual(null);
      expect(root.right?.parent).toBe(root);
      expect(root.right?.value).toEqual(15);
      expect(root.right?.data).toEqual('bar');

      expect(root.right?.right).not.toEqual(null);
      expect(root.right?.right?.parent).toBe(root.right);
      expect(root.right?.right?.value).toEqual(20);
      expect(root.right?.right?.data).toEqual('baz');
    });

    it('returns new node', () => {
      expect(root.insert(5, 'bar')).toBe(root.left);
      expect(root.insert(15, 'baz')).toBe(root.right);
    });

    it('sets node value and data if empty', () => {
      const emptyNode = new BinarySearchTreeNode<string>(
        null as any,
        null as any
      );

      expect(emptyNode.insert(10, 'foo')).toBe(emptyNode);
      expect(emptyNode.value).toEqual(10);
      expect(emptyNode.data).toEqual('foo');
    });

    it('no-ops for equal values', () => {
      expect(root.insert(10, 'bar')).toBe(root);
      expect(root.data).toEqual('foo');
      expect(root.left).toEqual(null);
      expect(root.right).toEqual(null);
    });
  });

  describe('find()', () => {
    let root: BinarySearchTreeNode<string>;

    beforeEach(() => {
      root = new BinarySearchTreeNode(10, 'foo');
      root.insert(5, 'bar');
      root.insert(15, 'baz');

      root.insert(3, 'qux');
      root.insert(8, 'foobar');

      root.insert(12, 'barbaz');
      root.insert(18, 'bazqux');
    });

    it('returns node value if matches', () => {
      expect(root.find(10)).toBe(root);
    });

    it('searches left subtree for values less than root', () => {
      expect(root.find(3)).toBe(root.left?.left);
    });

    it('searches right subtree for values greater than root', () => {
      expect(root.find(18)).toBe(root.right?.right);
    });

    it('returns null if no node matches value', () => {
      expect(root.find(100)).toEqual(null);
    });
  });

  describe('contains()', () => {
    let root: BinarySearchTreeNode<string>;

    beforeEach(() => {
      root = new BinarySearchTreeNode(10, 'foo');
      root.insert(5, 'bar');
      root.insert(15, 'baz');

      root.insert(3, 'qux');
      root.insert(8, 'foobar');

      root.insert(12, 'barbaz');
      root.insert(18, 'bazqux');
    });

    it('returns true if value in tree', () => {
      expect(root.contains(5)).toEqual(true);
      expect(root.contains(10)).toEqual(true);
      expect(root.contains(15)).toEqual(true);
      expect(root.contains(8)).toEqual(true);
      expect(root.contains(12)).toEqual(true);
    });

    it('returns false if value not in tree', () => {
      expect(root.contains(100)).toEqual(false);
    });
  });

  describe('findMin()', () => {
    let root: BinarySearchTreeNode<string>;

    beforeEach(() => {
      root = new BinarySearchTreeNode(10, 'foo');
      root.insert(5, 'bar');
      root.insert(15, 'baz');

      root.insert(3, 'qux');
      root.insert(8, 'foobar');

      root.insert(12, 'barbaz');
      root.insert(18, 'bazqux');
    });

    it('returns node with min value from the tree', () => {
      expect(root.findMin().value).toEqual(3);
    });
  });

  describe('findMax()', () => {
    let root: BinarySearchTreeNode<string>;

    beforeEach(() => {
      root = new BinarySearchTreeNode(10, 'foo');
      root.insert(5, 'bar');
      root.insert(15, 'baz');

      root.insert(3, 'qux');
      root.insert(8, 'foobar');

      root.insert(12, 'barbaz');
      root.insert(18, 'bazqux');
    });

    it('returns node with max value from the tree', () => {
      expect(root.findMax().value).toEqual(18);
    });
  });

  describe('*traverseInOrder()', () => {
    let root: BinarySearchTreeNode<string>;

    beforeEach(() => {
      root = new BinarySearchTreeNode(10, 'foo');
      root.insert(5, 'bar');
      root.insert(15, 'baz');

      root.insert(3, 'qux');
      root.insert(8, 'foobar');

      root.insert(12, 'barbaz');
      root.insert(18, 'bazqux');
    });

    it('returns values in order', () => {
      expect([...root.traverseInOrder()]).toEqual([3, 5, 8, 10, 12, 15, 18]);
    });
  });

  describe('toString()', () => {
    let root: BinarySearchTreeNode<string>;

    beforeEach(() => {
      root = new BinarySearchTreeNode(10, 'foo');
      root.insert(5, 'bar');
      root.insert(15, 'baz');

      root.insert(3, 'qux');
      root.insert(8, 'foobar');

      root.insert(12, 'barbaz');
      root.insert(18, 'bazqux');
    });

    it('returns string representation of tree', () => {
      expect(root.toString()).toEqual('3,5,8,10,12,15,18');
    });
  });

  describe('remove()', () => {
    let root: BinarySearchTreeNode<string>;

    beforeEach(() => {
      root = new BinarySearchTreeNode(10, 'foo');
      root.insert(5, 'bar');
      root.insert(15, 'baz');

      root.insert(3, 'qux');
      root.insert(8, 'foobar');
      root.insert(9, 'foofoobar');

      root.insert(12, 'barbaz');
      root.insert(18, 'bazqux');
      root.insert(17, 'barbarbaz');
    });

    it('returns false if value not found', () => {
      expect(root.remove(100)).toEqual(false);
    });

    it('handles removal of leaf nodes', () => {
      const nodeToRemove = root.find(3);

      expect(root.remove(3)).toEqual(true);
      expect(root.find(5)?.left).toEqual(null);
      expect(nodeToRemove?.parent).toEqual(null);
      expect(nodeToRemove?.left).toEqual(null);
      expect(nodeToRemove?.right).toEqual(null);
      expect(root.toString()).toEqual('5,8,9,10,12,15,17,18');
    });

    it('handles removal of single node tree by leaving empty node', () => {
      const singleNodeRoot = new BinarySearchTreeNode(10, 'foo');

      expect(singleNodeRoot.remove(10)).toEqual(true);
      expect(singleNodeRoot.value).toEqual(null);
      expect(singleNodeRoot.data).toEqual(null);
    });

    it('handles removal of nodes with one child', () => {
      const nodeToRemove = root.find(8);

      expect(root.remove(8)).toEqual(true);

      const right = root.find(5)?.right;

      expect(right?.value).toEqual(9);
      expect(right?.data).toEqual('foofoobar');
      expect(right?.parent).toBe(root.find(5));
      expect(nodeToRemove?.parent).toEqual(null);
      expect(nodeToRemove?.left).toEqual(null);
      expect(nodeToRemove?.right).toEqual(null);
      expect(root.toString()).toEqual('3,5,9,10,12,15,17,18');
    });

    it('handles removal of root with one child by replacing root', () => {
      const rootWithChild = new BinarySearchTreeNode(10, 'foo');
      rootWithChild.insert(5, 'bar');

      expect(rootWithChild.remove(10)).toEqual(true);
      expect(rootWithChild.value).toEqual(5);
      expect(rootWithChild.data).toEqual('bar');
      expect(rootWithChild.parent).toEqual(null);
      expect(rootWithChild.left).toEqual(null);
      expect(rootWithChild.right).toEqual(null);
    });

    it('handles removal of node with two children', () => {
      expect(root.remove(5)).toEqual(true);
      const movedNode = root.find(8);
      expect(root.left).toBe(movedNode);
      expect(movedNode?.parent).toBe(root);
      expect(movedNode?.left).toBe(root.find(3));
      expect(movedNode?.right).toBe(root.find(9));
      expect(movedNode?.data).toEqual('foobar');

      expect(root.toString()).toEqual('3,8,9,10,12,15,17,18');
    });

    it('handles removal of node with two children where next biggest value is not next right', () => {
      expect(root.remove(15)).toEqual(true);
      const movedNode = root.find(17);
      expect(root.right).toBe(movedNode);
      expect(movedNode?.parent).toBe(root);
      expect(movedNode?.left).toBe(root.find(12));
      expect(movedNode?.right).toBe(root.find(18));
      expect(movedNode?.data).toEqual('barbarbaz');

      expect(root.toString()).toEqual('3,5,8,9,10,12,17,18');
    });

    it.skip('handles removal of node with two children where next biggest value is not next right and has a right child', () => {
      root.insert(17.5, 'test');

      expect(root.remove(15)).toEqual(true);
      const movedNode = root.find(17);
      expect(root.right).toBe(movedNode);
      expect(movedNode?.parent).toBe(root);
      expect(movedNode?.left).toBe(root.find(12));
      expect(movedNode?.right).toBe(root.find(17.5));
      expect(movedNode?.data).toEqual('barbarbaz');

      expect(root.toString()).toEqual('3,5,8,9,10,12,17,17.5,18');
    });
  });
});
