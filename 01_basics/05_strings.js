const name = "John Doe"; // string
const repocount = 50; // number

//console.log("Name: " + name + ", Repo Count: " + repocount); // Name: John Doe, Repo Count: 

console.log(`Hello, my name is ${name} and I have ${repocount} repositories.`);

const gameName = new String('vivek _vc'); // string object

 console.log (gameName[0]);  
 console.log (gameName.__proto__);
 console.log (gameName.length);
 console.log (gameName.toUpperCase());
console.log (gameName.toLowerCase());
console.log (gameName.includes('vivek'));
console.log (gameName.startsWith('vivek'));
console.log (gameName.endsWith('_vc'));
console.log (gameName.indexOf('v'));
console.log (gameName.lastIndexOf('v'));
console.log (gameName.replace('vivek', 'Vivek'));
console.log (gameName.slice(0, 5));
console.log (gameName.split(' '));
console.log (gameName.trim());
console.log (gameName.charAt(0));
console.log (gameName.charCodeAt(0));
console.log (gameName.concat(' is a game'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.substr(0, 4);
console.log(anotherString);

const stringWithSpaces = "   Hello World!   ";
console.log(stringWithSpaces.trim());
console.log(stringWithSpaces.trimStart());
console.log(stringWithSpaces.trimEnd());

const repeatedString = "Hello ".repeat(3);
console.log(repeatedString);

const paddedString = "5".padStart(3, "0");
console.log(paddedString); // Output: 005

const paddedEndString = "5".padEnd(3, "0");
console.log(paddedEndString); // Output: 500

const newStringOne = "Hello World!";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.example.com";
const domain = url.slice(8, 22);
console.log(domain); // Output: www.example.com

const email = "user@example.com";
console.log(email); // Output: user@example.com