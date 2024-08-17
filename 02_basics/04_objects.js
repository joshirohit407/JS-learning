// const tinderUser = new Object()       // This is how we create singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Manish"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


// const regularUser = {
//     email : "some@gmail.com",
//     fullname : { 
//         userfullname : {
//             firstname : "Rohit",
//             lastname : "Joshi"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname);      // Rohit


// to combine two or more objects --- we use Object.assign(target, source)
const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};
const obj3 = {5 : "a", 6 : "b"};

//const obj4 = Object.assign(obj1, obj2, obj3)    // can also do like this 

// const obj4 = Object.assign({}, obj1, obj2, obj3)  // This is more accurate.

// const obj4 = {...obj1, ...obj2, ...obj3}          // We will use this "spread Operator" inside curly braces to make it object.
// console.log(obj4);


// const users = [
//     {
//         id : 1,
//         name: "aman"
//     },
//     {
//         id : 2,
//         name: "rohit"
//     },
//     {
//         id : 2,
//         name: "manish"
//     }
// ]
// console.log(users[1].name)        // rohit

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))          // [ 'id', 'name', 'isLoggedIn' ]     we will get all keys inside an array.

// console.log(Object.values(tinderUser))        // [ '123abc', 'Manish', false ]      we will get all the values inside an array.

// console.log(Object.entries(tinderUser))       // [ [ 'id', '123abc' ], [ 'name', 'Manish' ], [ 'isLoggedIn', false ] ]
// // we will get an arrays of keys and values inside a main array.

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))       // true       // hasOwnProperty is used to find the keys whether it exist or not




// Destructuring of OBJECT

const course = {
    coursename : "JS learning",
    price : 999,
    courseInstructor : "rohit"
}

console.log(course["courseInstructor"])        // rohit
// If we has to print this thing again and again we can use another method 

const {courseInstructor} = course
console.log(courseInstructor)             // rohit

const {courseInstructor : Instructor} = course;    // we can also name it according to our needs in short form
console.log(Instructor)                   // rohit


// we get API in json format usually --

// {                                          // basic form of json -- an object without any name
//     "name" : "rohit",                      // can use all properties of object and array here.
//     "age" : 25,
//     "address" : "khatima"
// }

// // OR  can get data in form of array inside which there are objects.

// [
//     {},
//     {},
//     {}
// ]