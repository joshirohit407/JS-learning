// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach ( (item) => {
//     console.log(item)       // output : this will print values
//     return item             
// } )

//console.log(values)       // output : undefined
// The "for each" loop does not return any values.



const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.filter ( (num) => {
//     return num > 4
// } )
// We can also write the above funciton in single line.
const newNum = myNum.filter ( (num) => num > 4)
//console.log(newNum)         // output : [5, 6, 7, 8, 9, 10]


// We can use "for each" but it will be a bit long

// const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newScore = []

// score.forEach ((value) => {
//     if (value > 4) {
//         newScore.push(value)
//     }
// })
// console.log(newScore)                // // output : [5, 6, 7, 8, 9, 10]




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // produce the list of the books that have genere history

  let userBooks = books.filter ( (bk) => bk.genre === 'History' )
  
  // produce the list of the books that were published after year 1995
  userBooks = books.filter ( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'} )

  console.log(userBooks)