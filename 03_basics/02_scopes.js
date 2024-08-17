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
console.log(c)          //  30 , but we have defined above that var c = 300, but output is 30 which should not come out, that is why we don't use var.




// let d = 40
// if (true) {
//     let a = 30;
//     let d = 20
//     console.log("Inner : " , d)               // 20
// }
// console.log(d)                            //  40         



// Nested Scopes

function one() {
    const username = "rohit"

    function two() {
        const website = "youtube"
        console.log(username)
    }
//console.log(website);         // website is not defined.

two()
}
one()