const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    ts: "typescript"
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject}`); // key is for keys and myObject is for values
}

// different way
const programming = ["js", "rb", "py", "cpp"]
for (const key in programming) {
    // console.log(programming[key]);
}

// checking if map works in forin
const map = new Map()
map.set('IN', "India")
map.set('JP', "Japan")
map.set('CN', "China")
map.set('FR', "France")

for (const key in map) {
    // console.log(key); // will not work
}