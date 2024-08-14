// Stack memory (primitive)          heap memory (non- primitive)

let name = "rohit"
let anotherName = name

//console.log(anotherName)

anotherName = "manish"

console.log(name)            // rohit
console.log(anotherName)     // manish
// here we get the copy of the variable which we have declared.

let userOne = {
    email : "rohit@google.com",
    upi : "user@ybl" 
}

let userTwo = userOne

userTwo.email = "manish@google.com"

console.log(userOne.email)         // manish@google.com     
console.log(userTwo.email)         // manish@google.com  
// here the value will change because change takes place in the original value.