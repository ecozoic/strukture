import LinkedList from './LinkedList';

export default class HashSet {
  private keyRange: number;
  private buckets: Array<LinkedList<number>>;

  constructor() {
    this.keyRange = 769; // prime
    this.buckets = Array(this.keyRange)
      .fill(null)
      .map(() => new LinkedList<number>());
  }

  /**
   * Add a key to the set
   * @param key Key to add
   */
  add(key: number): void {
    const keyHash = this.hash(key);
    this.buckets[keyHash].append(key);
  }

  /**
   * Check if a key exists in the set
   * @param key Key to check for in set
   * @return true if exists in set, false otherwise
   */
  contains(key: number): boolean {
    const keyHash = this.hash(key);
    return this.buckets[keyHash].find({ value: key }) !== null;
  }

  /**
   * Remove a key from the set
   * @param key Key to remove
   */
  remove(key: number): void {
    const keyHash = this.hash(key);
    this.buckets[keyHash].delete(key);
  }

  /**
   * Computes hash using modulo operator
   * @param key Number to hash
   */
  private hash(key: number): number {
    return key % this.keyRange;
  }
}
