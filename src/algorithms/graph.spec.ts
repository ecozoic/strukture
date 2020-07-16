import Graph from '../structures/Graph';
import GraphEdge from '../structures/GraphEdge';
import GraphVertex from '../structures/GraphVertex';
import {
  depthFirstSearch,
  depthFirstSearchStack,
  breadthFirstSearch,
  VertexCallback,
} from './graph';

describe('depthFirstSearch', () => {
  let socialNetwork: Graph<string>;
  let userMap: Map<string, GraphVertex<string>>;
  let users: Array<string>;
  let vertexCallback: VertexCallback<string>;

  beforeEach(() => {
    const bill = new GraphVertex('Bill');
    const alice = new GraphVertex('Alice');
    const john = new GraphVertex('John');
    const kate = new GraphVertex('Kate');
    const ann = new GraphVertex('Ann');
    const tom = new GraphVertex('Tom');
    const sam = new GraphVertex('Sam');

    userMap = new Map<string, GraphVertex<string>>();
    userMap.set('bill', bill);
    userMap.set('alice', alice);
    userMap.set('john', john);
    userMap.set('kate', kate);
    userMap.set('ann', ann);
    userMap.set('tom', tom);
    userMap.set('sam', sam);

    /*
                  Bill
                /   |  \
            Alice  John Kate
              \   /     /
                Ann   Tom
                /
              Sam
    */

    // DFS -> Bill, Alice, Ann, Sam, John, Kate, Tom

    socialNetwork = new Graph<string>();
    socialNetwork
      .addEdge(new GraphEdge(bill, alice))
      .addEdge(new GraphEdge(bill, john))
      .addEdge(new GraphEdge(bill, kate))
      .addEdge(new GraphEdge(alice, ann))
      .addEdge(new GraphEdge(ann, sam))
      .addEdge(new GraphEdge(john, ann))
      .addEdge(new GraphEdge(kate, tom));

    users = [];
    vertexCallback = (vertex) => {
      users.push(vertex.getKey());
    };
  });

  it('works', () => {
    depthFirstSearch(
      socialNetwork,
      userMap.get('bill') as GraphVertex<string>,
      vertexCallback
    );

    expect(users).toEqual([
      'Bill',
      'Alice',
      'Ann',
      'Sam',
      'John',
      'Kate',
      'Tom',
    ]);
  });

  it('works (stack)', () => {
    depthFirstSearchStack(
      socialNetwork,
      userMap.get('bill') as GraphVertex<string>,
      vertexCallback
    );

    expect(users).toEqual([
      'Bill',
      'Alice',
      'Ann',
      'Sam',
      'John',
      'Kate',
      'Tom',
    ]);
  });
});

describe('breadthFirstSearch', () => {
  let socialNetwork: Graph<string>;
  let userMap: Map<string, GraphVertex<string>>;
  let users: Array<string>;
  let vertexCallback: VertexCallback<string>;

  beforeEach(() => {
    const bill = new GraphVertex('Bill');
    const alice = new GraphVertex('Alice');
    const john = new GraphVertex('John');
    const kate = new GraphVertex('Kate');
    const ann = new GraphVertex('Ann');
    const tom = new GraphVertex('Tom');
    const sam = new GraphVertex('Sam');

    userMap = new Map<string, GraphVertex<string>>();
    userMap.set('bill', bill);
    userMap.set('alice', alice);
    userMap.set('john', john);
    userMap.set('kate', kate);
    userMap.set('ann', ann);
    userMap.set('tom', tom);
    userMap.set('sam', sam);

    /*
                  Bill
                /   |  \
            Alice  John Kate
              \   /     /
                Ann   Tom
                /
              Sam
    */

    // DFS -> Bill, Alice, Ann, Sam, John, Kate, Tom

    socialNetwork = new Graph<string>();
    socialNetwork
      .addEdge(new GraphEdge(bill, alice))
      .addEdge(new GraphEdge(bill, john))
      .addEdge(new GraphEdge(bill, kate))
      .addEdge(new GraphEdge(alice, ann))
      .addEdge(new GraphEdge(ann, sam))
      .addEdge(new GraphEdge(john, ann))
      .addEdge(new GraphEdge(kate, tom));

    users = [];
    vertexCallback = (vertex) => {
      users.push(vertex.getKey());
    };
  });

  it('works', () => {
    breadthFirstSearch(
      socialNetwork,
      userMap.get('bill') as GraphVertex<string>,
      vertexCallback
    );

    expect(users).toEqual([
      'Bill',
      'Alice',
      'John',
      'Kate',
      'Ann',
      'Tom',
      'Sam',
    ]);
  });
});
