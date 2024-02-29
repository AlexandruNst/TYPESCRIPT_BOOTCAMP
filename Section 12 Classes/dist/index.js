"use strict";
class Player {
    #score = 0;  // # makes it private
    numLives = 10;
    static description = "Player in the game"
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    taunt() {
        console.log("BOOYA!");
    }

    loseLife() {
        this.numLives -= 1;
    }

    getScore() {
        return this.#score;
    }

    setScore(score) {
        this.#score = score;
    }

    #secret() {
        console.log("Secret!!!");
    }

    get fullName() {
        return `${this.first} ${this.last}`
    }

    get score() {
        return this.#score;
    }

    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be positive!")
        }
        this.#score = newScore;
    }

    set fullName(newName) {
        const [first, last] = newName.split(" ");
        this.first = first;
        this.last = last;
    }
}

const player1 = new Player("blue", "steele");
player1.taunt();

const player2 = new Player("charlie", "brown");
player1.taunt();

console.log(player1.first);
console.log(player2.first);

console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);

console.log(player1.getScore());
player1.setScore(7);
console.log(player1.getScore());

// player1.secret(); can't do that

console.log(player1.fullName);

console.log(player1.score); // looks like the field, but it's not. it's the getter.
// player1.score = -12; // throws error
player1.score = 21;
console.log(player1.score);

player1.fullName = "Amy Adams";
console.log(player1);

// player1.description;// doesn't exist
console.log(Player.description);

class AdminPlayer extends Player {
    isAdmin = true;
    constructor(first, last, powers) {
        super(first, last);
        this.powers = powers;
    }
}

const admin = new AdminPlayer("Admin", "McAdmin");
console.log(admin);
admin.taunt();