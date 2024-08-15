// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);                   // Type of date is Object.

// let myCreatedDate = new Date(2024, 0, 26)
// console.log(myCreatedDate.toDateString())        // Fri Jan 26 2024
       
// let myCreatedDate = new Date(2024, 0, 26, 5, 3)
// console.log(myCreatedDate.toLocaleString())         //   1/26/2024, 5:03:00 AM


// let myCreatedDate = new Date("01-26-2024")
// // console.log(myCreatedDate.toLocaleString())


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log( Date.now());           //give miliseconds to today's date. to change them to seconds we can divide by 1000.

// console.log(Math.floor( Date.now()/1000))


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());         // 7  but the month is of August (8), the output is 7 because the months in JS starts with 0.  we can add 1 to get the exact value.

console.log(newDate.getMonth() + 1);     // 8

console.log (newDate.toLocaleString('default', {
    weekday : "long"
}))          // Thursday

