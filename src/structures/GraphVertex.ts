import LinkedList from './LinkedList';
import GraphEdge from './GraphEdge';

type EdgedVertex<T> = GraphVertex<T> & { edge: GraphEdge<T> };

export default class GraphVertex<T> {
  public edges: LinkedList<GraphEdge<T>>;
  public value: T;

  constructor(value: T) {
    this.value = value;
    this.edges = new LinkedList<GraphEdge<T>>();
  }

  addEdge(edge: GraphEdge<T>): this {
    this.edges.append(edge);

    return this;
  }

  deleteEdge(edge: GraphEdge<T>): this {
    this.edges.delete(edge);

    return this;
  }

  getEdges(): Array<GraphEdge<T>> {
    return this.edges.toArray().map((node) => node.value);
  }

  hasEdge(requiredEdge: GraphEdge<T>): boolean {
    const node = this.edges.find({ callback: (edge) => edge === requiredEdge });

    return node !== null;
  }

  getNeighbors(): Array<EdgedVertex<T>> {
    const edges = this.edges.toArray();

    return edges.map<EdgedVertex<T>>((node) => {
      const edge = node.value;
      const neighbor =
        edge.startVertex === this ? edge.startVertex : edge.endVertex;

      (neighbor as EdgedVertex<T>).edge = edge;

      return neighbor as EdgedVertex<T>;
    });
  }

  findEdge(vertex: GraphVertex<T>): GraphEdge<T> | null {
    const edge = this.edges.find({
      callback: (edge) => {
        return edge.startVertex === vertex || edge.endVertex === vertex;
      },
    });

    return edge === null ? null : edge.value;
  }

  deleteAllEdges(): this {
    this.getEdges().forEach((edge) => this.deleteEdge(edge));

    return this;
  }

  getKey(): T {
    return this.value;
  }

  toString(): string {
    return `${this.value}`;
  }
}
