// --- JS ---

const dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
}

// --- TS ---

// Parameter object type
function printName(person: { first: string, last: string }): void {
    console.log("name");
}

printName({ first: "Thomas", last: "Smith" });
// printName({});
// printName({first: "Thomas"});
// printName({last: "Thomas"});
// printName({first: 123, last: "Smith"}); // TS will complain

// Variable object type
let coordinate: { x: number, y: number } = { x: 34, y: 2 };

// Return object type
function randomCoordinate(): { x: number, y: number } {
    // return {}; // TS will complain
    return { x: Math.random(), y: Math.random() };
}

// Catch ->
// printName({ first: "Mick", last: "Jagger", age: 34 }); // error
// BUT
const singer = { first: "Mick", last: "Jagger", age: 34 };
printName(singer);

// If the object is in a variable, I can pass extra stuff in the object,
// TS will only check if first and last are there, it will not complain about excess
// HOWEVER, if the object literal is defined in-line, it will check
// you pass ONLY the properties that are required.

// --- Type alias ---

type Point = {
    x: number;
    y: number;
}

let coordinate2: Point = { x: 34, y: 2 };

function randomCoordinate2(): Point {
    return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 };
}

type myNum = number; // can do this but why?
let age: myNum = 847;

// --- Nested Objects ---

type Song = {
    title: string, artist: string, numStreams: number, credits: { producer: string, writer: string }
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(song.title);
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 125345,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

calculatePayout(mySong);
printSong(mySong);

// --- Optional Properties

type Point3D = {
    x: number,
    y: number,
    z?: number
}

const myPoint: Point3D = { x: 1, y: 2, z: 3 };
const myPoint2: Point3D = { x: 1, y: 2 }; // Both fine

// --- Readonly modifier ---

type User = {
    readonly id: number,
    username: string
}

const user: User = {
    id: 1234,
    username: "name"
}

console.log(user.id); // Fine
// user.id = 235; // TS complains

// --- Intersection type ---

type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 124,
    color: "red"
}

// Extra attributes

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog & {
    age: number;
}

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9
}