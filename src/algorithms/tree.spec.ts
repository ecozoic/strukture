import BinaryTreeNode from '../structures/BinaryTreeNode';
import {
  depthFirstSearch,
  VisitCallback,
  depthFirstSearchStack,
  inOrderTraversal,
  postOrderTraversal,
  inOrderTraversalStack,
  postOrderTraversalStack,
  breadthFirstSearch,
} from './tree';

describe('depthFirstSearch', () => {
  let tree: BinaryTreeNode<string>;
  let nodes: Array<string>;
  let visitCallback: VisitCallback<string>;

  beforeEach(() => {
    const nodeA = new BinaryTreeNode('A');
    const nodeB = new BinaryTreeNode('B');
    const nodeC = new BinaryTreeNode('C');
    const nodeD = new BinaryTreeNode('D');
    const nodeE = new BinaryTreeNode('E');

    nodeA.setLeft(nodeB).setRight(nodeC);
    nodeB.setLeft(nodeD).setRight(nodeE);

    /*
        A
      B   C
    D   E
    */

    // preorder:  A -> B -> D -> E -> C
    // inorder:   D -> B -> E -> A -> C
    // postorder: D -> E -> B -> C -> A

    tree = nodeA;
    nodes = [];
    visitCallback = (node) => {
      nodes.push(node.value as string);
    };
  });

  it('works (preorder traversal)', () => {
    depthFirstSearch(tree, visitCallback);

    expect(nodes).toEqual(['A', 'B', 'D', 'E', 'C']);
  });

  it('works (preorder traversal) (stack)', () => {
    depthFirstSearchStack(tree, visitCallback);

    expect(nodes).toEqual(['A', 'B', 'D', 'E', 'C']);
  });

  it('works (inorder traversal)', () => {
    inOrderTraversal(tree, visitCallback);

    expect(nodes).toEqual(['D', 'B', 'E', 'A', 'C']);
  });

  it('works (inorder traversal) (stack)', () => {
    inOrderTraversalStack(tree, visitCallback);

    expect(nodes).toEqual(['D', 'B', 'E', 'A', 'C']);
  });

  it('works (postorder traversal)', () => {
    postOrderTraversal(tree, visitCallback);

    expect(nodes).toEqual(['D', 'E', 'B', 'C', 'A']);
  });

  it('works (postorder traversal) (stack)', () => {
    postOrderTraversalStack(tree, visitCallback);

    expect(nodes).toEqual(['D', 'E', 'B', 'C', 'A']);
  });
});

describe('breadthFirstSearch', () => {
  let tree: BinaryTreeNode<string>;
  let nodes: Array<string>;
  let visitCallback: VisitCallback<string>;

  beforeEach(() => {
    const nodeA = new BinaryTreeNode('A');
    const nodeB = new BinaryTreeNode('B');
    const nodeC = new BinaryTreeNode('C');
    const nodeD = new BinaryTreeNode('D');
    const nodeE = new BinaryTreeNode('E');

    nodeA.setLeft(nodeB).setRight(nodeC);
    nodeB.setLeft(nodeD).setRight(nodeE);

    /*
        A
      B   C
    D   E
    */

    // preorder:  A -> B -> D -> E -> C
    // inorder:   D -> B -> E -> A -> C
    // postorder: D -> E -> B -> C -> A

    tree = nodeA;
    nodes = [];
    visitCallback = (node) => {
      nodes.push(node.value as string);
    };
  });

  it('works', () => {
    breadthFirstSearch(tree, visitCallback);

    expect(nodes).toEqual(['A', 'B', 'C', 'D', 'E']);
  });
});
