// --- Basics of Types ---

let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9; // TS is gonna complain
// movieTitle.upper(); // TS will complain
movieTitle.toUpperCase() // ok

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "zero" // TS is gonna complain

let gameOver: boolean = false;
gameOver = true;
// gameOver = "true" // TS is gonna complain

// --- Type Inference ---

let tvShow = "Olive Kitteridge"; // TS infers the type of string
tvShow = "The Other Two"; // ok
// tvShow = false; // TS is gonna complain

let isFunny = true; // TS infers the type of boolean
isFunny = false;
// isFunny = "string" // TS is gonna complain

// --- The any Type ---

let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase(); // TS won't complain about any of these

// --- Delayed Initialisation 

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie; // If we don't specify the type, TS will assume ANY

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
        foundMovie();
        foundMovie = 1;
        foundMovie.agshbAsngow(); // TS won't complain
    }
}

let foundMovieString: string; // Try to always specify the type

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovieString = "Amadeus";
        // foundMovieString();
        // foundMovieString = 1;
        // foundMovieString.agshbAsngow(); // TS is gonna complain
    }
}


// Compilation: use command tsc variables.ts