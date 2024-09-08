// Challenge 1:
// What will the following console logs display? (they're all true and false)

// console.log("Challenge 1:")//true
// console.log(!undefined); // true 
// console.log(Boolean(NaN)); //false
// console.log(false === false);//true 
// console.log(5 === "5");//false
// console.log("Hello" == "hello");//faslse

// Challenge 2:
// What will the following console logs display? (they're all true and false)
// console.log("Challenge 2:")
// console.log(Boolean(0));//false
// console.log(Boolean("0"));//true
// console.log(Boolean(""));//false
// console.log(!null);//true
// console.log(!!"hello");//true

// // Challenge 3:
// List all the falsy values in JavaScript

// `
// false
// 0 
// ''
// ""
// null
// undefined
// NaN
// `


// ternary conditionals - as an expresion in a variable 
// const isAuthenticatedUser = false;
// const grantAccess = isAuthenticatedUser ? 1 : 0;
// //                 if (true) {1} else {0}
// console.log(grantAccess)



// const age =221;

// const ageBasedGreeter = age < 10 ? "Hey there" : age >18 ? "Greetings":age >10 ?"What's Up":"It is an interesting age "

// console.log(ageBasedGreeter)


// Challenge 1: Check if the user is allowed to add an "iPad" to its shopping cart. Write a ternary that sets the shoppingCart variable to "iPad" if the user is authenticated, and an empty string if the user isn't authenticated

const isAuthenticated = false;
let shoppingCart;

// write your code here
shoppingCart = isAuthenticated ?"ipad":'';

console.log("shoppingCart: ", shoppingCart);


// Challenge 2: Check if user is old enough. Write a ternary that sets allowedAccess to true if the age is 18 or more, or false if not
const age = 17;
let allowedAccess;

// write your code here
allowedAccess = age >= 18 ? true : false;

console.log("allowedAccess: ", allowedAccess);

