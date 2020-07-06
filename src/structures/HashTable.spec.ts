import HashTable from './HashTable';

describe('HashTable', () => {
  let table: HashTable<string>;

  beforeEach(() => {
    table = new HashTable<string>();
  });

  describe('get()', () => {
    it('returns undefined if key not found', () => {
      expect(table.get('foo')).toEqual(undefined);
    });

    it('returns value for key', () => {
      table.set('foo', 'foobarbaz');

      expect(table.get('foo')).toEqual('foobarbaz');
    });
  });

  describe('set()', () => {
    it('adds new value', () => {
      table.set('foo', 'foobarbaz');

      expect(table.get('foo')).toEqual('foobarbaz');
    });

    it('updates existing value', () => {
      table.set('foo', 'foobarbaz');
      table.set('foo', 'foobarbaz2');

      expect(table.get('foo')).toEqual('foobarbaz2');
    });
  });

  describe('delete()', () => {
    it('returns true if item is deleted', () => {
      table.set('foo', 'foobarbaz');

      expect(table.delete('foo')).toEqual(true);
      expect(table.get('foo')).toEqual(undefined);
    });

    it('returns false if item not found', () => {
      expect(table.delete('foo')).toEqual(false);
    });
  });
});
