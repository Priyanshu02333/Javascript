// Learning of Variables in JavaScript
/*
for declaration of variable in JavaScript is of two types :
1--> By using const (it cannot be Changed)
2--> By using let
3--> By using var NOTE but note one thing in using var thier is issue in 
     block scope and functional scope so prefer not to use var rather use 
     let to declare a variable in Javasript.
*/
const accountID = 2100341;
let accountName = "Prinauts";
var accountCity = "Rudraprayag";
accountState = "UK";
let accountNumber;
// accountID = 2100541; we cammot change const value it will give error
console.log(accountID);
console.table([accountID ,accountName ,accountCity ,accountState,accountNumber]);