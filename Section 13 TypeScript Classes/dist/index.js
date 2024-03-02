"use strict";
class Player {
    first;
    last;
    score = 0; // :number is optional, TS can infer
    readonlyVar = 1;
    publicVar = 1;
    publicReadonlyVar = 1;
    privateVar = 1;
    protectedVar = 1;
    #privateVar2 = 2;
    // DIFFERENCES:
    // - first only works in TS, once in JS this is a public var
    // - Second makes it actually private in the JS so "truly" private (if the es version is high enough in the config file)
    // - using private doesn't change the var name. Addind # makes the var name change
    // - private is more common in docs because it was the only way to private vars for a long while
    // - you lose the clear duality of, this is public, this is private. You have public, and then "know" what # does
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    secretMethod() {
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
    first;
    last;
    // equivalent to delcaring, taking args in the constructor and initializing. Faster this way!
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
}
const p2 = new Player2("Player", "Two");
console.log(p2);
console.log(p2.fullName);
// --- Protected ---
class SuperPlayer extends Player {
    isAdmin = true;
    maxScore() {
        // this.privateVar = 99999; // privateVar is only accessible to the parent class
        this.protectedVar = 999;
    }
}
class Bike {
    color;
    constructor(color) {
        this.color = color;
    }
    ;
}
const bike1 = new Bike("red");
class Jacket {
    brand;
    color;
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    ;
    print() {
        console.log("PRINT");
    }
}
const jacket1 = new Jacket("Prada", "black");
// --- Abstract classes ---
class Employee {
    first;
    last;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    ;
    greet() {
        console.log("Hello!");
    }
}
// new Employee(); // Cannot create an instance of an abstract class
class FullTimeEmployee extends Employee {
    salary;
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() { return this.salary; }
}
class PartTimeEmployee extends Employee {
    getPay() { return 8; }
}
const FTEmployee = new FullTimeEmployee("first", "last", 13);
FTEmployee.greet();
// Can also extend a class and implement an interface at the same time
