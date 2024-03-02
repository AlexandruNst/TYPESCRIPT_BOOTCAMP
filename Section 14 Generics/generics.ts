function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

function anyIdentity(item: any): any { // won't work because item any is not necessarily the same as return any
    return item;
}

function identity<T>(item: T): T {
    return item;
}

identity<string>("asdf");
// identity<number>("asdf"); // TS will complain.

interface Cat {
    name: string,
    breed: string
}

identity<Cat>({ name: "Cat", breed: "Cat" });

function getRandomElement<T>(list: T[]): T {
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}

getRandomElement<string>(["a", "b", "c"]);
getRandomElement<number>([1, 2, 3]);
getRandomElement<Cat>([{ name: "Cat", breed: "Cat" }, { name: "Cat2", breed: "Cat2" }]);

getRandomElement(["a", "b", "c"]); // if i leave the type out, TS is smart to infer the correct type

// --- Combine generics

function merge<T, U>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}

const combo = merge({ name: "colt" }, { pets: ["blue", "elton"] });

// --- Generic constraints

function merge2<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}
// this constrains the generics to something that is an object

merge({ name: "colt" }, 9);
// merge2({name: "colt"}, 9); // TS will complain

interface Lengthy {
    length: number
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}

printDoubleLength("asdg"); // TS is ok with this because a string has a property "length"
// printDoubleLength(135); // TS complains because number doesn't have "length"

// --- Default type

function makeEmptyArray<T>(): T[] {
    return [];
}

const things = makeEmptyArray(); // Type not specified, => unknown[]

function makeEmptyArray2<T = number>(): T[] {
    return [];
}

const things2 = makeEmptyArray2(); // Defaults to number[]
const things3 = makeEmptyArray2<boolean>(); // still boolean.

// --- Generic Classes

interface Song {
    title: string,
    artist: string
}

interface Video {
    title: string,
    creator: string,
    resolution: string
}

class VideoPlaylist {
    public videos: Video[] = [];
}

class SongPlaylist {
    public songs: Song[] = [];
}

// INSTEAD

class Playlist<T>{
    public queue: T[] = [];
    add(el: T) { this.queue.push(el) };
}

const songs = new Playlist<Song>;
songs.add({
    title: "",
    artist: ""
});

const videos = new Playlist<Video>();
videos.add({
    title: "",
    creator: "",
    resolution: ""
});