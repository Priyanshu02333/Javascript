//*********  Immediately Invoked Function Expreesion *****************/
/*
Reason to use IIFE
1=> sometimes we need to execute immediately like in case of databasee .
2=> Due to glabal scope it may occur pollution so to avoid such we use IIFE
*/
// ()()

// Named IIFE

(function chai(name) {
    console.log( `Database connected ${name}`);
}) ("Prinauts"); // it tells IIFE to stop the function execution

// UNNAMED IIFE or arrow function
( (name) => {
    console.log(`Database is connected ${name}`);
}) ("Priyanshu ")