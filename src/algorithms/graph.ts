import Graph from '../structures/Graph';
import GraphVertex from '../structures/GraphVertex';

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
