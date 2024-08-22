// "this" refers to the current context.

const user = {
    username : "rohit",
    age : 25,

    welcomeMessage : function () {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()      // rohit, welcome to website
// user.username = "manish"
// user.welcomeMessage()      // manish, welcome to website

//console.log(this)            // output : { }  , since we are in the node environment, here "this" refers to an empty object.
//   But when we do console.log(this) in browser console, it gives output as "window" object because it is like the global object there.


// function one (){
//     let username = "rohan"
//     console.log(this.username)          // we are not able to use "this" like this in functions as we were able to do in objects above.
// }
// one()            // output : undefined


// const one = function (){
//     let username = "rohit"
//     console.log(this.username)
// }
// one()               // if we define function like this , here also we will get undefined as output.

///////////////////////////
// const one = () => {
//     let username = "rohit"
//     console.log(this)
// }
// one()                  // output : { }  


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// const addTwo = (num1, num2) =>  num1 + num2        // writing arrow function is called "Implicit return".
// console.log(addTwo(3,4))                 // 7

const addTwo = (num1, num2) =>  (num1 + num2)       // we can use parentheses ().
console.log(addTwo(3,4))               // 7

// If we use curly braces then we have to use "return",  but if we use parentheses () we don't have to use return.
// Writing funciton like this is used in "REACT" a lot.

// if we want to return an object.
// const add = () =>  {username : "rohit"}
// console.log(add())             // output : undefined


const add = () =>  ({username : "rohit"})          // to return an object we have to put it in parentheses.
console.log(add())             // output :  {username : 'rohit'}
