// Reduce() method
const myArray = [ 1 , 2, 3]
const sum = myArray.reduce( function(acc , num)  {
    console.log(`acc : ${acc} sum : ${num}`);
    return acc + num 
} , 10)
console.log(sum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const TotalPriceToPay = shoppingCart.reduce ( (acc , pay) => acc + pay.price , 0)
console.log( ` total price is : ${TotalPriceToPay}`);