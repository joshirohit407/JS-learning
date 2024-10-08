// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2 !=1);

console.log(null > 0)  // false
console.log(null== 0)   // false
console.log(null >= 0)  // true

// The reason is that an equality check == and comparisons >,  <,  >=,  <=  work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why 3rd one is true and 1st one is false.

console.log("2" === 2)    //  false

console.log(null == undefined)      // true
console.log(null === undefined)     // false
