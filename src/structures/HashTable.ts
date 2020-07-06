import LinkedList from './LinkedList';

/**
 * @class A hash table with seperate chaining collision
 * Complexities:
 * Search - O(1), O(n) worst case
 * Insertion - O(1), O(n) worst case
 * Deletion - O(1), O(n) worst case
 */
export default class HashTable<T> {
  /**
   * Buckets to store values
   * @member
   * @private
   */
  private buckets: Array<LinkedList<{ key: string; value: T }>>;

  /**
   * Creates a new hash table
   * @param numBuckets Number of buckets
   * @constructor
   */
  constructor(numBuckets = 32) {
    this.buckets = Array(numBuckets)
      .fill(null)
      .map(() => new LinkedList<{ key: string; value: T }>());
  }

  /**
   * Retrieves an item by key
   * @param key Key of item to retrieve
   * @return Item or undefined if not found
   */
  get(key: string): T | undefined {
    const keyHash = this.hash(key);
    const bucketList = this.buckets[keyHash];

    // find by key
    const node = bucketList.find({ callback: (node) => node.key === key });

    return node !== null ? node.value.value : undefined;
  }

  /**
   * Adds or update values in the hash table
   * @param key Key for item in table
   * @param value Value to add or update
   */
  set(key: string, value: T): void {
    const keyHash = this.hash(key);
    const bucketList = this.buckets[keyHash];

    // find by key
    const node = bucketList.find({ callback: (node) => node.key === key });

    if (node === null) {
      // if not found, add
      bucketList.append({ key, value });
    } else {
      // else update value
      node.value.value = value;
    }
  }

  /**
   * Deletes a value by key
   * @param key Key of item to delete
   * @return true if an item was deleted, false otherwise
   */
  delete(key: string): boolean {
    const keyHash = this.hash(key);
    const bucketList = this.buckets[keyHash];

    // find by key
    const node = bucketList.find({ callback: (node) => node.key === key });

    if (node !== null) {
      // if found, delete from linked list
      bucketList.delete(node.value);

      return true;
    }

    return false;
  }

  /**
   * Calculates a hash for the given key
   * @param key String to hash
   * @return Index of bucket to store value
   * @private
   */
  private hash(key: string): number {
    let hashCode = 0;

    for (let index = 0; index < key.length; index++) {
      hashCode += key.charCodeAt(index);
    }

    // map hash code to an index that will fit in our array of buckets
    return hashCode % this.buckets.length;
  }
}
