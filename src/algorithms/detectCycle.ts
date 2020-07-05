// https://leetcode.com/problems/linked-list-cycle-ii/
import LinkedNode from '../structures/LinkedNode';

/**
 * Determines if a linked list is cyclic or acyclic
 * Implemented using Hashtable
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 * @param head Head of linked list to check for cycles
 * @return node where cycle starts or null if cycle is not found or list is not empty
 */
export default function detectCycle<T>(
  head: LinkedNode<T> | null
): LinkedNode<T> | null {
  if (head === null) {
    return null;
  }

  // use a hashtable to keep track of visited nodes
  // if you visit a node that already exists in the set
  // that means it was start of cycle
  const visited = new Set<LinkedNode<T>>();

  let node: LinkedNode<T> | null = head;

  while (node !== null) {
    if (visited.has(node)) {
      return node;
    }
    visited.add(node);
    node = node.next;
  }

  return null;
}

/**
 * Determines if a linked list is cyclic or acyclic
 * Implemented using Floyd's Tortoise & Hare algorithm
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 * @param head Head of linked list to check for cycles
 * @return node where cycle starts or null if cycle is not found or list is not empty
 */
export function detectCycle2<T>(
  head: LinkedNode<T> | null
): LinkedNode<T> | null {
  if (head === null) {
    return null;
  }

  // if there is a cycle, fast/slow pointers will intersect
  const intersect = getIntersect(head);

  if (intersect === null) {
    return null;
  }

  // to find entrance of cycle, put one pointer at head
  // and another pointer at intersection
  // advance both until they intersect
  let ptr1 = head;
  let ptr2 = intersect;

  while (ptr1.next !== null && ptr2.next !== null && ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return ptr1;
}

function getIntersect<T>(head: LinkedNode<T>) {
  let tortoise: LinkedNode<T> | null = head;
  let hare: LinkedNode<T> | null = head;

  while (tortoise !== null && hare !== null && hare.next !== null) {
    // increment tortoise by 1
    tortoise = tortoise.next;

    // increment hare by 2
    hare = hare.next.next;

    if (tortoise === hare) {
      return tortoise;
    }
  }

  return null;
}
