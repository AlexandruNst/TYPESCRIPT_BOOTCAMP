// --- Untyped ---

function square(num) {
    num.toUpperCase(); // TS won't complain
    return num * num;
}

square(3);
square("asd");
square(true); // TS won't complain

// --- Typed ---

function typedSquare(num: number) {
    // num.toUpperCase(); // TS complains
    return num * num;
}

typedSquare(3);
// typedSquare("asd");// TS complains
// typedSquare(true); // TS complains

function greet(person: string) {
    return `Hi, ${person}!`
}

// --- Multiple parameters ---

const doSomething = (person: string, age: number, isFunny: boolean) => {
    return 0;
}

doSomething("ChickenFace", 76, true);
// doSomething("ChickenFace", 76, 1234); // TS will catch different types
// doSomething("ChickenFace", 76); // TS will also catch the wrong number of params

// --- Default values for parameters ---

function greet2(person: string = "stranger") {
    return `Hi, ${person}!`
}

greet2(); // TS won't complain because of the default value

// --- Function return types ---

function square2(num: number): number {
    return num * num;
}

function rando(num: number) { // Union type, will cover later
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

// --- Anonymous Functions ---

const colors = ["red", "orange", "yellow"];
colors.map(color => {
    return color.toUpperCase(); // TS infers the type of string here
})

// --- Void type ---

function printTwice(msg: string): void { // Although TS can infer the void type too, but we can just make it clearer/readable this way
    console.log(msg);
    console.log(msg);
    // return ""; // TS complains if we specify void type. If we don't, TS will then infer the type string, so it helps to solidify what type we want returned
}

// --- The Never type ---

// For functions that we want to never return anything. It won't have the opportunity to return anything
// Eg. throwing an error or infinite while loop

function makeError(msg: string): never {
    throw new Error(msg);
}

function gameLoop(): never { // TS will infer void here by default, so by using :never we make it extra clear we don't want this to return anything ever
    while (true) {
        console.log("GAME LOOP RUNNING")
    }
}