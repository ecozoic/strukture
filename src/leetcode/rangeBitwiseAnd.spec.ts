import rangeBitwiseAnd from './rangeBitwiseAnd';

describe('rangeBitwiseAnd', () => {
  it('works', () => {
    expect(rangeBitwiseAnd(8, 12)).toEqual(8);
    expect(rangeBitwiseAnd(7, 12)).toEqual(0);
  });
});
