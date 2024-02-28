// type Point = {
//     x: number,
//     y: number
// }

interface Point {
    x: number,
    y: number
}

let pt: Point = { x: 23, y: 34 }

// --- Optionals ---

interface Person {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string
}

const Thomas: Person = { id: 123, first: "Thomas", last: "Hardy", nickname: "Tom" };
const Thomas2: Person = { id: 123, first: "Thomas", last: "Hardy" };

Thomas.last = "Abcdef"
// Thomas.id = 345; TS will complain

// --- Methods ---

interface Person2 {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string,
    // sayHi: () => string
    // sayHi(): string
    sayHi(name: string): string //multiple syntax
}

const Thomas3: Person2 = { id: 123, first: "Thomas", last: "Hardy", sayHi: (name: string) => { return "Hi!" } };

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number
}

const shoes: Product = {
    name: "Blue shoes",
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
}

// --- Reopening interfaces ---

interface Dog {
    name: string,
    age: number
}

// Reopening
interface Dog {
    breed: string,
    bark(): string
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian shepherd",
    bark() { return "Woof woof!" } // TS will require the object to have EVERYTHING
}

// --- Extending interfaces ---

interface ServiceDog extends Dog {
    job: "guide dog" | "helper dog"
}

const chewy: ServiceDog = {
    job: "guide dog",
    name: "Chewy",
    age: 2,
    breed: "Lab",
    bark(): string {
        return "Bark!";
    }
}

// Extending multiple interfaces ---

interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Human, Employee {
    level: string
    languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 1234,
    email: "pierre@gmail.com",
    level: "junior",
    languages: ["java", "python"]
}