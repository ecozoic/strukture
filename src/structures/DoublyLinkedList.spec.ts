import DoublyLinkedList from './DoublyLinkedList';

describe('DoublyLinkedList', () => {
  let list: DoublyLinkedList<string>;

  beforeEach(() => {
    list = new DoublyLinkedList<string>();
  });

  it('initializes empty list', () => {
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
  });

  it('is iterable', () => {
    list.append('foo').append('bar').append('baz');

    expect([...list].map((node) => node.value)).toEqual(['foo', 'bar', 'baz']);
  });

  describe('prepend()', () => {
    it('adds item to beginning of list', () => {
      list.prepend('foo');

      expect(list.head?.value).toEqual('foo');
      expect(list.tail?.value).toEqual('foo');

      expect(list.head?.prev).toEqual(null);
      expect(list.head?.next).toEqual(null);
      expect(list.tail?.prev).toEqual(null);
      expect(list.tail?.next).toEqual(null);

      list.prepend('bar');

      expect(list.head?.value).toEqual('bar');
      expect(list.tail?.value).toEqual('foo');

      expect(list.head?.prev).toEqual(null);
      expect(list.head?.next?.value).toEqual('foo');
      expect(list.tail?.next).toEqual(null);
      expect(list.tail?.prev?.value).toEqual('bar');

      list.prepend('baz');

      expect(list.head?.value).toEqual('baz');
      expect(list.tail?.value).toEqual('foo');

      expect(list.head?.prev).toEqual(null);
      expect(list.tail?.next).toEqual(null);

      expect(list.head?.next?.value).toEqual('bar');
      expect(list.tail?.prev?.value).toEqual('bar');

      expect(list.head?.next?.prev?.value).toEqual('baz');
      expect(list.tail?.prev?.next?.value).toEqual('foo');
    });
  });

  describe('append()', () => {
    it('adds item to end of list', () => {
      list.append('foo');

      expect(list.head?.value).toEqual('foo');
      expect(list.tail?.value).toEqual('foo');

      expect(list.head?.prev).toEqual(null);
      expect(list.head?.next).toEqual(null);
      expect(list.tail?.prev).toEqual(null);
      expect(list.tail?.next).toEqual(null);

      list.append('bar');

      expect(list.head?.value).toEqual('foo');
      expect(list.tail?.value).toEqual('bar');

      expect(list.head?.prev).toEqual(null);
      expect(list.head?.next?.value).toEqual('bar');
      expect(list.tail?.next).toEqual(null);
      expect(list.tail?.prev?.value).toEqual('foo');

      list.append('baz');

      expect(list.head?.value).toEqual('foo');
      expect(list.tail?.value).toEqual('baz');

      expect(list.head?.prev).toEqual(null);
      expect(list.tail?.next).toEqual(null);

      expect(list.head?.next?.value).toEqual('bar');
      expect(list.tail?.prev?.value).toEqual('bar');

      expect(list.head?.next?.prev?.value).toEqual('foo');
      expect(list.tail?.prev?.next?.value).toEqual('baz');
    });
  });

  describe('deleteHead()', () => {
    it('returns null for empty list', () => {
      expect(list.deleteHead()).toEqual(null);
    });

    it('deletes head', () => {
      list.append('foo').append('bar').append('baz');

      expect(list.deleteHead()?.value).toEqual('foo');
      expect(list.head?.value).toEqual('bar');
      expect(list.head?.prev).toEqual(null);
      expect(list.head?.next?.value).toEqual('baz');
    });

    it('empties single-item list', () => {
      list.append('foo');
      expect(list.deleteHead()?.value).toEqual('foo');
      expect(list.head).toEqual(null);
      expect(list.tail).toEqual(null);
    });
  });

  describe('deleteTail()', () => {
    it('returns null for empty list', () => {
      expect(list.deleteTail()).toEqual(null);
    });

    it('deletes tail', () => {
      list.append('foo').append('bar').append('baz');

      expect(list.deleteTail()?.value).toEqual('baz');
      expect(list.tail?.value).toEqual('bar');
      expect(list.tail?.next).toEqual(null);
      expect(list.tail?.prev?.value).toEqual('foo');
    });

    it('empties single-item list', () => {
      list.append('foo');

      expect(list.deleteTail()?.value).toEqual('foo');
      expect(list.head).toEqual(null);
      expect(list.tail).toEqual(null);
    });
  });

  describe('delete()', () => {
    it('returns null for empty list', () => {
      expect(list.delete('foo')).toEqual(null);
    });

    it('empties single-item list', () => {
      list.append('foo');

      expect(list.delete('foo')?.value).toEqual('foo');
      expect(list.head).toEqual(null);
      expect(list.tail).toEqual(null);
    });

    it('deletes head', () => {
      list.append('foo').append('bar').append('baz');

      expect(list.delete('foo')?.value).toEqual('foo');
      expect(list.head?.value).toEqual('bar');
      expect(list.tail?.value).toEqual('baz');
    });

    it('deletes tail', () => {
      list.append('foo').append('bar').append('baz');

      expect(list.delete('baz')?.value).toEqual('baz');
      expect(list.head?.value).toEqual('foo');
      expect(list.tail?.value).toEqual('bar');
    });

    it('deletes item from list', () => {
      list.append('foo').append('bar').append('baz');

      expect(list.delete('bar')?.value).toEqual('bar');
      expect(list.head?.value).toEqual('foo');
      expect(list.tail?.value).toEqual('baz');

      expect(list.head?.prev).toEqual(null);
      expect(list.head?.next?.value).toEqual('baz');
      expect(list.tail?.next).toEqual(null);
      expect(list.tail?.prev?.value).toEqual('foo');
    });
  });

  describe('find()', () => {
    it('returns null for empty list', () => {
      expect(list.find({ value: 'foo' })).toEqual(null);
    });

    it('returns null if not found', () => {
      list.append('foo').append('bar').append('baz');

      expect(list.find({ value: 'qux' })).toEqual(null);
    });

    it('returns found node by value', () => {
      list.append('foo').append('bar').append('baz');

      expect(list.find({ value: 'foo' })?.value).toEqual('foo');
      expect(list.find({ value: 'bar' })?.value).toEqual('bar');
      expect(list.find({ value: 'baz' })?.value).toEqual('baz');
    });

    it('returns found node by callback', () => {
      list.append('foo').append('bar').append('baz');

      expect(
        list.find({ callback: (value) => value === 'foo' })?.value
      ).toEqual('foo');
    });
  });

  describe('toArray()', () => {
    it('converts list to array', () => {
      list.append('foo').append('bar').append('baz');

      expect(list.toArray().map((node) => node.value)).toEqual([
        'foo',
        'bar',
        'baz',
      ]);
    });
  });

  describe('toString()', () => {
    it('returns string', () => {
      list.append('foo').append('bar').append('baz');

      expect(list.toString()).toEqual('foo,bar,baz');
    });

    it('allows optional callback override', () => {
      list.append('foo').append('bar').append('baz');
      const callback = (value: string) => `Node:${value}`;

      expect(list.toString(callback)).toEqual(
        ['foo', 'bar', 'baz'].map((i) => callback(i)).join(',')
      );
    });
  });
});
