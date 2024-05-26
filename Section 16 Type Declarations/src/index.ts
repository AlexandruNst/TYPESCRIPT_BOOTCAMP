console.log("hi"); // right click console -> Type definition -> will see a .d.ts file
// These are files with ONLY type information -> d for declaration file
// .ts files are IMPLEMENTATION files

// --- 3rd party declaration files

// did a npm init and npm install axios
// jsonplaceholder API offers endpoint like /posts, /users, /comments etc. that just gives some placeholder JSON
// https://jsonplaceholder.typicode.com/

import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/users/1")
    .then(res => {
        console.log("Woo!");
        console.log(res.data);
    }).catch(e => {
        console.log("Error!");
    })

// installing types separately

//npm install lodash

// import _ from "lodash" doesn't work - but not cus it can't be found or not installed, but cus it doesn't have a type declaration file
// lodash doesn't include typescript
// so we need to find the declarations out there
// all popular 3rd party libraries have a pre-existing type declaration files written for them, but have to INSTALL SEPARATELY

// npm install --save-dev @types/lodash
// @types -> reference to a project with thousandssss of type declarations for popular js libraries
// --save-dev means we only need it for dev env, we don't need it in prod (since prod only has the compiled js)
// package.json has
//   "dependencies": {
//     "axios": "^1.7.2",
//     "lodash": "^4.17.21"
//   },
//   "devDependencies": {
//     "@types/lodash": "^4.17.4"
//   }

// ! Can check on the npm page of the package if the library needs separate type installation !

import _ from "lodash"
_.partition
_.flatten // works!