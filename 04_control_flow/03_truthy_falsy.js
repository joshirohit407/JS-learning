// Truthy value

const userEmail = "rohit@google.com"

if (userEmail) {                              // Here in parentheses we have not compared any value, we have assumed that the string value in Const userEmail is the true value. This is called Truthy Value.
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

// Falsy values --
// false, 0, -0, BigInt 0n, "", null, undefined, Nan (not a number)

// Truthy values --
// "0", 'false', "false", " " (space inside), ' ', [] empty array, {} empty object, function(){}

const emptyArray = []        // How to check the array is empty.

if (emptyArray.length === 0){
    console.log("Empty Array")
}


const emptyObj = {}          // How to check the object is empty.

if (Object.keys(emptyObj).length === 0) {
    console.log("Obj is empty")
}

// false == 0         false == ''          false == ""         0 == ''
//   true               true                  true               true


// Nullish Coalescing Operator (??) : null / undefined

let val1;
// val1 = 5 ?? 10              // output : 5
// val1 = null ?? 10           // output : 10
// val1 = undefined ?? 15      // output : 15
// val1 = null ?? 10 ?? 15     // output : 10

console.log(val1)
// If we get values with null or undefined we will get value in console.log ,,, if there are 3 values like in line 41, then first defined value will be output.


// Ternary Operator

// condition ? true : false

const price = 100
price <= 80 ? console.log("less than 80") : console.log("more than 80")        // output : more than 80