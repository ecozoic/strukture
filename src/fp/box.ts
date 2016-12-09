export class Box {
    constructor(private x: any) {}

    public map(f: (x: any) => any): Box {
        return new Box(f(this.x));
    }

    public fold(f: (x: any) => any): any {
        return f(this.x);
    }

    private inspect() {
        return `Box(${this.x})`;
    }
}