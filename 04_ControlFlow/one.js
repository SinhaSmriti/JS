// if
const temperature = 30

if (temperature = 30) {
    console.log("less than 40");
} else {
    console.log("greater than 40");
}

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 150
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);
const balance = 1000
// if (balance > 500) console.log("test1"), console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1000");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // all the conditions must be true when using and operator
    console.log("Allow user to buy");
}

if (loggedInFromGoogle || loggedInFromEmail) { // either one or both can be true for or operator '||'
    console.log("user logged in");
}