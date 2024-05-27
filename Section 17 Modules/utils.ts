function add(x: number, y: number): number {
    return x + y;
}

function sample<T>(arr: T[]): T {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

const x = 10;