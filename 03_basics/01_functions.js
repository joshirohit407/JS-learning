// function myName () {
//     console.log("R");
//     console.log("O");
//     console.log("H");
//     console.log("I");
//     console.log("T");
// }

// myName()    // myName is reference and () is for execution.


// function sum (number1, number2) {               // The values in brackets when you define a function are called "Parameters".
//        console.log(number1 + number2)
// }
// sum(3,5)                             // The values in brackets when you call a function are called "Arguments".



function sum (number1, number2) {             
      // let result = (number1 + number2)
      // return result
      //      OR
      return number1 + number2 

     //  console.log("rohit")         // This will not work because in function after return nothing works.
}
const result = sum(3,5)                          
// console.log("Result: ", result)


// function loginUserMessage (username) {
//    return `${username} just logged in`
// }
// console.log(loginUserMessage("Rohit"))       // Rohit just logged in
// console.log(loginUserMessage(""))            // just logged in
// console.log(loginUserMessage())              // undefined just logged in



// function loginUserMessage (username) {
//     if(username === undefined){                        // OR  if(!username)
//         console.log("Please enter username")
//         return
//     }
//     return `${username} just logged in`
// }                                              // Please enter username
// console.log(loginUserMessage())                //  undefined




// function loginUserMessage (username= "sam") {              // if we provide value here then down in console.log if we don't even put any name it will not show undefined , it will show  "Sam just logged in"
//         if(!username){                       
//             console.log("Please enter username")
//             return
//         }
//         return `${username} just logged in`
//     }                                              
//     console.log(loginUserMessage())           // and if we provided a name here then it will overwrite "sam" and fill the name we provided here.
                                      


    
// function calculateCartPrice (num1){
//       return num1
// }
// console.log(calculateCartPrice(200))        // 200


// What if we have many price values at same time

function calculateCartPrice (...num1) {           // here we used "rest" operator (...value)
    return num1
}
console.log(calculateCartPrice(200, 300, 500))     // [ 200, 300, 500 ]   will give an array of all prices


const user = {
    username : "rohit",
    price : 299
}

function handleObject (anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)         //  Username is rohit and price is 299
handleObject({
    username : "sam",
    price : 99             //  Username is sam and price is 99
})


// For Array
const myArr = [200, 400, 500, 700]

function returnSecondValue(getArray) {
    return getArray[1]
} 
console.log(returnSecondValue(myArr))         // 400
//          OR
console.log(returnSecondValue([200, 400, 500, 700]))           // 400
