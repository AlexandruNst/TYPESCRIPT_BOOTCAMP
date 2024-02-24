let age: number | string = 21;
age = 23;
age = "51";

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinate: Point | Loc = {
    x: 1,
    y: 34
}

coordinate = { lat: 32, long: 721 }

function printAge(age: number | string) {
    console.log(`You are  ${age} years old`);
}

printAge(23);
printAge("72");

// --- Type Narrowing ---

function calculateTax(price: number | string, tax: number) {
    // price.replace("$", ""); // TS complains
    // return price * tax; // TS complains

    if (typeof price === "string") {
        price.replace("$", ""); // works
    } else {
        return price * tax; // works. TS knows.
    }
}

// --- Unions and Arrays ---

const stuff: (number | string)[] = [1, 2, 3, 4, "a", "b", "c"];
// const stuff: number | string[] = [1, 2, 3, 4, "a", "b", "c"]; // This is either a number, or an array of only strings
// const stuff: number[] | string[] = [1, 2, 3, 4, "a", "b", "c"]; // This is either an array of only numbers, or an array of only strings

const coords: (Point | Loc)[] = [];
coords.push({ x: 1, y: 34 });
coords.push({ lat: 32, long: 721 });

// --- Literal types ---

let zero: 0 = 0;

// zero = 1; // TS complains

let hi: "hi" = "hi";

let mood: "happy" | "sad" = "happy";
mood = "sad";
// mood = "angry"; // TS will complain

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday"

let today: DayOfWeek = "Monday";
// today = "Sunday"; // TS will complain

