function Name() {
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
}
// Name()

// function addTwoNumbers(num1, num2){

//     console.log(num1 + num2);
// }

// another way to write function
function addTwoNumbers(num1, num2){

    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "abc"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("abc"))
// console.log(loginUserMessage("")) // returns undefined


function calculatePrice(val1, val2, ...number1){
    return number1
}

// console.log(calculatePrice(200, 400, 500, 2000)) // gives 500 and 2000 as an array

const user2 = {
    username: "abc",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user2) // gives the value from user2 in the function
// better way -
handleObject({
    username: "efg",
    price: 399
}) 

// in array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));