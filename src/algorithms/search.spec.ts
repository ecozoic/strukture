import { linearSearch } from './search';

describe('linearSearch', () => {
  it('returns indices of matching items', () => {
    type Person = { name: string };
    const items: Array<Person> = [
      { name: 'Bill' },
      { name: 'Ted' },
      { name: 'Keanu' },
    ];

    const indices = linearSearch<Person>(items, { name: 'Keanu' }, (a, b) => {
      return a.name === b.name ? 0 : -1;
    });

    expect(indices).toEqual([2]);
  });
});
