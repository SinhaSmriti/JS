const score = 500
// console.log(score);

const balance = new Number(50)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const num1 = 123.5674
// console.log(num1.toPrecision(4));

const hundreds = 1000000000
// console.log(hundreds.toLocaleString('en-IN'));

// Maths

// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(2.46));
// console.log(Math.ceil(2.3));
// console.log(Math.floor(2.6));
// console.log(Math.min(2, 4, 6, 8));
// console.log(Math.max(2, 4, 6, 8));

console.log(Math.random()); // gives value between 0 and 1
console.log((Math.random()*10) + 1); // added 1 to avoid giving 0 value 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);