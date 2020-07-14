// Time - O(|A| * |B|)
// Space - O(|A| * |B|)
export function cartesianProduct<T, U>(
  setA: Array<T>,
  setB: Array<U>
): Array<[T, U]> | null {
  if (!setA || !setB || !setA.length || !setB.length) {
    return null;
  }

  const product: Array<[T, U]> = [];

  // form all possible pairs
  for (let a = 0; a < setA.length; a++) {
    for (let b = 0; b < setB.length; b++) {
      product.push([setA[a], setB[b]]);
    }
  }

  return product;
}

// O(n * 2^n)
export function bwPowerSet<T>(originalSet: Array<T>): Array<Array<T>> {
  const subSets: Array<Array<T>> = [];
  const numberOfCombinations = 2 ** originalSet.length;

  // combination index serves as bitmask
  for (
    let combinationIndex = 0;
    combinationIndex < numberOfCombinations;
    combinationIndex++
  ) {
    const subSet = [];

    for (
      let setElementIndex = 0;
      setElementIndex < originalSet.length;
      setElementIndex++
    ) {
      // AND bitmask with left-shifted 1 by set index to see if appropriate bit is set
      if (combinationIndex & (1 << setElementIndex)) {
        subSet.push(originalSet[setElementIndex]);
      }
    }

    subSets.push(subSet);
  }

  return subSets;
}

// O(2^n)
export function btPowerSet<T>(
  originalSet: Array<T>,
  allSubSets: Array<Array<T>> = [[]],
  currentSubSet: Array<T> = [],
  startAt = 0
): Array<Array<T>> {
  // iterate over originalSet elements that may be added to subset
  // without having duplicates. startAt prevents duplicates
  for (let position = startAt; position < originalSet.length; position++) {
    // push current element to subset
    currentSubSet.push(originalSet[position]);

    // current subset is valid so memorize it
    // clone current subset b/c it might still be mutated later
    allSubSets.push([...currentSubSet]);

    // generate other subsets for current subset
    // increase pos by one to avoid duplicates
    btPowerSet(originalSet, allSubSets, currentSubSet, position + 1);

    // BACKTRACK: exclude most recent element from subset and try next valid one
    currentSubSet.pop();
  }

  return allSubSets;
}

// n^r, choosing r of something with n types
export function permutateWithRepetitions<T>(
  permutationOptions: Array<T>,
  permutationLength = permutationOptions.length
): Array<Array<T>> {
  if (permutationLength === 1) {
    return permutationOptions.map((permutationOption) => [permutationOption]);
  }

  const permutations: Array<Array<T>> = [];

  const smallerPermutations = permutateWithRepetitions(
    permutationOptions,
    permutationLength - 1
  );

  permutationOptions.forEach((currentOption) => {
    smallerPermutations.forEach((smallerPermutation) => {
      permutations.push([currentOption].concat(smallerPermutation));
    });
  });

  return permutations;
}

// n! / (n - r)!
export function permutateWithoutRepetitions<T>(
  permutationOptions: Array<T>
): Array<Array<T>> {
  if (permutationOptions.length === 1) {
    return [permutationOptions];
  }

  const permutations = [];

  const smallerPermutations = permutateWithoutRepetitions(
    permutationOptions.slice(1)
  );

  const firstOption = permutationOptions[0];
  for (let permIndex = 0; permIndex < smallerPermutations.length; permIndex++) {
    const smallerPermutation = smallerPermutations[permIndex];

    for (
      let positionIndex = 0;
      positionIndex <= smallerPermutation.length;
      positionIndex++
    ) {
      const permutationPrefix = smallerPermutation.slice(0, positionIndex);
      const permutationSuffix = smallerPermutation.slice(positionIndex);
      permutations.push(
        permutationPrefix.concat([firstOption], permutationSuffix)
      );
    }
  }

  return permutations;
}

// combination w/o rep
// n! / r!(n - r)!
export function combineWithoutRepetitions<T>(
  comboOptions: Array<T>,
  comboLength: number
): Array<Array<T>> {
  if (comboLength === 1) {
    return comboOptions.map((comboOption) => [comboOption]);
  }

  const combos: Array<Array<T>> = [];

  comboOptions.forEach((currentOption, optionIndex) => {
    const smallerCombos = combineWithoutRepetitions(
      comboOptions.slice(optionIndex + 1),
      comboLength - 1
    );

    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption].concat(smallerCombo));
    });
  });

  return combos;
}

// combination w/ rep
// (r + n - 1)!/r!(n-1)!
export function combineWithRepetitions<T>(
  comboOptions: Array<T>,
  comboLength: number
): Array<Array<T>> {
  if (comboLength === 1) {
    return comboOptions.map((comboOption) => [comboOption]);
  }

  const combos: Array<Array<T>> = [];

  comboOptions.forEach((currentOption, optionIndex) => {
    const smallerCombos = combineWithRepetitions(
      comboOptions.slice(optionIndex),
      comboLength - 1
    );

    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption].concat(smallerCombo));
    });
  });

  return combos;
}
