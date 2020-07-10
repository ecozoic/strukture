import climbStairs, { climbStairsGeneric, climbStairsTab } from './climbStairs';

describe('climbStairs', () => {
  it('solves when n = 0', () => {
    expect(climbStairs(0)).toEqual(1);
  });

  it('solves when n = 1', () => {
    expect(climbStairs(1)).toEqual(1);
  });

  it('solves when n = 2', () => {
    expect(climbStairs(2)).toEqual(2);
  });

  it('solves when n = 3', () => {
    expect(climbStairs(3)).toEqual(3);
  });

  it('solves when n = 4', () => {
    expect(climbStairs(4)).toEqual(5);
  });
});

describe('climbStairsGeneric', () => {
  it('solves when n = 0', () => {
    expect(climbStairsGeneric(0, [1, 3, 5])).toEqual(1);
  });

  it('solves when n = 1', () => {
    expect(climbStairsGeneric(1, [1, 3, 5])).toEqual(1);
  });

  it('solves when n = 2', () => {
    expect(climbStairsGeneric(2, [1, 3, 5])).toEqual(1);
  });

  it('solves when n = 3', () => {
    expect(climbStairsGeneric(3, [1, 3, 5])).toEqual(2);
  });

  it('solves when n = 4', () => {
    expect(climbStairsGeneric(4, [1, 3, 5])).toEqual(3);
  });
});

describe('climbStairsTab', () => {
  it('solves when n = 0', () => {
    expect(climbStairsTab(0)).toEqual(1);
  });

  it('solves when n = 1', () => {
    expect(climbStairsTab(1)).toEqual(1);
  });

  it('solves when n = 2', () => {
    expect(climbStairsTab(2)).toEqual(2);
  });

  it('solves when n = 3', () => {
    expect(climbStairsTab(3)).toEqual(3);
  });

  it('solves when n = 4', () => {
    expect(climbStairsTab(4)).toEqual(5);
  });
});
