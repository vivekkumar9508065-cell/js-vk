// Dates

let myDate = new Date();
/*console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toTimeString()); 
console.log(myDate.toISOString());
console.log(myDate.toUTCString());


console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());*/

let mycreatedDate = new Date(2023, 5, 15, 10, 30, 0); 
//console.log(mycreatedDate.toLocaleString());
let mycreatedDate2 = new Date("2023-06-15T10:30:00");
//console.log(mycreatedDate2.toLocaleString());

let mycreatedDate3 = new Date(2023, 5, 15); 
//console.log(mycreatedDate3.toLocaleString());

let mycreatedDate4 = new Date("2023-06-15");
//console.log(mycreatedDate4.toLocaleString());

let mycreatedDate5 = new Date(2023, 5, 15, 10, 30, 0); 
//console.log(mycreatedDate5.toLocaleString());

let myTimestamp = Date.now();
console.log(myTimestamp);

let myDateFromTimestamp = new Date(myTimestamp);
console.log(myDateFromTimestamp.toLocaleString());