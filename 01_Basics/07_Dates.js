let date = new Date()
// console.log(date);
console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toJSON());

// let createdDate = new Date(2025, 1, 24)
// let createdDate = new Date(2025, 1, 24, 2, 30)
// let createdDate = new Date("2025-02-24")
let createdDate = new Date("02-24-2025")
// console.log(createdDate.toLocaleString());

let timeStamp = Date.now()

// console.log(timeStamp); // in ms
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/10000));

let newDate = new Date()
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday: 'long'
})