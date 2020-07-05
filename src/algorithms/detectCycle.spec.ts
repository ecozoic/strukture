import detectCycle, { detectCycle2 } from './detectCycle';

import LinkedNode from '../structures/LinkedNode';
import LinkedList from '../structures/LinkedList';

describe('detectCycle', () => {
  it('returns null for empty list', () => {
    const list = new LinkedList<string>();

    expect(detectCycle(list.head)).toEqual(null);
  });

  it('returns null for acyclic list', () => {
    const list = new LinkedList<string>();
    list.append('foo').append('bar').append('baz');

    expect(detectCycle(list.head)).toEqual(null);
  });

  it('returns intersection for cyclic list', () => {
    const node1 = new LinkedNode<number>(1);
    const node2 = new LinkedNode<number>(2);
    const node3 = new LinkedNode<number>(3);
    const node4 = new LinkedNode<number>(4);
    const node5 = new LinkedNode<number>(5);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node2;

    expect(detectCycle(node1)?.value).toEqual(2);
  });
});

describe('detectCycle2', () => {
  it('returns null for empty list', () => {
    const list = new LinkedList<string>();

    expect(detectCycle2(list.head)).toEqual(null);
  });

  it('returns null for acyclic list', () => {
    const list = new LinkedList<string>();
    list.append('foo').append('bar').append('baz');

    expect(detectCycle2(list.head)).toEqual(null);
  });

  it('returns intersection for cyclic list', () => {
    const node1 = new LinkedNode<number>(1);
    const node2 = new LinkedNode<number>(2);
    const node3 = new LinkedNode<number>(3);
    const node4 = new LinkedNode<number>(4);
    const node5 = new LinkedNode<number>(5);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node2;

    expect(detectCycle2(node1)?.value).toEqual(2);
  });
});
