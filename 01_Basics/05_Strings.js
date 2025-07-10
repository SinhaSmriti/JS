const name = "Abc"
const age = 20

//console.log(name + age + " Value");

console.log(`My name is ${name} and age is ${age}.`);

const newName = new String('efgpqr')

// console.log(newName[0]);
// console.log(newName.__proto__);
// console.log(newName.length);
// console.log(newName.toUpperCase());
console.log(newName.charAt(2));
console.log(newName.indexOf('f'));

const newString = newName.substring(0,2)
console.log(newString);

const anotherString = newName.slice(-5, 3)
console.log(anotherString);

const StringOne = "   abc   "
console.log(StringOne);
console.log(StringOne.trim());

const url = "https://js.com/Java-script"
console.log(url.replace('-', ''));
