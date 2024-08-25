// "for in"  loop can be used for objects.

const myObj = {
    name : "rohit",
    age : 28,
    place : "khatima"
}
 
for (const key in myObj) {
    //console.log(`My ${key} is ${myObj[key]}.`)
}

// "for in"  loop for ARRAY

const arr = [1, 2, 3, 'rohit', 'virat']

for (const key in arr) {
  // console.log(key)         If we print only key then it will give 0,1,2,3,4   not like "for of" loop which gave values directly.
   // console.log(arr[key])
}



// "for in" loop for MAP

// const map = new Map()

// map.set('IN', 'India')
// map.set('US', 'United States')
// map.set('UK', 'United Kingdom')

// for (const key in map) {
//     console.log(key)
// }                       // NO output