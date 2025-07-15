// for loop

for (let i = 0; i <= 10; i++) {
    const element = array[i];
    if (element == 5) {
        // console.log("5th element found.");
    }
    // console.log(element);
} // In this loop all the elements will be printed in sequence and at 5th position if statement will show

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`); // will run 1 value and for that value inner loop will run completely
    for (let j = 0; j <= 10; j++) { 
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + "*" + j "=" + i*j);
    } 
}

// for loop for arrays
let myArray = ["a", "b", "c"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// break
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
//    console.log(`Value of i is ${index}`);
    
}

// continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
//    console.log(`Value of i is ${index}`);
    
}