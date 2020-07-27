import HashSet from './HashSet';

describe('HashSet', () => {
  let set: HashSet;

  beforeEach(() => {
    set = new HashSet();
  });

  it('adds keys to the set', () => {
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.contains(1)).toEqual(true);
    expect(set.contains(2)).toEqual(true);
    expect(set.contains(3)).toEqual(true);
  });

  it('removes keys from the set', () => {
    set.add(1);
    set.remove(1);

    expect(set.contains(1)).toEqual(false);
  });
});
