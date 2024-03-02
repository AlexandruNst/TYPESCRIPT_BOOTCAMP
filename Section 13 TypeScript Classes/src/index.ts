class Player {
    first: string;
    last: string;
    score: number = 0; // :number is optional, TS can infer

    readonly readonlyVar: number = 1;

    public publicVar: number = 1;
    public readonly publicReadonlyVar: number = 1;

    private privateVar: number = 1;
    protected protectedVar: number = 1;
    #privateVar2: number = 2;
    // DIFFERENCES:
    // - first only works in TS, once in JS this is a public var
    // - Second makes it actually private in the JS so "truly" private (if the es version is high enough in the config file)
    // - using private doesn't change the var name. Addind # makes the var name change
    // - private is more common in docs because it was the only way to private vars for a long while
    // - you lose the clear duality of, this is public, this is private. You have public, and then "know" what # does

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    private secretMethod() {
        console.log("Secret Method");
    }
}

const elton = new Player("Elton", "Steele");
elton.score = 20;
// elton.score = "asdf"; // TS will complain
// elton.first = "Ahhsdf"; // TS will complain
// elton.privateVar; // TS will complain
// elton.secretMethod(); // TS will complain

class Player2 {
    // equivalent to delcaring, taking args in the constructor and initializing. Faster this way!
    constructor(public first: string, public last: string) { }

    get fullName(): string {
        return `${this.first} ${this.last}`
    }

}

const p2 = new Player2("Player", "Two");
console.log(p2);
console.log(p2.fullName);

// --- Protected ---

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        // this.privateVar = 99999; // privateVar is only accessible to the parent class
        this.protectedVar = 999;
    }
}

// --- Interfaces ---

interface Colorful {
    color: string;
}

class Bike implements Colorful {
    constructor(public color: string) { };
}

const bike1 = new Bike("red");

interface Printable {
    print(): void;
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) { };
    print(): void {
        console.log("PRINT");
    }
}

const jacket1 = new Jacket("Prada", "black");

// --- Abstract classes ---

abstract class Employee {
    constructor(public first: string, public last: string) { };
    abstract getPay(): number;
    greet() {
        console.log("Hello!");
    }
}

// new Employee(); // Cannot create an instance of an abstract class

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }
    getPay() { return this.salary }
}

class PartTimeEmployee extends Employee {
    getPay() { return 8; }
}

const FTEmployee = new FullTimeEmployee("first", "last", 13);
FTEmployee.greet();

// Can also extend a class and implement an interface at the same time