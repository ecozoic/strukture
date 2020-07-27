import { Dictionary } from './TrieNode';

describe('TrieNode', () => {
  it('works as dictionary', () => {
    const dictionary = new Dictionary();

    dictionary.addWord('foo');
    dictionary.addWord('bar');
    dictionary.addWord('baz');

    expect(dictionary.search('foo')).toEqual(true);
    expect(dictionary.search('bar')).toEqual(true);
    expect(dictionary.search('baz')).toEqual(true);

    expect(dictionary.search('noooooo')).toEqual(false);

    expect(dictionary.search('.oo')).toEqual(true);
    expect(dictionary.search('ba.')).toEqual(true);
    expect(dictionary.search('.a.')).toEqual(true);
    expect(dictionary.search('...')).toEqual(true);

    expect(dictionary.search('.ak')).toEqual(false);
    expect(dictionary.search('....')).toEqual(false);
  });
});
