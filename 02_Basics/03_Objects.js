//+++++++++++++++++ Objects ++++++++++++++++++++
// In JavaScript object are defined by two ways
// 1 => Literals : singleton not occur
// 2 => Constructor : singleton occur

//++++++  Object Literals +++++++++++
// const JsUser = {} // empty Object declaration 
// Object.create // by constructor method 

// By Literals
// Task Take a symbol define it and act it like keys in object
const mysym = Symbol("key1")
const JsUser = {
    // key : value pair exist
    // by default key is in string 
    name : "Priyanshu",
    [mysym] : "Naughty",
    age : '22',
    email : "Prinauts@goggle.com",
    islogged : false,
    LastLoginDay : ["monady" , "saturday"]
}
// Object accesing 
//console.log(JsUser.name);
//console.log(JsUser["name"]); // better appraoch to folllow
console.log(JsUser[mysym]) // Naughty

// change value 
JsUser.name = "Prinauts"
console.log(JsUser ["name"]);

// Lock deatils 
//Object.freeze(JsUser) // we cannot change details

// ******* Function ************ //

JsUser.greeting = function () {
    console.log("Hello Js user ");
}
console.log(JsUser.greeting());

JsUser.greeting2 = function () {
    console.log(`User Email address is , ${this.email}`);
}
console.log(JsUser.greeting2());

