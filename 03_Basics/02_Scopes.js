// Global Scope and Local Scope
let a = 300
const b = 600
if (true) {
      let a = 400
    const b= 500
    //console.log( "Inner value a : " , a );
    //console.log( "Inner value b : " , b );
}
// console.log("Outter value a : " , a);
// console.log( "Outter value b : " , b );

// Nested looping 

function one () {
    const userName = "Prinauts" 
    function two() {
        const userMail = "Abc@gmail.com"
        //console.log(`Your name is ${userName} and your email-id is ${userMail}`);
    }
   // console.log(userMail);
    two();
}
one();
// nesting in condition 
if (true) {
    let name = "Priyanshu Nautiyal "
    if(true) {
        let address = "Rudraprayag"
        //console.log(name);
    }
}

// ********* Intresting Concept *************//
addOne(12)
function addOne( num ) {
    return num+1
}

addtwo(5)
const addtwo = function (num) {
    return num +2
}
