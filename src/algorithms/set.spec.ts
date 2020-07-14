import {
  cartesianProduct,
  bwPowerSet,
  btPowerSet,
  permutateWithoutRepetitions,
  permutateWithRepetitions,
  combineWithoutRepetitions,
  combineWithRepetitions,
} from './set';

describe('cartesianProduct', () => {
  it('works', () => {
    const cardRanks = [
      'A',
      'K',
      'Q',
      'J',
      '10',
      '9',
      '8',
      '7',
      '6',
      '5',
      '4',
      '3',
      '2',
    ];
    const cardSuits = ['hearts', 'spades', 'clubs', 'diamonds'];

    const deckOfCards = cartesianProduct(cardRanks, cardSuits);

    expect(deckOfCards).toHaveLength(52);
    expect((deckOfCards as Array<[string, string]>)[0]).toEqual([
      'A',
      'hearts',
    ]);
  });
});

describe('bwPowerSet', () => {
  it('works', () => {
    const ingredients = ['banana', 'orange', 'apple'];

    const saladMixes = bwPowerSet(ingredients);

    expect(saladMixes).toEqual([
      [],
      ['banana'],
      ['orange'],
      ['banana', 'orange'],
      ['apple'],
      ['banana', 'apple'],
      ['orange', 'apple'],
      ['banana', 'orange', 'apple'],
    ]);
  });
});

describe('btPowerSet', () => {
  it('works', () => {
    const ingredients = ['banana', 'orange', 'apple'];

    const saladMixes = btPowerSet(ingredients);

    expect(saladMixes).toEqual([
      [],
      ['banana'],
      ['banana', 'orange'],
      ['banana', 'orange', 'apple'],
      ['banana', 'apple'],
      ['orange'],
      ['orange', 'apple'],
      ['apple'],
    ]);
  });
});

describe('permutateWithoutRepetitions', () => {
  it('works', () => {
    const racers = ['John', 'Bill', 'Jane'];
    const racingResults = permutateWithoutRepetitions(racers);

    expect(racingResults).toHaveLength(6);
  });
});

describe('permutateWithRepetitions', () => {
  it('works', () => {
    const possiblePasswordSymbols = ['A', 'B', 'C'];
    const passwordLength = 3;

    const allPossiblePasswords = permutateWithRepetitions(
      possiblePasswordSymbols,
      passwordLength
    );

    expect(allPossiblePasswords).toHaveLength(27);
  });
});

describe('combineWithoutRepetitions', () => {
  it('works', () => {
    const teamSize = 3;
    const candidates = ['Bill', 'John', 'Kate', 'Jane', 'Mike'];
    const possibleTeams = combineWithoutRepetitions(candidates, teamSize);

    expect(possibleTeams).toHaveLength(10);
  });
});

describe('combineWithRepetitions', () => {
  it('works', () => {
    const iceCreamFlavours = ['banana', 'mint', 'pistachio', 'vanilla'];
    const numberOfScoops = 3;
    const scoopCombinations = combineWithRepetitions(
      iceCreamFlavours,
      numberOfScoops
    );

    expect(scoopCombinations).toHaveLength(20);
  });
});
