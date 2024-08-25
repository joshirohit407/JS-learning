//const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.map ( (num) => num + 10 )
// console.log(newNum)           // will add 10 to each value

// const newNum = myNum.forEach ( (num) => { 
//    console.log  (num + 10)
// } )                                       // using "for each" method


//////// CHANING ////////

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNum.map( (num) => num*10 )             // first this will happen
                    .map( (num) => num + 1 )            // the num value from above array will come here and then 1 will be added0
                    .filter( (num) => num > 50)         // after adding one , values more than 50 will be selected.

//console.log(newNum);

///////////////////////////////////////////////////////////////////

// REDUCE method :

const arr = [1, 2, 3]
const newArr = arr.reduce( (a,b) => {
    //console.log(`a: ${a} and b: ${b}`)         // To see step by step what is happening.
    return a + b
}, 0 )
//console.log(newArr)


/////////////

const shoppingCart = [
    {
        itemName : "js course", 
        price : 2999
    },
    {
        itemName : "py course", 
        price : 3999
    },
    {
        itemName : "data science course", 
        price : 4999
    },
    {
        itemName : "mobile dev course", 
        price : 12999
    },
]

const totalPrice = shoppingCart.reduce ( (acc, item) => acc + item.price, 0 )
console.log(totalPrice)
