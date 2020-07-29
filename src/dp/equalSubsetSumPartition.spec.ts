import essp, { esspMemo, esspDp } from './equalSubsetSumPartition';

describe('essp', () => {
  const set1 = [1, 2, 3, 4];
  const set2 = [1, 1, 3, 4, 7];
  const set3 = [2, 3, 4, 6];

  it('recursive', () => {
    expect(essp(set1)).toEqual(true);
    expect(essp(set2)).toEqual(true);
    expect(essp(set3)).toEqual(false);
  });

  it('memo', () => {
    expect(esspMemo(set1)).toEqual(true);
    expect(esspMemo(set2)).toEqual(true);
    expect(esspMemo(set3)).toEqual(false);
  });

  it('dp', () => {
    expect(esspDp(set1)).toEqual(true);
    expect(esspDp(set2)).toEqual(true);
    expect(esspDp(set3)).toEqual(false);
  });
});
