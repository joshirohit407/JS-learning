const name = "Rohit"
const age = 25

// console.log(name + age + " value")    // Rohit25 value
// Don't use this method, this is outdated.

// console.log(`Hello my name is ${name} and my age is ${age}`);    // String interpolation

// //String can also be defined as --

// const gameName = new String("rohitrj")
// console.log(gameName[0]);           // r

// console.log(gameName.length)         // 7
// console.log(gameName.toUpperCase())  // ROHITRJ     
// console.log(gameName.charAt(2))      // h
// console.log(gameName.indexOf('h'))      // 2

// const myName = "Manish"
// const newString = myName.substring(0,4);   // in substring it includes the first defined entry but not the last one.
// console.log(newString)     // Mani

// const otherString = myName.slice(-5,4)
// console.log(otherString)    // ani

// const newName = "   Rohit "
// console.log(newName);
// console.log(newName.trim());     // extra spaces will be removed.

// const url = "https://rohit.com/rohit%20joshi"
// console.log(url.replace('%20', '-'))


// const item = "Mohit"
// console.log(item.replace('M', 'R'))   // Rohit

// console.log(url.includes('joshi'))    // true


const details = "Rohit-kumar-joshi-khatima"
console.log(details.split('-'))   // will give me an array separating everything

