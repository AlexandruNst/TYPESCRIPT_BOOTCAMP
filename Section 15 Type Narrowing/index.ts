// --- Type guard

function triple(value: number | string) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    return value * 3;
}

// --- Truthiness guard

const el = document.getElementById("idk");  // HTMLElement | null
if (el) {
    el; // TS rules out the null
} else {
    el; // TS knows it's definitely null
}

const printLetters = (word?: string) => { // string | undefined
    if (word) {
        for (let char of word) { //TS knows it's definitely string here
            //code
        }
    }
}

// --- Equality narrowing

function someDemo(x: string | number, y: string | boolean) {
    if (x === y) {
        x;
        y; // TS knows the only posibility here is x and y being strings
    }
}

// Narrowing with the in operator

interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(thing: Movie | TVShow): number {
    if ("numEpisodes" in thing) {
        let { numEpisodes, episodeDuration } = thing;
        return numEpisodes * episodeDuration;
    }
    return thing.duration;
}

// Narrowing with instanceof

// instanceof works on objects made from classes
// basically anything made with the "new" keyword

function printFullDate(date: Date | string) {
    // if(typeof date === "Date") -> doesn't work, typeof works only on primitives
    if (date instanceof Date) {
        date; // TS knows it's date
    } else {
        date; // string
    }
}

class User {
    constructor(username: string) { }
}

class Company {
    constructor(name: string) { }
}

function printName(entity: User | Company) {
    if (entity instanceof User) {
        entity; // User
    } else {
        entity; // Company
    }
}

// Type predicates

// could use the "in" technique, or the "instaceof" technique

interface Cat {
    name: string,
    numLives: number
}

interface Dog {
    name: string,
    breed: string
}

function isCat(animal): animal is Cat {
    return (animal as Cat).numLives !== undefined
    // checks if the animal cast as a Cat has a property numLives or it's undefined
    // animal is Cat -> type predicate (not the whole function!)
    // if the function evaluates to true, we know that "animal is Cat"
}


function makeNoise(animal: Cat | Dog): string {
    if (isCat(animal)) {
        animal; // Cat
        return "Meow"
    } else {
        animal; // Dog
        return "Woof"
    }
}

// --- Discriminated Unions

// used for when all interfaces have the same attributes
// also ofc not everytime you'd know what an interface's attributes are, so can't do the "in" trick
// can't use "instanceof" because these are interfaces, can't use "new" to make objects out of them
// Solution: add a discriminant in each interface and switch on it

interface Rooster {
    name: string,
    weight: number,
    age: number
    kind: "rooster"
}

interface Cow {
    name: string,
    weight: number,
    age: number
    kind: "cow"
}

interface Pig {
    name: string,
    weight: number,
    age: number
    kind: "pig"
}

type FarmAnimal = Pig | Rooster | Cow

function getFarmAnimalSound(animal: FarmAnimal) {
    switch (animal.kind) {
        case "pig": {
            animal; // Pig
            return "Oink"
        }
        case "rooster": {
            animal; // Rooster
            return "Coo"
        }
        case "cow": {
            animal; // Cow
            return "Moo"
        }
    }
}

const stevie: Rooster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
}

getFarmAnimalSound(stevie);

// --- Never checking

// future proof code
// basically tell TS all the cases we want are covered
// so for e.g. TS will complain if we add a new type of Farm Animal, and then forget to handle it
// Solution -> add a default where we set animal to a variable of type never
// NOTHING is assignable to a variable of type never, so TS will complain

interface Sheep {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "sheep"
}

type FarmAnimal2 = FarmAnimal | Sheep;

function getFarmAnimalSound2(animal: FarmAnimal2) {
    switch (animal.kind) {
        case "pig": {
            animal; // Pig
            return "Oink"
        }
        case "rooster": {
            animal; // Rooster
            return "Coo"
        }
        case "cow": {
            animal; // Cow
            return "Moo"
        }
        case "sheep": {
            animal; // Cow
            return "Moo"
        }
        default:
            const shouldNeverGetHere: never = animal; // if you remove the last case, this will complain
    }
}



