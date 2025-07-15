// for of

//["", "", ""]
//[{}, {}, {}]

// for values
const arr = [1, 2, 3, 4, 5]
for (const val of arr) {
    // console.log(val);
}

// for string type
const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is: ${greet}`);
}

// Maps
// used for key value pairs which are unique and in sequence
const map = new Map()
map.set('IN', "India")
map.set('JP', "Japan")
map.set('CN', "China")
map.set('FR', "France")
map.set('IN', "India") // will not be shown as it is duplicate
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':', value);
}

// checking if key value work on objects
const myObj = {
    game1: 'HSR',
    game2: 'ZZZ',
    game3: 'WuWa'
}

for (const [key, value] of myObj) {
    // console.log(key, ':', value); // will not work as objects don't have key values
}