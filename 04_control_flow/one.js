// if 

const isUserLoggedIn = true
const temperatue = 41

// if (temperatue > 45) {                         // In 'if' statements the condition in the parentheses is true or false. If the value comes true then what is inside will be executed otherwise not.
//     console.log("less than 50")
// }                              // no output

// if (temperatue < 50) {                         
//     console.log("less than 50")
// }                                                   // output : less than 50
// console.log("temperature is less the 50 degree")            //  temperatue is less than 50
// This console.log will execute, it has no connectio with the if statement.



// if (temperatue > 50) {
//     console.log("less than 50")
// }
// else {
//     console.log("temperature is more than 40")
// }
// console.log("executed")



// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)        // error : power is not defined. This is because of scope {}.
// if we have used 'var' in place of 'let' then it would have given the output because 'var' has gobal scope. That would not have been right thats why we don't use 'var'.



//  const balance = 1000
//  if (balance > 500) console.log("Hello"), console.log("rohit")    // implicit scope
// // This will give the output but we don't write like this.. this is bad practice to write code.
// if printing only one value then its Ok but if you are printing many values then its bad practice.
// you can write many console logs separated by , comma.


// const balance = 1000

// if (balance < 500) {
//    console.log("less than");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200")
// }                                      // less than 1200



const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false           // user didn't logged in from google
const loggedInFromEmail = true             // user logged in from Email

if (UserLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course")
}

if (loggedInFromEmail || loggedInFromGoogle) {       // User can log in from any site so we used 'or' || , if any one of them true then allow to enter.
    console.log("User logged in")
}