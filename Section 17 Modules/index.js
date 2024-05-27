import { add2, sample2 } from "./utils2.js";
console.log("hi");
// how to use functions from another file?
// sample([12, 345, 16, 85, 345]);
// add(4, 63); // they work! but why?
// These are NOT modules - they are scripts, because they don't have an export in them
// so everything is available in the global scope
// console.log(x); // I even have access to variables!
// this will be problematic for eg. when trying to write a variable with the same name in different files,
// function with the same name in different files etc
// also in js, I will have to make use I include the files in the html in the correct order -> messy
// with modules, we can separate code, organise it, have different spaces for code
// just by adding "export" anywhere, the file becomes a module
// so if for eg i add export before sample, add will become unavailable too -> the whole file is now a module
console.log(sample2([12, 345, 16, 85, 345]));
console.log(add2(4, 63)); // import is at the top, else html will complain
// if i try to import sample2 without putting export before it, it won't work
// also in order for this work in the browser,
// change "module" in tsconfig to any ES, rather than commonjs
