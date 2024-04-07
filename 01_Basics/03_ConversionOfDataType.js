//Conversion in Number
let score = "3abc" //string 
let numberscore = Number(score); // number
console.table([ typeof score , typeof numberscore , numberscore]);
/*
"33" => 33 number
"33abc" => Nan (Not a number);
true => 1; false => 0
*/ 
//Boolean Convergion 
let isLogged = 1;
let Inboolean = Boolean(isLogged);
console.table([ typeof isLogged , typeof Inboolean , Inboolean]);
/*
1 => true
0 => false
"" => false
"Priyanshu" => true
*/
//String Conversion
let a = 33; // number
let aInString = String(a); // number
console.table([ typeof a , typeof aInString , aInString]);