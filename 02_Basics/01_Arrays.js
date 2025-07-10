const arr1 = [0, 1, 2, 3, 4]
const arr2 = ["a", "b", "c"]
const arr3 = new Array(5, 6, 7, 8)
// console.log(arr1);

// Array Methods

// arr1.push(5, 6)
// arr1.pop()

// arr1.unshift(6)
// arr1.shift()

// console.log(arr1.includes(6));
// console.log(arr1.indexOf(2));

const newArr = arr1.join() // converts to string
console.log(arr1);
console.log(newArr);

// slice and splice

console.log("A ", arr1);

const myn1 = arr1.slice(1, 3)
console.log(myn1);

console.log("B ", arr1);

const myn2 = arr1.splice(1, 3)
console.log("C ", arr1);
console.log(myn2);

const colors = ["Blue", "Black", "Red", "Green", "White"]
const vehicles = ["car", "bus", "auto", "train"]

// colors.push(vehicles)
// console.log(colors);
// console.log(colors[3][1]);

// const all = colors.concat(vehicles)
// console.log(all);

const allnew = [...colors, ...vehicles]
// console.log(allnew);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("abcdef"))
console.log(Array.from("abcdef"))
console.log(Array.from({name: "abcdef"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));