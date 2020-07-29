// var profits = [1, 6, 10, 16];
// var weights = [1, 2, 3, 5];
// capacity  7

export default function knapsack(
  profits: Array<number>,
  weights: Array<number>,
  capacity: number
): number {
  return knapsackRecursive(profits, weights, capacity, 0);
}

function knapsackRecursive(
  profits: Array<number>,
  weights: Array<number>,
  capacity: number,
  index: number
): number {
  // base case, if no capacity or no more items, profit = 0
  if (capacity <= 0 || index >= weights.length) {
    return 0;
  }

  const profitInclude =
    weights[index] <= capacity
      ? profits[index] +
        knapsackRecursive(
          profits,
          weights,
          capacity - weights[index],
          index + 1
        )
      : 0;

  const profitExclude = knapsackRecursive(
    profits,
    weights,
    capacity,
    index + 1
  );

  return Math.max(profitInclude, profitExclude);
}

export function knapsackMemo(
  profits: Array<number>,
  weights: Array<number>,
  capacity: number
): number {
  const cache = Array(weights.length)
    .fill(null)
    .map(() => Array(capacity + 1).fill(null));

  return knapsackRecursiveMemo(profits, weights, capacity, 0, cache);
}

function knapsackRecursiveMemo(
  profits: Array<number>,
  weights: Array<number>,
  capacity: number,
  index: number,
  cache: Array<Array<number>>
): number {
  // base case, if no capacity or no more items, profit = 0
  if (capacity <= 0 || index >= weights.length) {
    return 0;
  }

  if (cache[index][capacity] !== null) {
    return cache[index][capacity];
  }

  const profitInclude =
    weights[index] <= capacity
      ? profits[index] +
        knapsackRecursiveMemo(
          profits,
          weights,
          capacity - weights[index],
          index + 1,
          cache
        )
      : 0;

  const profitExclude = knapsackRecursiveMemo(
    profits,
    weights,
    capacity,
    index + 1,
    cache
  );

  cache[index][capacity] = Math.max(profitInclude, profitExclude);

  return cache[index][capacity];
}

export function knapsackDp(
  profits: Array<number>,
  weights: Array<number>,
  capacity: number
): number {
  const dp = Array(weights.length)
    .fill(null)
    .map(() => Array(capacity + 1).fill(null));

  for (let i = 0; i < weights.length; i++) {
    // profit for zero capacity is zero
    dp[i][0] = 0;
  }

  for (let c = 0; c <= capacity; c++) {
    if (weights[0] <= c) {
      // if we only have a single item, we profit if we can fit in capacity, otherwise 0
      dp[0][c] = profits[0];
    } else {
      dp[0][c] = 0;
    }
  }

  for (let i = 1; i < weights.length; i++) {
    for (let c = 1; c <= capacity; c++) {
      // if capacity has room for weight of this item
      // we take profit from this item and max profit form subsets w/o this item
      // with the remaining capacity
      const profitInclude =
        weights[i] <= c ? profits[i] + dp[i - 1][c - weights[i]] : 0;

      // exclude profit is calculated using same capacity but w/o this item
      const profitExclude = dp[i - 1][c];

      // save max
      dp[i][c] = Math.max(profitInclude, profitExclude);
    }
  }

  return dp[profits.length - 1][capacity];
}
