const activeUsers: string[] = []
activeUsers.push("Steven");
// activeUsers.push(12); // TS will complain

const ages: number[] = [45, 56, 21]
ages[0] = 99;
// ages[1] = "asd"; // TS will complain

// Alternative syntax
const bools: Array<boolean> = [true, false];

type Point = {
    x: number,
    y: number
}

const points: Point[] = [{ x: 12, y: 35 }, { x: 6, y: 51 }];

// Multidimensional array
const board: string[][] = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"]
]
