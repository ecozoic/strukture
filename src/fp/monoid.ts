export class Sum {
    constructor(public x: number) {}

    public concat({x: y}: Sum): Sum {
        return new Sum(this.x + y);
    }

    private inspect() {
        return `Sum(${this.x})`;
    }

    public static empty(): Sum {
        return new Sum(0);
    }
}

export class Product {
    constructor(public x: number) {}

    public concat({x: y}: Product): Product {
        return new Product(this.x * y);
    }

    private inspect() {
        return `Product(${this.x})`;
    }

    public static empty(): Product {
        return new Product(1);
    }
}

export class All {
    constructor(public x: boolean) {}

    public concat({x: y}: All): All {
        return new All(this.x && y);
    }

    private inspect() {
        return `All(${this.x})`;
    }

    public static empty(): All {
        return new All(true);
    }
}

export class Any {
    constructor(public x: boolean) {}

    public concat({x: y}: Any): Any {
        return new Any(this.x || y);
    }

    private inspect() {
        return `Any(${this.x})`;
    }

    public static empty(): Any {
        return new Any(false);
    }
}

export class Max {
    constructor(public x: number) {}

    public concat({x: y}: Max): Max {
        return new Max(this.x > y ? this.x : y)
    }

    private inspect() {
        return `Max(${this.x})`;
    }

    public static empty(): Max {
        return new Max(-Infinity);
    }
}

export class Min {
    constructor(public x: number) {}

    public concat({x: y}: Min): Min {
        return new Min(this.x < y ? this.x : y)
    }

    private inspect() {
        return `Min(${this.x})`;
    }

    public static empty(): Min {
        return new Min(Infinity);
    }
}

// not truly a monoid, no .empty()
export class First {
    constructor(public x: any) {}

    public concat({x: y}: First): First {
        return this;
    }

    private inspect() {
        return `First(${this.x})`;
    }
}