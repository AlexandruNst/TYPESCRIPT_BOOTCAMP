let movieTitle: string = "Amadeus";
let numCatLives: number = 9;
let gameOver: boolean = false;

// Type Inference
let tvShow = "TC Show Name"; //automatically inferred to string
tvShow = "Other TV Show";
// tvShow = 3; //Can't do this

// The Any type
let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.getFunction();
// Defeats the purpose of TS and types so use sparingly

// Delayed initialization
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: boolean;

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = true;
    }
}

// foundMovie = "Some string, even though it should be boolean";
