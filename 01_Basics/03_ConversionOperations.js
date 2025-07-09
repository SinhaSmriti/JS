let score = "21abc"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "21" => 21
// "21abc" => NaN
// null => 0
// true = 1 // false = 0

let isLoggedIn = "abc"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true // 0 => false
// "" => false
// "abc" => true