import Graph from '../structures/Graph';
import GraphVertex from '../structures/GraphVertex';
import PriorityQueue from '../structures/PriorityQueue';

export type VertexCallback<T> = (vertex: GraphVertex<T>) => void;

// Time - O(|V| + O|E|)
// Space - O(|V|)
export function depthFirstSearch<T>(
  graph: Graph<T>,
  startVertex: GraphVertex<T>,
  enterVertexCallback: VertexCallback<T>
): void {
  const visited = new Map<T, boolean>();
  visited.set(startVertex.getKey(), true);

  const depthFirstSearchRecursive = (currentVertex: GraphVertex<T>) => {
    enterVertexCallback(currentVertex);

    currentVertex.getNeighbors().forEach((nextVertex) => {
      if (!visited.has(nextVertex.getKey())) {
        visited.set(nextVertex.getKey(), true);
        depthFirstSearchRecursive(nextVertex);
      }
    });
  };

  depthFirstSearchRecursive(startVertex);
}

export function depthFirstSearchStack<T>(
  graph: Graph<T>,
  startVertex: GraphVertex<T>,
  enterVertexCallback: VertexCallback<T>
): void {
  const stack = [startVertex];
  const visited = new Map<T, boolean>();
  visited.set(startVertex.getKey(), true);

  while (stack.length !== 0) {
    const currentVertex = stack.pop() as GraphVertex<T>;
    enterVertexCallback(currentVertex);

    const neighbors = currentVertex.getNeighbors();

    // iterate in reverse order to ensure popped off in same order
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const nextVertex = neighbors[i];
      if (!visited.has(nextVertex.getKey())) {
        visited.set(nextVertex.getKey(), true);
        stack.push(nextVertex);
      }
    }
  }
}

// Time - O(|V| + |E|)
// Space - O(|V|)
export function breadthFirstSearch<T>(
  graph: Graph<T>,
  startVertex: GraphVertex<T>,
  enterVertexCallback: VertexCallback<T>
): void {
  const queue: Array<GraphVertex<T>> = [startVertex];
  const visited = new Map<T, boolean>();
  visited.set(startVertex.getKey(), true);

  while (queue.length !== 0) {
    const currentVertex = queue.shift() as GraphVertex<T>;

    enterVertexCallback(currentVertex);

    currentVertex.getNeighbors().forEach((nextVertex) => {
      if (!visited.has(nextVertex.getKey())) {
        visited.set(nextVertex.getKey(), true);

        queue.push(nextVertex);
      }
    });
  }
}

export type ShortestPaths<T> = {
  distances: Map<T, number>;
  previousVertices: Map<T, GraphVertex<T> | null>;
};

// Time - O(|E| * |V| * log |V|)
// Space - O(|V|)
export function dijkstra<T>(
  graph: Graph<T>,
  startVertex: GraphVertex<T>
): ShortestPaths<T> {
  const distances = new Map<T, number>();
  const visitedVertices = new Map<T, boolean>();
  const previousVertices = new Map<T, GraphVertex<T> | null>();
  const queue = new PriorityQueue<GraphVertex<T>>();

  // init all distances w/ infinity
  graph.getAllVertices().forEach((vertex) => {
    distances.set(vertex.getKey(), Number.POSITIVE_INFINITY);
    previousVertices.set(vertex.getKey(), null);
  });

  // we are already at start so set distance to 0
  distances.set(startVertex.getKey(), 0);

  // init queue
  queue.add(startVertex, distances.get(startVertex.getKey()));

  // iterate over priority queue until empty
  while (!queue.isEmpty()) {
    // fetch next closest vertex
    const currentVertex = queue.poll() as GraphVertex<T>;

    // iterate over every unvisited neighbor
    currentVertex.getNeighbors().forEach((neighbor) => {
      if (!visitedVertices.has(neighbor.getKey())) {
        const edgeWeight = neighbor.edge.weight;
        const existingDistanceToNeighbor = distances.get(
          neighbor.getKey()
        ) as number;
        const distanceToNeighborFromCurrent =
          (distances.get(currentVertex.getKey()) as number) + edgeWeight;

        // if we have found a shorter path to neighbor - update it
        if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
          distances.set(neighbor.getKey(), distanceToNeighborFromCurrent);

          // change priority of neighbor in queue
          if (queue.has(neighbor)) {
            queue.changePriority(
              neighbor,
              distances.get(neighbor.getKey()) as number
            );
          }

          // remember previous closest vertex
          previousVertices.set(neighbor.getKey(), currentVertex);
        }

        // add neighbor to queue for further visiting
        if (!queue.has(neighbor)) {
          queue.add(neighbor, distances.get(neighbor.getKey()));
        }
      }
    });

    // add current vertex to visited
    visitedVertices.set(currentVertex.getKey(), true);
  }

  return { distances, previousVertices };
}
