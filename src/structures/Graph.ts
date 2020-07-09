import GraphVertex from './GraphVertex';
import GraphEdge from './GraphEdge';

/**
 * @class Graph implemented via adjacency lists
 * Complexities:
 * Add Vertex - O(1)
 * Remove Vertex - O(E + V)
 * Add Edge - O(1)
 * Remove Edge - O(E)
 *
 * For adjacency matrices:
 * Add Vertex - O(V^2)
 * Remove Vertex - O(V^2)
 * Add Edge - O(1)
 * Remove Edge - O(1)
 */
export default class Graph<T> {
  public vertices: Map<T, GraphVertex<T>>;
  public edges: Map<string, GraphEdge<T>>;
  public isDirected: boolean;

  constructor(isDirected = false) {
    this.vertices = new Map<T, GraphVertex<T>>();
    this.edges = new Map<string, GraphEdge<T>>();
    this.isDirected = isDirected;
  }

  addVertex(newVertex: GraphVertex<T>): this {
    this.vertices.set(newVertex.getKey(), newVertex);

    return this;
  }

  getVertexByKey(key: T): GraphVertex<T> | undefined {
    return this.vertices.get(key);
  }

  getAllVertices(): Array<GraphVertex<T>> {
    return [...this.vertices.values()];
  }

  getAllEdges(): Array<GraphEdge<T>> {
    return [...this.edges.values()];
  }

  addEdge(edge: GraphEdge<T>): this {
    // try to find start and end vertices
    let startVertex = this.getVertexByKey(edge.startVertex.getKey());
    let endVertex = this.getVertexByKey(edge.endVertex.getKey());

    // insert start vertex if needed
    if (startVertex === undefined) {
      this.addVertex(edge.startVertex);
      startVertex = this.getVertexByKey(edge.startVertex.getKey());
    }

    // insert end vertex if needed
    if (endVertex === undefined) {
      this.addVertex(edge.endVertex);
      endVertex = this.getVertexByKey(edge.endVertex.getKey());
    }

    // check if edge has already been added
    if (this.edges.has(edge.getKey())) {
      throw new Error('Edge has already been added');
    } else {
      this.edges.set(edge.getKey(), edge);
    }

    // add edge to the vertices
    if (this.isDirected) {
      // if graph IS directed, add only to start vertex
      startVertex?.addEdge(edge);
    } else {
      // if graph IS NOT directed, add to both start and end
      startVertex?.addEdge(edge);
      endVertex?.addEdge(edge);
    }

    return this;
  }

  deleteEdge(edge: GraphEdge<T>): void {
    if (this.edges.has(edge.getKey())) {
      this.edges.delete(edge.getKey());
    } else {
      throw new Error('Edge not found in graph');
    }

    // find start and end vertices and delete from them
    const startVertex = this.getVertexByKey(edge.startVertex.getKey());
    const endVertex = this.getVertexByKey(edge.endVertex.getKey());

    if (startVertex !== undefined) {
      startVertex.deleteEdge(edge);
    }

    if (endVertex !== undefined) {
      endVertex.deleteEdge(edge);
    }
  }

  findEdge(
    startVertex: GraphVertex<T>,
    endVertex: GraphVertex<T>
  ): GraphEdge<T> | null {
    const vertex = this.getVertexByKey(startVertex.getKey());

    if (vertex === undefined) {
      return null;
    }

    return vertex.findEdge(endVertex);
  }

  toString(): string {
    return [...this.vertices.keys()].toString();
  }
}
