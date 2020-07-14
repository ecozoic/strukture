import { cartesianProduct, bwPowerSet, btPowerSet } from './set';

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
