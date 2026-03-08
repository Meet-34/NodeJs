// console.log("Welcome to Lovely Professional University!")

// let a = 10;
// let b = 5;
// console.log(a + b);

// var c = 2;
// const d = 1;
// console.log(c + d);

// let lpu = "Lovely Professional University";
// console.log(lpu);

// Use let or const or var for declaring a variable in js
// Use backtick(`Content of String`) for strings

// console.log(`Welcome to ${lpu}`);

// let values = ["Lily", "Rose", "Jasmine", 10, true];
// console.log(`\n${values[0]}, ${values[1]} and ${values[2]} are really close friends.\nThey have been together since ${values[3]} years and they are unseparable.\nIts ${values[4]}!`);

// console.log(`\nElements of the Array are: `);
// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]);
// }

// let table = 4;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${table} x ${i} = ${table * i}`);
// }

// values.forEach((val, index) => {
//     console.log(`value at ${index} is ${val}`);
// })

//! Functions 

//! Local module: 
//? Using 'export' keyword with every function and every variable that we want to export - ES module

// export function add(a, b){
//     return a+b;
// }

// export function sub(a, b){
//     return a-b;
// }

// export let multiply = (a, b) => a*b;

//? Without using 'export' keyword - CommonJS

// function add(a,b){
//     return a+b;
// }

// function multiply(a,b){
//     return a*b;
// }

// function div(a,b){
//     return a/b;
// }

// let newVariable = 100;
// module.exports = {add, multiply, div, newVariable};