"use strict" // treat all my js code into newer version
// alert(3 +3) // give error  because we are uisng nodejs not browser .
/*  
Tips --> 
@ code must be readable and future proof
*/

// DATA TYPES IN JS (Preemetive data types)
let name1 = "Priyanshu Nautiyal"; // string 
let age = 21; // integer
let isLogged = false; // boolean
let temperature = null;
//null => It is astand alone value
// undefined => not assigned value
// symbol => unique
//type of
let nulltype = console.log(typeof null); // it is object
console.table([ name1, age , isLogged ,temperature ]);