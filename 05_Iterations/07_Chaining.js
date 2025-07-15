const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newNums = myNumers.map( (num) => { return num + 10})

// can add more than one map or filters as chaining
const newNums = myNumers.map((num) => num * 10 ).map( (num) => num + 1).filter( (num) => num >= 40)
// console.log(newNums);