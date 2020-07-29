import knapsack, { knapsackMemo, knapsackDp } from './knapsack';

describe('knapsack', () => {
  const profits = [1, 6, 10, 16];
  const weights = [1, 2, 3, 5];

  it('recursive', () => {
    expect(knapsack(profits, weights, 7)).toEqual(22);
    expect(knapsack(profits, weights, 6)).toEqual(17);
  });

  it('memo', () => {
    expect(knapsackMemo(profits, weights, 7)).toEqual(22);
    expect(knapsackMemo(profits, weights, 6)).toEqual(17);
  });

  it('dp', () => {
    expect(knapsackDp(profits, weights, 7)).toEqual(22);
    expect(knapsackDp(profits, weights, 6)).toEqual(17);
  });
});
