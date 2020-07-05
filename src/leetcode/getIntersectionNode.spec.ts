import getIntersectionNode, {
  getIntersectionNode2,
  getIntersectionNode3,
} from './getIntersectionNode';

import LinkedList from '../structures/LinkedList';
import LinkedNode from '../structures/LinkedNode';

describe('getIntersectionNode', () => {
  it('returns null for empty lists', () => {
    const listA = new LinkedList<string>();
    const listB = new LinkedList<string>();

    expect(getIntersectionNode(listA.head, listB.head)).toEqual(null);
  });

  it('returns null for lists that do not intersect', () => {
    const listA = new LinkedList<number>();
    listA.append(1).append(2).append(3);

    const listB = new LinkedList<number>();
    listB.append(4).append(5).append(6);

    expect(getIntersectionNode(listA.head, listB.head)).toEqual(null);
  });

  it('returns intersection', () => {
    const node1 = new LinkedNode<number>(1);
    const node2 = new LinkedNode<number>(2);
    const node3 = new LinkedNode<number>(3);
    const node4 = new LinkedNode<number>(4);
    const node5 = new LinkedNode<number>(5);
    const node6 = new LinkedNode<number>(6);
    const node7 = new LinkedNode<number>(7);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node6.next = node7;
    node7.next = node3;

    expect(getIntersectionNode(node1, node6)?.value).toEqual(3);
  });
});

describe('getIntersectionNode2', () => {
  it('returns null empty lists', () => {
    const listA = new LinkedList<string>();
    const listB = new LinkedList<string>();

    expect(getIntersectionNode2(listA.head, listB.head)).toEqual(null);
  });

  it('returns null for lists that do not intersect', () => {
    const listA = new LinkedList<number>();
    listA.append(1).append(2).append(3);

    const listB = new LinkedList<number>();
    listB.append(4).append(5).append(6);

    expect(getIntersectionNode2(listA.head, listB.head)).toEqual(null);
  });

  it('returns intersection', () => {
    const node1 = new LinkedNode<number>(1);
    const node2 = new LinkedNode<number>(2);
    const node3 = new LinkedNode<number>(3);
    const node4 = new LinkedNode<number>(4);
    const node5 = new LinkedNode<number>(5);
    const node6 = new LinkedNode<number>(6);
    const node7 = new LinkedNode<number>(7);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node6.next = node7;
    node7.next = node3;

    expect(getIntersectionNode2(node1, node6)?.value).toEqual(3);
  });
});

describe('getIntersectionNode3', () => {
  it('handles empty lists', () => {
    const listA = new LinkedList<string>();
    const listB = new LinkedList<string>();

    expect(getIntersectionNode3(listA.head, listB.head)).toEqual(null);
  });

  it.skip('returns null for lists that do not intersect', () => {
    const listA = new LinkedList<number>();
    listA.append(1).append(2).append(3);

    const listB = new LinkedList<number>();
    listB.append(4).append(5).append(6);

    expect(getIntersectionNode3(listA.head, listB.head)).toEqual(null);
  });

  it('returns intersection', () => {
    const node1 = new LinkedNode<number>(1);
    const node2 = new LinkedNode<number>(2);
    const node3 = new LinkedNode<number>(3);
    const node4 = new LinkedNode<number>(4);
    const node5 = new LinkedNode<number>(5);
    const node6 = new LinkedNode<number>(6);
    const node7 = new LinkedNode<number>(7);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node6.next = node7;
    node7.next = node5;

    expect(getIntersectionNode3(node1, node6)?.value).toEqual(5);
  });
});
