const Score = 400
//console.log(Score);

const balance =  new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.456789;
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toExponential(2));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());

const num1 = 10;
const num2 = 3;

console.log(num1 + num2); // Addition
console.log(num1 - num2); // Subtraction
console.log(num1 * num2); // Multiplication
console.log(num1 / num2); // Division
console.log(num1 % num2); // Modulus
console.log(num1 ** num2); // Exponentiation

const num3 = 5;
const num4 = 2;

console.log(num3 > num4); // Greater than
console.log(num3 < num4); // Less than
console.log(num3 >= num4); // Greater than or equal to
console.log(num3 <= num4); // Less than or equal to
console.log(num3 === num4); // Strict equality
console.log(num3 !== num4); // Strict inequality

const num5 = 10;
const num6 = 20;

console.log(num5 == num6); // Loose equality
console.log(num5 != num6); // Loose inequality

const num7 = 15;
const num8 = 5;

console.log(num7 + num8); // Addition
console.log(num7 - num8); // Subtraction
console.log(num7 * num8); // Multiplication
console.log(num7 / num8); // Division
console.log(num7 % num8); // Modulus
console.log(num7 ** num8); // Exponentiation

//++++++++maths+++++

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.3)); // 5

console.log(Math.min(10, 5, 8, 3)); // 3
console.log(Math.max(10, 5, 8, 3)); // 10

console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 100); // Random number between 0 and 100

const min =10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random number between 10 and 20

console.log(Math.abs(-10)); // 10
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8