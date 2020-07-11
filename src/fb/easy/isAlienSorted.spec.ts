import isAlienSorted from './isAlienSorted';

describe('isAlienSorted', () => {
  it('solves example 1', () => {
    expect(
      isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz')
    ).toEqual(true);
  });

  it('solves example 2', () => {
    expect(
      isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')
    ).toEqual(false);
  });

  it('solves example 3', () => {
    expect(
      isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz')
    ).toEqual(false);
  });
});
