export type Either = Left | Right;

export class Right {
    constructor(private x: any) {}

    public map(f: (x: any) => any): Right {
        return new Right(f(this.x));
    }

    public fold(f: (x: any) => any, g: (x: any) => any): any {
        return g(this.x);
    }

    public chain(f: (x: any) => any): any {
        return f(this.x);
    }

    private inspect() {
        return `Right(${this.x})`;
    }
}

export class Left {
    constructor(private x: any) {}

    public map(f: (x: any) => any): Left {
        return this;
    }

    public fold(f: (x: any) => any, g: (x: any) => any): any {
        return f(this.x);
    }

    public chain(f: (x: any) => any): any {
        return this;
    }

    private inspect() {
        return `Left(${this.x})`;
    }
}

export const fromNullable = (x: any): Either => {
    return x != null ? new Right(x) : new Left(null);
}

export const tryCatch = (f: Function): Either => {
    try {
        return new Right(f());
    } catch(e) {
        return new Left(e);
    }
}