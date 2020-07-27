import Heap from './Heap';

describe('Heap', () => {
  it('works as maxheap', () => {
    const maxHeap = new Heap<number>((a, b) => a - b);

    maxHeap.add(1).add(2).add(3);

    const result = [];
    while (maxHeap.size > 0) {
      result.push(maxHeap.poll());
    }

    expect(result).toEqual([3, 2, 1]);
  });

  it('works as minheap', () => {
    const minHeap = new Heap<number>((a, b) => b - a);

    minHeap.add(1).add(2).add(3);

    const result = [];
    while (minHeap.size > 0) {
      result.push(minHeap.poll());
    }

    expect(result).toEqual([1, 2, 3]);
  });
});
