// https://leetcode.com/problems/intersection-of-two-linked-lists/
import LinkedNode from '../structures/LinkedNode';

/**
 * Checks if two linked lists intersect
 * Implemented via brute force
 * Time Complexity - O(mn)
 * Space Complexity - O(1)
 * @param headA First list
 * @param headB Second list
 * @return Intersection node or null if no intersection found or lists are empty
 */
export default function getIntersectionNode<T>(
  headA: LinkedNode<T> | null,
  headB: LinkedNode<T> | null
): LinkedNode<T> | null {
  if (headA === null || headB === null) {
    return null;
  }

  // for each node in list A, check all of list B
  let ptrA: LinkedNode<T> | null = headA;
  let intersection: LinkedNode<T> | null = null;

  while (ptrA !== null) {
    let ptrB: LinkedNode<T> | null = headB;

    while (ptrB !== null) {
      if (ptrA === ptrB) {
        intersection = ptrA;
        break;
      } else {
        ptrB = ptrB.next;
      }
    }

    if (intersection !== null) {
      break;
    }

    ptrA = ptrA.next;
  }

  return intersection;
}

/**
 * Checks if two linked lists intersect
 * Implemented via hash table
 * Time Complexity - O(m + n)
 * Space Complexity - O(m) or O(n)
 * @param headA First list
 * @param headB Second list
 * @return Intersection node or null if no intersection found or lists are empty
 */
export function getIntersectionNode2<T>(
  headA: LinkedNode<T> | null,
  headB: LinkedNode<T> | null
): LinkedNode<T> | null {
  if (headA === null || headB === null) {
    return null;
  }

  let intersection: LinkedNode<T> | null = null;

  // traverse list A and store each node in set
  // then traverse list B and check if any node is in set
  const visited = new Set<LinkedNode<T>>();

  let ptrA: LinkedNode<T> | null = headA;
  let ptrB: LinkedNode<T> | null = headB;

  while (ptrA !== null) {
    visited.add(ptrA);
    ptrA = ptrA.next;
  }

  while (ptrB !== null) {
    if (visited.has(ptrB)) {
      intersection = ptrB;
      break;
    }
    ptrB = ptrB.next;
  }

  return intersection;
}

/**
 * Checks if two linked lists intersect
 * Implemented via pointers
 * Time Complexity - O(m + n)
 * Space Complexity - O(1)
 * @param headA First list
 * @param headB Second list
 * @return Intersection node or null if no intersection found or lists are empty
 */
export function getIntersectionNode3<T>(
  headA: LinkedNode<T> | null,
  headB: LinkedNode<T> | null
): LinkedNode<T> | null {
  if (headA === null || headB === null) {
    return null;
  }

  let ptrA: LinkedNode<T> | null = headA;
  let ptrB: LinkedNode<T> | null = headB;

  while (ptrA !== ptrB) {
    ptrA = ptrA !== null ? ptrA.next : headB;
    ptrB = ptrB !== null ? ptrB.next : headA;
  }

  return ptrA;
}
