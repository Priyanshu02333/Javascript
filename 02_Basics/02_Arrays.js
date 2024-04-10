// merge of two Array 
const marvel = ["IronMan" , "Thor" , "Captain America"];
const dc = ["Superman" , "Flash" , "Batman"];
// marvel.push(dc);
// console.log(marvel);

// Concat of two array

// const allheros = marvel.concat(dc);
// console.log(allheros); // return new array

// // Spread 
// const allnewhero = [...dc , ...marvel]
// console.log(allnewhero);

//flat
// const anotherArray = [1,2,3,[5,6,8],8,9,[10,2,[5,6]]];
// const realArray = anotherArray.flat(Infinity);
// console.log(realArray);

// Data Scraping 
console.log(Array.isArray("Priyanshu") ); // False 
console.log(Array.from("Priyanshu")); // create string to array
console.log(Array.from( { name : "Priyanshu" })); /// [] empty array

let s1 =100;
let s2 = 200;
let s3 = 300;
console.log(Array.of(s1 , s2 , s3));