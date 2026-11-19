let Score = "33";


console.log(typeof Score);

console.log(typeof (Score));

let valueInNumber = Number(Score); // convert string to number

console.log(valueInNumber);

console.log(typeof valueInNumber);

//"33 => 33
//"33abc => NaN
//true => 1
//false => 0

let isLoggedIn = "true";
let booleanIsLoggedIn = Boolean(isLoggedIn); // convert string to boolean

// 1=> true
// 0 => false
// "" => false
// " " => true

let someNumber = 33;
let stringNumber = String(someNumber); // convert number to string

console.log(stringNumber);
console.log(typeof stringNumber);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);