//? Using 'export' keyword
// import {add, sub, multiply} from './Basics.js';
// console.log(add(4, 5));
// console.log(sub(10, 7));
// console.log(multiply(10, 8));

//? Without using 'export' keyword
const {add, multiply, div, newVariable} = require('./Basics.js');
console.log(add(5, 8));
console.log(newVariable);
