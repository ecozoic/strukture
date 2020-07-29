import { lcs, lcsMemo, lcsDp } from './longestCommonSubsequence';

describe('lcs', () => {
  it('recursive', () => {
    expect(lcs('stone', 'longest')).toEqual(3);
  });

  it('memo', () => {
    expect(lcsMemo('stone', 'longest')).toEqual(3);
  });

  it('dp', () => {
    expect(lcsDp('stone', 'longest')).toEqual(3);
  });
});
