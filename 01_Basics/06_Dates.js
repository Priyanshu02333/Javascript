//+++++++++++++++++++ Dates in JavaScript ++++++++++++
// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());

// Create your own version of dates
const myCreatedDate = new Date("07-23-2003");
console.log(myCreatedDate.toString());

// Time Stamp

const timestamp = Date.now();
console.log(timestamp); // time in milliseconds
console.log(Math.floor(timestamp / 1000)); // conversion milliseconds into seconds

let newDate = new Date() 
console.log(newDate.getFullYear());