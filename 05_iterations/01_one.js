// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element)
}                                 // output : Here it will print from 0 to 9.
//console.log(element)            // error : element is not defined because it is inside the scope.

// firstly we declare an index value, then second is the condition.
// if the condition is true then it goes to the result and before giving output it goes to i++ and increases the value.
// Then again checks the condition and goes to result.
// It runs until the condition becomes false.


// for (let i = 0; i < 12; i++) {
//     const number = i;
//     if (number == 5) {
//         console.log("5 is best number")
//     }
//     console.log(number)
// }


// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(`Outer loop value: ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         const element = j;
//        // console.log(`Inner loop value: ${j} and inner loop ${i}`)
//       console.log(i + '*' + j + ' = ' + i*j  );            // output : will print tables from 1 to 10.
//     }
// }



// let myArray = ["flash", "batman", "superman"]   

// console.log(myArray.length)                               // Using "for loop" in array.
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
// }



// break and continue : 

// for (let index = 1; index <= 20; index++) {

//     if (index == 5) {
//         console.log("Detected 5")
//         break;                                // "break" will stop the loop when the given condition is met.
//     }
//     console.log(`Value of i is ${index}`)
// }


for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log("Detected 5")
        continue;                               // "Continue" gives one more chance.
    }
    console.log(`Value of i is ${index}`)
}