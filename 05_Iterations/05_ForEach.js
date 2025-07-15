const coding = ["js", "py", "cpp", "ts"]

// using function
coding.forEach(function (val){
    // console.log(val);
})

// using arrow
coding.forEach( (item) => {
    // console.log(item);
})

// another way
function name(item) {
    // console.log(item);
}
// coding.forEach(name)

// other features of forEach
coding.forEach((item, index, arr) => {
    // console.log(item, index, arr); // will print the item, it's index and the array
})

const myCoding = [
    {
        langName: "javascript",
        langFile: "js"
    },
    {
        langName: "python",
        langFile: "py"
    },
    {
        langName: "java",
        langFile: "java"
    },
    {
        langName: "c++",
        langFile: "cpp"
    }
]

myCoding.forEach((item) => {
    // console.log(item.langFile); // can call specific key as well instead of the whole array
})