// ************* objects methods ***************//
// const tinder = new Object ()
//  console.log(tinder); // Empty object {}
//  tinder.name = "Prinauts",
//  tinder.email = "Prinats@123gmail.com",
//  tinder.isLogged = false;
// console.log(tinder);

// Loop Nesting 
// const regularName = {
//     email : "xyz@gmail.com",
//     fullname : {
//         userfullname : {
//             firstname : "Priyanshu",
//             lastname : "Nautiyal",
//         }
//     }
// }

// console.log(regularName.fullname.userfullname.firstname);

// // Merging two objects
// const obj1 = { 1 : "a" , 2 : "b"}
// const obj2 = { 3 : "a" ,  4 : "b"}
// //const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 ,obj2)
// console.log(obj3);
// // Spread kardo used more than 90%
// const obj4 = {...obj1 , ...obj2}
// console.log(obj3); 

// Methods
//  // TO return individual keys and values
//  console.log(tinder);
//  console.log(Object.keys(tinder));
//  console.log(Object.values(tinder));

 // De-Structure of Objects

 const course = {
courseName : "Prinauts Industry",
price : "20999",
courseInstructor : "Priyanshu Nautiyal",
 }
 const {courseInstructor } = course
 console.log(courseInstructor);
 //destructue
 const {courseInstructor : Instructor } = course
 console.log(Instructor);

 //******** APIS AND JSON *************** */
 {
    "name" : "priyanshu",
    "coursename" : "Prianuts ",
    "price" : "Free", 
 }

 [
    {},
    {},
    {},
 ]
 // JSON is javascript obect notation.