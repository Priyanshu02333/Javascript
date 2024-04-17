// does foreach return value by callback
// const Mycoding = ["JAvascript" , "Java" ,"CPP" , "Python"]
// const newCoding = Mycoding.forEach( ( num) => console.log(num)) 
// console.log(newCoding); // undefined 

// Filter 

//const MyNum =[ 1,2,3,4,5,6,7,8,9,10]
///const newNum = MyNum.filter( (num) => num > 5 ) 
//console.log(newNum); // returns value

//ForEach
// const MyNum =[ 1,2,3,4,5,6,7,8,9,10]
// const mynew = []
//  MyNum.forEach( (num) => {
//     if( num > 3 ) {
//         mynew.push(num)
//     }
// })
// console.log(mynew);

// Database se value aayi hai 

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

let mybook = books.filter( (bk) => bk.genre === "Fiction" && bk.edition === 2004)
console.log(mybook);