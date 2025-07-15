const userEmail = []

if (userEmail) {
    console.log("got user email");
} else {
    console.log("didn't get user email");
}

// flasy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator '??': null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10
val1 = null ?? 10 ?? 20
console.log(val1);

// Terniary operator
// condition ? true : false

const teaPrice = 100
teaPrice > 80 ? console.log("less than 80") : console.log("greater than 80")