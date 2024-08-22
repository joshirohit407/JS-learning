// Immediately Invoked Function Expressions (IIFE)
// --- functions that execute immediately
// many times there are problems due to the pollution of the global scope. So, to get rid of the disturbance from global scope variables or any other things we use IIFE.


(function one () {             // Named IIFE : here name of function is defined so it is called Named IIFE.
    console.log(`DB connected`)
})
() ;          // output :  DB connected        // Remember to end IIFE functions with ';'

// () ()   --- In first parentheses there is definition of function and the second parentheses if for execution call.


( () => {                     // Unnamed IIFE
    console.log(`DB connected Two`)
}) () ;          // output : DB connected Two              


( (name) => {                 // Unnamed IIFE
    console.log(`welcome user ${name}`)
}) ("Rohit") ;           // output : welcome user Rohit 

