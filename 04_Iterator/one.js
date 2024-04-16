// *********** For Loops *********
for (let i = 0; i <=10; i++) {
    
    //console.log(`Value of i is : ${i}`);
}
// Nested Loop 

for (let i = 1; i <= 10; i++) {
   //console.log( `Outter Value is : ${i}`);
   for (let j = 1; j <= 10; j++) {
   // console.log(`${i} * ${j} = ${i*j}`);
   }
    
}

//Break and Continue Statement

for (let i = 0; i <=20; i++) {
    if(i == 7) {
        //console.log(`Number 7 Detcted`);
        break
    }
   // console.log(`value of i is : ${i}`);
    
}

for (let i = 0; i <=20; i++) {
    if(i == 7) {
        console.log(`Number 7 Detcted`);
      continue
    }
    console.log(`value of i is : ${i}`);
    
}
