import MinHeap from './MinHeap';
import Comparator from './ Comparator';

/**
 * @class Priority queue implemented via min heap
 */
export default class PriorityQueue<T> extends MinHeap<T> {
  private priorities: Map<T, number>;

  constructor() {
    super();

    this.priorities = new Map<T, number>();
    this.compare = new Comparator<T>(this.comparePriority.bind(this));
  }

  private comparePriority(a: T, b: T): number {
    const priorityA = this.priorities.get(a);
    const priorityB = this.priorities.get(b);

    if (
      priorityA === priorityB ||
      priorityA === undefined ||
      priorityB === undefined
    ) {
      return 0;
    }

    return priorityA < priorityB ? -1 : 1;
  }

  add(item: T, priority = 0): this {
    this.priorities.set(item, priority);
    super.add(item);
    return this;
  }

  remove(item: T, comparator?: Comparator<T>): this {
    super.remove(item, comparator);
    this.priorities.delete(item);
    return this;
  }

  changePriority(item: T, priority: number): this {
    this.remove(item, new Comparator<T>());
    this.add(item, priority);
    return this;
  }
}
