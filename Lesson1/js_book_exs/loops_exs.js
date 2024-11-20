// Modify the age.js program you wrote in the exercises for the Input/Output
// chapter. The updated code should use a for loop to display the future ages.

/*
rlSync = require("readline-sync");
age = Number(rlSync.question("How old are you?\n"));

let YEARS = [0, 10, 20, 30, 40];
console.log(`You are ${age} years old.`);
for (let i = 0; i < 5; i++ ) {
  console.log(`In ${YEARS[i]} years you will be ${age + YEARS[i]} years old`);
}
*/



// Write a function that computes and returns the factorial of a number by using a
// for loop. The factorial of a positive integer n, signified by n!, is defined as
// the product of all integers between 1 and n, inclusive:

// You may assume that the argument is always a positive integer.

/*
function factorial(int) {
  let ans = 1
  for (let i = 1; i <= int; i++) {
    ans *= i
  }
  return ans
}
*/

// console.log(factorial(1));     // => 1
// console.log(factorial(2));     // => 2
// console.log(factorial(3));     // => 6
// console.log(factorial(4));     // => 24
// console.log(factorial(5));     // => 120
// console.log(factorial(6));     // => 720
// console.log(factorial(7));     // => 5040
// console.log(factorial(8));     // => 40320


// The following code causes an infinite loop (a loop that never stops iterating).
// Why?

// let counter = 0;

// while (counter = 1) {
//   console.log(counter);
//   counter += 1;

//   if (counter > 2) {
//     break;
//   }
// }

/*
ANSWER:
Because the condition we're checking in the while loop is using the assignment
operator to assign 1 to the variable counter, which expression always returns
a truthy value and thus never results in the loop being closed out. Presumably,
the author of this code meant to use one of the equality operators, == or ===
*/


// Does the following code produce an error? Why or why not? What output does
// this code send to the console?

// for (let i = 0; i < 5;) {
//   console.log(i += 1);
// }

/*
ANS:
No. This code works and outputs the integers between 1 and 5 inclusive. It works
because although it omits an increment clause in the for loop, incrementation is
performed inside the expression passed to console.log, thus ensuring that we
don't get caught in an infinite loop
*/


// The following code uses a randomNumberBetween function to generate a number
// between its first and second arguments. It uses a while loop to try to generate
// a number greater than 2. Refactor the code so that you don't need to call
// randomNumberBetween from two different locations, lines 6 and 10. Do not change
// the arguments you pass to randomNumberBetween.

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = 0;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');


// Reimplement the factorial function from exercise 2 using recursion.
// Once again, you may assume that the argument is always a positive integer.

function factorial(int) {
  return (int === 1 ? int : int * factorial(int-1))
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320


