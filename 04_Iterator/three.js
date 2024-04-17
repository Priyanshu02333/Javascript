// for of loops
const myArray = [ 1,2,3,4,5,6]
for (const num of myArray) {
   // console.log(num);
}

// Maps 

const map = new Map()
map.set('Branch' , "ECE")
map.set('Bran' , "CSE")
//console.log(map)
for (const item of map) {
//    console.log(item);
}

// Objects 
const myObject = {
    'name' : "osho"
    'age' : 89
}

for (const [key ,value] of myObject) {
    console.log(key , ":-" value);// objects are not iterable for of loop
}