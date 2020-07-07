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

  describe('insert()', () => {});
  describe('find()', () => {});
  describe('contains()', () => {});
  describe('findMin()', () => {});
  describe('findMax()', () => {});
  describe('*traverseInOrder()', () => {});
  describe('toString()', () => {});
  describe('remove()', () => {});
});
