import Graph from '../structures/Graph';
import GraphEdge from '../structures/GraphEdge';
import GraphVertex from '../structures/GraphVertex';
import {
  depthFirstSearch,
  depthFirstSearchStack,
  breadthFirstSearch,
  VertexCallback,
  dijkstra,
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

describe('dijkstra', () => {
  let graph: Graph<string>;
  let home: GraphVertex<string>;

  beforeEach(() => {
    graph = new Graph<string>();

    home = new GraphVertex('Home');
    const spotA = new GraphVertex('A');
    const spotB = new GraphVertex('B');
    const spotC = new GraphVertex('C');
    const spotD = new GraphVertex('D');
    const spotE = new GraphVertex('E');
    const spotOffice = new GraphVertex('Office');

    const roadHomeA = new GraphEdge(home, spotA, 5);
    const roadHomeD = new GraphEdge(home, spotD, 8);
    const roadAB = new GraphEdge(spotA, spotB, 9);
    const roadAC = new GraphEdge(spotA, spotC, 3);
    const roadCB = new GraphEdge(spotC, spotB, 5);
    const roadDC = new GraphEdge(spotD, spotC, 4);
    const roadCE = new GraphEdge(spotC, spotE, 2);
    const roadDE = new GraphEdge(spotD, spotE, 6);
    const roadOfficeB = new GraphEdge(spotOffice, spotB, 7);
    const roadOfficeE = new GraphEdge(spotOffice, spotE, 4);

    graph
      .addEdge(roadHomeA)
      .addEdge(roadHomeD)
      .addEdge(roadAB)
      .addEdge(roadAC)
      .addEdge(roadCB)
      .addEdge(roadDC)
      .addEdge(roadCE)
      .addEdge(roadDE)
      .addEdge(roadOfficeB)
      .addEdge(roadOfficeE);
  });

  it('works', () => {
    const { distances, previousVertices } = dijkstra(graph, home);

    console.log(distances);
    console.log(previousVertices);
  });
});
