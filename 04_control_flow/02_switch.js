// switch (key) {                  // This is the switch statement
//     case value:
        
//         break;

//     default:
//         break;
// }


// const month = 3

// switch (month) {
//     case 1: 
//         console.log("Jan")
//         break;
//     case 2: 
//         console.log("Feb")
//         break;
//     case 3: 
//         console.log("March")
//         break;
//     case 4: 
//         console.log("April")
//         break;

//     default:
//         console.log("Default value match")
//         break;
// }                                  // output : March
// we have to use break otherwise it will execute all the code after finding the match value except default.

const month = "April"
switch (month) {
    case "Jan": 
        console.log("Jan")
        break;
    case "Feb": 
        console.log("Feb")
        break;
    case "March": 
        console.log("March")
        break;
    case "April": 
        console.log("April")
        break;

    default:
        console.log("Default value match")
        break;
}                                  // output : April

