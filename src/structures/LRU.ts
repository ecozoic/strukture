import DoublyLinkedList from './DoublyLinkedList';
import DoublyLinkedNode from './DoublyLinkedNode';

export default class LRU<T> {
  private list: DoublyLinkedList<T>;
  private cache: Map<string, DoublyLinkedNode<T>>;
  private size: number;
  private capacity: number;

  constructor(capacity = 10) {
    this.list = new DoublyLinkedList<T>();
    this.cache = new Map<string, DoublyLinkedNode<T>>();
    this.size = 0;
    this.capacity = capacity;
  }

  write(key: string, value: T): void {
    const node = this.cache.get(key);

    if (node === undefined) {
      this.list.prepend(key, value);
      this.cache.set(key, this.list.head as DoublyLinkedNode<T>);
      this.size++;

      if (this.size > this.capacity) {
        // pop the tail
        const tail = this.list.deleteTail() as DoublyLinkedNode<T>;
        this.cache.delete(tail.key);
        this.size--;
      }
    } else {
      // update the value.
      node.value = value;
      this.list.remove(node);
      this.list.prepend(key, node.value);
      this.cache.set(key, this.list.head as DoublyLinkedNode<T>);
    }
  }

  read(key: string): T | undefined {
    const node = this.cache.get(key);

    if (node === undefined) {
      return undefined;
    }

    // move the accessed node to the head
    this.list.remove(node);
    this.list.prepend(key, node.value);
    this.cache.set(key, this.list.head as DoublyLinkedNode<T>);

    return node.value;
  }
}

/**
 * Do every insertion at the head.
On every read or update operation detach the node from its position and attach at the head of the LinkedList.
Remember, LRU is indicated in terms of both read and write operations to the cache.
When cache limit exceeds remove a node from the tail
Store key:node relation in cache map. So that retrieval is possible in O(1).
 */
