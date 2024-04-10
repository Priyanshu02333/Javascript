// ++++++++++++++ Arrays ++++++++++++++//
/*
=> Array in javaScript can store mutliple datatypes in single array
=> JavaScript array copy operation create shallow copy
=> shallows_copies : it share the same reference (point to same underlying values)
*/

// Arrays Declaration 
//const myArray = [1,2,3,4,5];
// const myFriends = ["Arvind" , "Kushagra"];
// const myArray2 = new Array(1,2,3,4,5,6);
// console.log(myArray2);

// Methods in array 

// myArray.push(8);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);

//const newArray = myArray.join() // string type return

// Slice and Splice

const myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(myArray);

// Slice Concept => It select the particular range for array
console.log("A ", myArray);
const myn1 = myArray.slice(0 , 5);
console.log(myn1);

// Splice Concept => It select the particular range for array and ommit rest of the array 
console.log("B " , myArray);
const myn2 = myArray.splice(0 , 5);
console.log("c " , myArray);
console.log(myn2);