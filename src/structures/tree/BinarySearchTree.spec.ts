import BinarySearchTree from './BinarySearchTree';

describe('BinarySearchTree', () => {
  let bst: BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree<number>();
  });

  it('initializes empty', () => {
    expect(bst.count).toEqual(0);
    expect(bst.empty).toEqual(true);
  });

  it('is iterable (in order traversal)', () => {
    bst.add(8);
    bst.add(3);
    bst.add(10);
    bst.add(1);
    bst.add(6);
    bst.add(4);
    bst.add(7);
    bst.add(14);
    bst.add(13);

    expect([...bst]).toEqual([1, 3, 4, 6, 7, 8, 10, 13, 14]);
  });

  describe('add()', () => {
    it('adds values to tree', () => {
      bst.add(8);
      bst.add(3);
      bst.add(10);
      bst.add(1);
      bst.add(6);
      bst.add(4);
      bst.add(7);
      bst.add(14);
      bst.add(13);

      expect(bst.count).toEqual(9);
      expect(bst.empty).toEqual(false);
    });
  });

  describe('remove()', () => {
    it('removes', () => {
      // TODO
    });
  });

  describe('contains()', () => {
    it('finds value in tree', () => {
      bst.add(8);
      bst.add(3);
      bst.add(10);
      bst.add(1);
      bst.add(6);
      bst.add(4);
      bst.add(7);
      bst.add(14);
      bst.add(13);

      // root
      expect(bst.contains(8)).toEqual(true);

      // left
      expect(bst.contains(3)).toEqual(true);

      // right
      expect(bst.contains(14)).toEqual(true);
    });
  });

  describe('clear()', () => {
    it('empties tree', () => {
      bst.add(8);
      bst.add(3);
      bst.add(10);
      bst.add(1);
      bst.add(6);
      bst.add(4);
      bst.add(7);
      bst.add(14);
      bst.add(13);

      bst.clear();

      expect(bst.count).toEqual(0);
      expect(bst.empty).toEqual(true);
    });
  });

  describe('preOrder()', () => {
    it('traverses in preorder (root, left, right)', () => {
      bst.add(8);
      bst.add(3);
      bst.add(10);
      bst.add(1);
      bst.add(6);
      bst.add(4);
      bst.add(7);
      bst.add(14);
      bst.add(13);

      expect([...bst.preOrder()]).toEqual([8, 3, 1, 6, 4, 7, 10, 14, 13]);
    });
  });

  describe('inOrder()', () => {
    it('traverses in order (left, root, right)', () => {
      bst.add(8);
      bst.add(3);
      bst.add(10);
      bst.add(1);
      bst.add(6);
      bst.add(4);
      bst.add(7);
      bst.add(14);
      bst.add(13);

      expect([...bst.inOrder()]).toEqual([1, 3, 4, 6, 7, 8, 10, 13, 14]);
    });
  });

  describe('postOrder()', () => {
    it('traverses in postorder (left, right, root)', () => {
      bst.add(8);
      bst.add(3);
      bst.add(10);
      bst.add(1);
      bst.add(6);
      bst.add(4);
      bst.add(7);
      bst.add(14);
      bst.add(13);

      expect([...bst.postOrder()]).toEqual([1, 4, 7, 6, 3, 13, 14, 10, 8]);
    });
  });
});
