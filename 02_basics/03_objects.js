// when we declare object as literals then singleton is not formed.
// when we declare it by constructor then singleton is formed.

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name : "Rohit",
    "full name" : "Rohit Joshi",
    [mySym] : "mykey1",
    age : 25,
    location : "khatima",
    email : "rohit@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)       // not written like this

// console.log(typeof JsUser[mySym])      // written like this

// JsUser.email = "rohit@gmail.com"       // to change value

// // Object.freeze(JsUser)            // to freeze the object , if you don't want to change anything

// JsUser.email = "rohit@facebook.com"       // now it will not change

// console.log(JsUser)

JsUser.greeting = function () {
    console.log("Hello JS user")
}
console.log(JsUser.greeting())         // Hello JS user

JsUser.greeingtwo = function () {
    console.log(`Hello JS user, ${this.name}`)      // using 'this' here refers to the object that we have created.
}
console.log(JsUser.greeingtwo())      // Hello JS user, Rohit