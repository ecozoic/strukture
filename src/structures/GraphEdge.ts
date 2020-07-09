import GraphVertex from './GraphVertex';

export default class GraphEdge<T> {
  public startVertex: GraphVertex<T>;
  public endVertex: GraphVertex<T>;
  public weight: number;

  constructor(
    startVertex: GraphVertex<T>,
    endVertex: GraphVertex<T>,
    weight = 0
  ) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  getKey(): string {
    const startKey = this.startVertex.getKey();
    const endKey = this.endVertex.getKey();

    return `${startKey}_${endKey}`;
  }

  toString(): string {
    return this.getKey();
  }
}
