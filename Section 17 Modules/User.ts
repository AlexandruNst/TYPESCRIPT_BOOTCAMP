export default class User {
    constructor(public username: string, public email: string) { }
    logout() {
        console.log("Logged out.");
    }
}

export function userHelper() {
    console.log("HELP");
}