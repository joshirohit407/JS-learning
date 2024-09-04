// const score = 400;
// console.log(score)     // 400

// const balance = new Number(100);
// console.log(balance)        // [Number: 100]

// console.log(balance.toString());             // 100
// console.log(balance.toString().length);      // 3
// console.log(balance.toFixed(2));             // 100.00

// const otherNumber = 123.6986    // 23.7       // 123.6986 == 124
// console.log(otherNumber.toPrecision(3))

// const number = 1000000
// console.log(number.toLocaleString())              // 1,000,000
// console.log(number.toLocaleString('en-IN'))       // 10,00,000


// ********************************* MATH ************************************************** //

// console.log(Math);          // will give Math functions in browser
// console.log(Math.abs(-4));  // gives absolutes value  4
// console.log(Math.round(4.6))               // 5
// console.log(Math.ceil(4.2))                // 5
// console.log(Math.floor(4.9))               // 4
// console.log(Math.min(4, 6, 7, 8))          // 4
// console.log(Math.max(4, 6, 7, 8))          // 8


console.log(Math.random());                 // This gives random values between 0 and 1

console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)       //   (Important)


// Function to get a random number between a speacific range

function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const num = getRandomNumber(1, 100)
console.log(num)

