// literals
// object.create

// object.literals

const mySym = Symbol("key")

const user = {
    name: "abc",
    [mySym]: "key1",
    age: 12,
    email: "abc@google.com"
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["name"]);
// console.log(user[mySym]);

user.age = 22 // for changing the data
// Object.freeze(user) // to fix the data
user.name = "efg" // this will not be changed as the object is now freezed
// console.log(user);

user.greeting = function() {
    console.log("Hello user");
}

user.greeting2 = function() {
    console.log(`Hello user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());


// const user1 = new Object() // singleton object
const user1 = {} // non singleton object
user1.id = "01"
user1.name = "abc"
user1.isLoggedIn = false

// console.log(user1);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "pqr",
            lastname: "mno"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // gives separately as obj1 and then obj2
// const obj3 = Object.assign({}, obj1, obj2, obj4) // merges and shows as single object

const obj3 = {...obj1, ...obj2} // better way to merge
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(user1);

// console.log(Object.keys(user1)); 
// console.log(Object.values(user1));
// console.log(Object.entries(user1));

// console.log(user1.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "abc"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // for changing the name of object

// console.log(courseInstructor);
console.log(instructor);

// in object form -
// {
//     "name": "abc",
//     "coursename": "js",
//     "price": "free"
// }

// in array form -
// [
//     {},
//     {},
//     {}
// ]