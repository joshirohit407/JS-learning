// "for of" Loop :

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num)
}


const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`Each character is ${greet}`)
}


// Maps   (a type of datatype in JavaScript)

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()

map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
//map.set('IN', 'India')             // This will not print again because map holds unique values.

//console.log(map)

// for of loop in map
for (const [key, value] of map) {
    //console.log(key, ':-' ,value )
}


// for of loop on Object     : object is not iterable through "for of" loop.

// const myObj = {
//     name : "rohit",
//     age : 28,
//     place : "khatima"
// }
// for (const [key, value] of myObj) {
//     console.log(key, ':-' ,value )
// }