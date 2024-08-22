//    {}   curley braces in programming language are called scopes. (Inside functions, inside if/elese statements,etc.)
//    In objects {} is used to declare objects.

var c = 300;

if (true) {                       // a,b,c are defined inside the scopes so there values should not come outside.
    let a = 10;                   // Everything written inside this if statement {} is "Block Scope".
    const b = 20;                 // Things written outside is in "Global Scope". 
    var c = 30;                   // Values written in Global scope can be used in Block scope, but those written in block scope should not come out.
}

// console.log(a)        //  a is not defined, which is right.
// console.log(b)        //  b is not defined, which is right.
//console.log(c)          //  30 , but we have defined above that var c = 300, but output is 30 which should not come out, that is why we don't use var.




// let d = 40
// if (true) {
//     let a = 30;
//     let d = 20
//     console.log("Inner : " , d)               // 20
// }
// console.log(d)                            //  40         



// Nested Scopes

function one() {                         // Here function one is bigger function and two is small. So, for func two the func one act as global func. Two can access the values inside func one
    const username = "rohit"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    //console.log(website);         // website is not defined.

    two()                // This will give rohit , taking value of username from func one, but will only print value when func one is also executed.
}
//one()



// Understanding through if conditions :

if (true) {
    const username = "rohit"
    if (username === "rohit") {
        const website = " facebook"
        console.log(username + website );
    }
    //console.log(website)           // website is not defined outside scope.
}
//console.log(username)                // username is also not defined.



// if (true) {
//     const username = "rohit"
//     if (username === "rohit") {
//         const website = " facebook"
//         console.log(username + website );
//     }
// }                           //if only this much code is written then will give result ---  rohit facebook



// *************************** Interesting Concept "Hoisting" (just a little touch for now)**********************************

console.log(addOne(5))          // output = 6 , can access like this.

function addOne (num){
    return num  + 1
}

//////////////////////////////////////////

console.log(addTwo(5))        // will give an error. Cannot access "addTwo" function before initialization.

const addTwo = function(num){            // We can define a function like this inside a variable. 
    return num + 2
}
