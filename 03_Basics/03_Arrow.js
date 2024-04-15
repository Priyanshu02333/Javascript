// This fucnction in Js 
// It tells Us about current context and values 

// const user = {
//     usernaame : "Priyanshu",
//     price : 999,
//     welcome : function(){
//         //console.log(`${this.usernaame} , welcome to website` );
//         //console.log(this);
//     }
//  }

// //  user.welcome();
// // user.usernaame = "Sam",
// //  user.welcome(); 
// //  console.log(this); // { } empty

// function one() {
//     username = "Priyanshu"
//    // console.log(this.usernaame); // gives undefined

// }
// one()

// const two = function () {
//     username = "Prinauts";
// //    console.log(this.usernaame); // gives undefined

// }
// two();

// ********* Arrow => Functon ******************

// const chai = () => {
//     username = "Sakashi",
//     //console.log(this.usernaame); // gives undefined 
//     //console.log(this); // {}
// }
//  chai()

 // Explicit and Implicit return  arrow function 
 
//  const addTwo = (num1 , num2) => {
//     // Explicit return 
//     return num1 + num2
//  }
//  console.log(addTwo(3 , 4));

//  const addtwo = (num1 , num2) => (num1 + num2) // 11
//  console.log(addtwo(5 , 6)); 

 //Defining object in arrow function

 const addtwo = (num1 , num2) => ({ username : "priyanshu"})
 console.log(addtwo(8 , 5));