// For in loop
// Objects 
const myObject = {
    //'name' : "osho"
    //'age' : 89
}

for (const [key ,value] in myObject) {
   // console.log(key , ":-" value);// objects are not iterable for of loop
}

const myarray = [1,2,3,4,5,6,7]
for (const key in myarray) {
    console.log(key);
        
    }
