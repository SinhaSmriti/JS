// Immediately Invoked Function Expressions (IIFE)

// To remove global scope pollution iife is used which immediately executes the program

(function new2() { // name iife
    console.log(`DB CONNECTED`);
})(); // ';' is must to end the execution.

( (name) => { //normal iife
    console.log(`DB CONNECTED ${name}`);
})('abc');
