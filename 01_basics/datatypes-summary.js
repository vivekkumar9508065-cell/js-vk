// primitive

// 7 types : string , number, Boolearn, null, undefined, Symbol, BigInt

const score = 100; // number
const scoreValue = "100"; // string

const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false


const bigNumber = 3456789012345678901234567890n; // BigInt
// Reference (Non primitive) 


// Object, Array, Function, Date, RegExp, Error, Map, Set, WeakMap, WeakSet

const heros = ["shaktiman", "naagraj", "doga"]; // Array
const myObj = {
  name: "shaktiman",
  age: 30,
}; // Object

const myFunction = function () {
  console.log("Hello World");
}; // Function

const date = new Date(); // Date
console.log(date); // Sat Jun 15 2024 12:34:56 GMT+0000 (Coordinated Universal Time)