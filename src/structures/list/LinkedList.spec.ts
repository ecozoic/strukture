import LinkedList from './LinkedList';

describe('LinkedList', () => {
  let list: LinkedList<string>;

  beforeEach(() => {
    list = new LinkedList<string>();
  });

  it('initializes an empty list', () => {
    expect(list.count).toEqual(0);
    expect(list.empty).toEqual(true);
    expect(list.first).toEqual(null);
    expect(list.last).toEqual(null);
  });

  it('is iterable', () => {
    list.addLast('foo');
    list.addLast('bar');
    list.addLast('baz');

    expect([...list]).toEqual(['foo', 'bar', 'baz']);
  });

  describe('addFirst()', () => {
    it('sets first item to head and tail', () => {
      list.addFirst('foo');

      expect(list.count).toEqual(1);
      expect(list.first).toEqual(list.last);
      expect(list.first).toEqual('foo');
      expect(list.empty).toEqual(false);
    });

    it('adds item to beginning of list', () => {
      list.addFirst('foo');
      list.addFirst('bar');
      list.addFirst('baz');

      expect(list.count).toEqual(3);
      expect(list.first).toEqual('baz');
      expect(list.last).toEqual('foo');
      expect(list.empty).toEqual(false);
    });
  });

  describe('addLast()', () => {
    it('sets first item to head and tail', () => {
      list.addLast('foo');

      expect(list.count).toEqual(1);
      expect(list.first).toEqual(list.last);
      expect(list.first).toEqual('foo');
      expect(list.empty).toEqual(false);
    });

    it('adds item to end of list', () => {
      list.addLast('foo');
      list.addLast('bar');
      list.addLast('baz');

      expect(list.count).toEqual(3);
      expect(list.first).toEqual('foo');
      expect(list.last).toEqual('baz');
      expect(list.empty).toEqual(false);
    });
  });

  describe('removeFirst()', () => {
    it('removes item from beginning of list', () => {
      list.addFirst('foo');
      list.addFirst('bar');
      list.addFirst('baz');

      list.removeFirst();

      expect(list.count).toEqual(2);
      expect(list.first).toEqual('bar');
      expect(list.last).toEqual('foo');
      expect(list.empty).toEqual(false);
    });

    it('empties list', () => {
      list.addFirst('foo');
      list.removeFirst();

      expect(list.count).toEqual(0);
      expect(list.first).toEqual(null);
      expect(list.last).toEqual(null);
      expect(list.empty).toEqual(true);
    });
  });

  describe('removeLast()', () => {
    it('removes item from end of list', () => {
      list.addFirst('foo');
      list.addFirst('bar');
      list.addFirst('baz');

      list.removeLast();

      expect(list.count).toEqual(2);
      expect(list.first).toEqual('baz');
      expect(list.last).toEqual('bar');
      expect(list.empty).toEqual(false);
    });

    it('empties list', () => {
      list.addFirst('foo');
      list.removeLast();

      expect(list.count).toEqual(0);
      expect(list.first).toEqual(null);
      expect(list.last).toEqual(null);
      expect(list.empty).toEqual(true);
    });
  });

  describe('clear()', () => {
    it('clears list', () => {
      list.addFirst('foo');
      list.addFirst('bar');
      list.addFirst('baz');

      list.clear();

      expect(list.count).toEqual(0);
      expect(list.first).toEqual(null);
      expect(list.last).toEqual(null);
      expect(list.empty).toEqual(true);
    });
  });

  describe('remove()', () => {
    it('removes item from list', () => {
      list.addFirst('foo');
      list.addFirst('bar');
      list.addFirst('baz');

      const found = list.remove('foo');

      expect(found).toEqual(true);
      expect(list.count).toEqual(2);
      expect(list.empty).toEqual(false);
      expect(list.first).toEqual('baz');
      expect(list.last).toEqual('bar');
    });

    it('returns false if not found', () => {
      list.addFirst('foo');
      list.addFirst('bar');
      list.addFirst('baz');

      const found = list.remove('qux');

      expect(found).toEqual(false);
      expect(list.count).toEqual(3);
      expect(list.empty).toEqual(false);
    });

    it('properly removes head', () => {
      list.addFirst('foo');
      list.addFirst('bar');
      list.addFirst('baz');

      const found = list.remove('baz');

      expect(found).toEqual(true);
      expect(list.count).toEqual(2);
      expect(list.empty).toEqual(false);
      expect(list.first).toEqual('bar');
      expect(list.last).toEqual('foo');
    });
  });

  describe('contains()', () => {
    it('returns true if item in list', () => {
      list.addFirst('foo');
      list.addFirst('bar');
      list.addFirst('baz');

      const found = list.contains('foo');

      expect(found).toEqual(true);
      expect(list.count).toEqual(3);
      expect(list.empty).toEqual(false);
    });

    it('returns false if item not in list', () => {
      list.addFirst('foo');
      list.addFirst('bar');
      list.addFirst('baz');

      const found = list.contains('qux');

      expect(found).toEqual(false);
      expect(list.count).toEqual(3);
      expect(list.empty).toEqual(false);
    });
  });
});
