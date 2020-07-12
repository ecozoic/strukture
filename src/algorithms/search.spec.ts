import { linearSearch, binarySearch } from './search';

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

describe('binarySearch', () => {
  it('returns index of matching item', () => {
    type Star = { name: string };
    const items: Array<Star> = [
      { name: 'Alpha Centauri A' },
      { name: 'Alpha Centauri B' },
      { name: 'Betelgeuse' },
      { name: 'Polaris' },
      { name: 'Rigel' },
      { name: 'Sirius' },
    ];

    const index = binarySearch<Star>(items, { name: 'Rigel' }, (a, b) => {
      if (a.name === b.name) {
        return 0;
      }

      return a.name < b.name ? -1 : 1;
    });

    expect(index).toEqual(4);
  });
});
