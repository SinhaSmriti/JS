// var c = 300 // var makes the object value change globally as well as locally irrespective of scope
let a = 200 // global scope

if (true) {
    let a = 100 // local scope, the value will not show outside this block
    const b = 20
    console.log("Inner value of a: ", a); // gives the value of a inside this block
}

// console.log("Outer value of a: ", a); // gives the value of a outside the block
// console.log(b); // will show error because there is no value of b globally

// nested scope

function one(){
    const username = "abc"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // will give error and stop executing here only

     two()

}

// one()

if (true) {
    const username = "abc"
    if (username === "abc") {
        const website = " youtube"
        // console.log(username + website); // will give the result
    }
    // console.log(website); // will give error
}

// console.log(username); // will give error because it is outside the block

// console.log(addone(5)) // can give answer before function is declared in this syntax

function addone(num){
    return num + 1
}



// addTwo(5) // will give error because function is declared in the variable
const addTwo = function(num){
    return num + 2
}