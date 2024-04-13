// // *************** Function in javascript *************** 
// // function declaration 
// function addSum(num1 , num2) {
//     let sum = num1 + num2
//     console.log("Result : " ,sum);

// }
// addSum(2 ,3);

// // Show that User loggin or not 
// function UserLoggIn (username = "Nautiyal") {
//     if(!username) {
//         console.log("Please enter your username");
//         return 
//     }
//     return `  ${username} just logged in`;
// }
// console.log(UserLoggIn("Priyanshu"));
// console.log(UserLoggIn());
// console.log(UserLoggIn(""));


// Rust operator in Javascript 

function CalculateCartPrices( val1 ,val2 , ...num1) {
    return num1;
    console.log(val1);
    console.log(val2);
}
console.log(CalculateCartPrices(200 , 7889 , 234 , 500 , 456  ));

// Passing Object in Function

const user =  {
userName : "Priyanshu Nautiyal",
price : "1999",
}

function Customer (anyObject) {
    console.log(`Username is ${anyObject.userName} and your cart price is ${anyObject.price}`);
}
Customer(user);

// Array in function

const myArray = [100 , 123 , 454 , 500]
function returnSecondValue (anyArray) {
    return anyArray[1]
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([100 , 123 , 454 , 500]));