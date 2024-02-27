// Tuple - an array type with fixed length and fixed order of types

let color: [number, number, number] = [255, 0, 255];
// let color: [number, number, number] = [255, 0, "red"]; // TS will complain
// let color: [number, number, number] = [255, 0, 45, 12]; // TS will complain

let response: [number, string] = [200, "OK"];
// let response: [number, string] = ["OK", 200]; // TS will complain

type HTTPResponse = [number, string];
let newResponse = [200, 'OK'];

// HOWEVER
newResponse.push(1245); // TS doesn't complain here. Limitation of TS Tuples

const responses: HTTPResponse[] = [[404, "Not Found"], [200, "OK"]];