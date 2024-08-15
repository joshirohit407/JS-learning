const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);             // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]   

// console.log(marvel_heros[3])           // [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1])        // flash


// let a = marvel_heros.concat(dc_heros)        // concat gives a new array.
// console.log(a)              // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// But to combine two or more arrays mostly "spread operator" is used which is given below -

// let b = [...marvel_heros, ...dc_heros]       // spread operator for combining two or more arrays
// console.log(b);


// const new_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const usable_new_array = new_Array.flat(Infinity)
// console.log(usable_new_array)
// flat - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.


console.log(Array.isArray("Rohit"));            // false

console.log(Array.from("Rohit"));              //  [ 'R', 'o', 'h', 'i', 't' ]

console.log(Array.from({name : "Rohit"}));       // []  will give empty array..  not able to form array, we have to tell whether array is of keys or values.

let a = 100
let b = 200
let c = 300
console.log(Array.of(a, b, c))     // [100, 200, 300]     // Returns a new array from a set of elements. 