const nUser = {
    username: "abc",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website.`);
        console.log(this);
        
    }
}

// nUser.welcomeMessage() // here will give the username abc
// nUser.username = "efg"
// nUser.welcomeMessage() // here the username will change to the current which is efg

// console.log(this); // will give the current value which not defined outside the block so will give only {}

// function new1() {
//     let username = "abc"
//     console.log(this.username); // will give undefined
// }

// new1() // will give undefined

// const new1 = function() {
//     let username = "abc"
//     console.log(this.username); // will give undefined
// }
// new1()

const new1 = () => {
    let username = "abc"
    console.log(this.username); // will give undefined
    console.log(this); // will give empty {}
    
}
// new1()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// addTwo(8,10)

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(10, 12));

const addTwo = (num1, num2) => ({username: "abc"})
console.log(addTwo(10, 12));

// const myArray = [1, 2, 3, 4, 5]
// myArray.forEach()