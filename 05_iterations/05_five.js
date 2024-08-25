const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {       // callback funtion
//     console.log(item)
// } )

//         OR

// coding.forEach ( (item) => {
//     console.log(item)
// })

// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe)         // Can also call function we have defined before.

// coding.forEach( (item, index, arr) => {         // Not only item name, but we can also print index and arr in this function.
//     console.log(item, index, arr)
// })


const myCoding = [                      // used to collect date from an array containing many objects in it, We can use "foreach" method.
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(`The language is ${item.languageName} and file name is ${item.languageFileName}`)
})

