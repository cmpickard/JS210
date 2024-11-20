// What does this code log to the console? Does executing the foo function affect
// the output? Why or why not?

// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();
// console.log(bar);

/* 2
The variable bar has global scope and so is available inside the foo() call
On the third line. Since it's in scope on that line, it can be reassigned.
So it's reassigned to 2 on third line and that remains the value when it is
output to console on the final line
*/


// In the exercises for the previous chapter, you wrote a dynamic greeter program
// named greeter.js. Add a function to this program that solicits the user's first
// and last names in separate invocations; the function should return the
// appropriate name as a string. Use the return values to greet the user with
// their full name.
rlSync = require("readline-sync");

function getName() {
  return (getFirstName() + ' ' + getLastName())
}

function getFirstName() {
  return rlSync.question("First name?\n");
}

function getLastName() {
  return rlSync.question("Last name?\n");
}

// full_name = getName()
// console.log(`hello, ${full_name}!`)



// Write a program that uses a multiply function to multiply two numbers and
// returns the result. Ask the user to enter the two numbers, then output the
// numbers and result as a simple equation.

function getFirstNum() {
  return rlSync.question("Num 1?\n");
}

function getSecondNum() {
  return rlSync.question("Num 2?\n");
}

function multiply() {
  return getFirstNum() * getSecondNum();
}

// console.log(multiply());



// What does the following code log to the console?

// function scream(words) {
//   words = words + '!!!!';
//   return;
//   console.log(words);
// }

// scream('Yipeee');

/* nothing */



// What does the following code log to the console?

// function scream(words) {
//   return words + '!!!!';
// }

// scream('Yipeee');

/* Yipeee!!!! */



// In the code shown below,

// function multiplyNumbers(num1, num2, num3) {
//   let result = num1 * num2 * num3;
//   return result;
// }
// let product = multiplyNumbers(2, 3, 4);

// identify the following items:

// the function arguments:  2, 3, 4
// the function body:
                              //   let result = num1 * num2 * num3;
                              //   return result;
// the function declaration:
                              // function multiplyNumbers(num1, num2, num3) {
                              //   let result = num1 * num2 * num3;
                              //   return result;
                              // }
// the function invocation: multiplyNumbers(2, 3, 4)
// the function name: multiplyNumbers
// the function parameters: num1, num2, num3
// the function return value: 24
// the names of all variables in this program: 
                    // product, num1, num2, num3, result, multipyNumbers




// Without running the following code, what do you think it will output?

// function foo(bar, qux) {
//   console.log(bar);
//   console.log(qux);
// }

// foo('Hello');
/* first 'Hello' then 'undefined' */


// Without running the following code, what do you think it will output?

// function foo(bar, qux) {
//   console.log(bar);
//   console.log(qux);
// }

// foo(42, 3.1415, 2.718);
/* first '42' then '3.1415' */



// Identify all of the variables named on each line of the following code.
// You may assume that question is the name of a built-in function in JavaScript
// (it is not, so this code won't work as written).

// function multiply(left, right) {
//   let product = left * right;
//   return product;
// }

// function getNumber(prompt) {
//   return parseFloat(question(prompt));
// }

// let left = getNumber('Enter the first number: ');
// let right = getNumber('Enter the second number: ');
// console.log(`${left} * ${right} = ${multiply(left, right)}`);

/* 
  multiply, left, right, 
  product, left, right,
  product,
  getNumber, prompt,
  parseFloat, question, prompt
  left, getNumber
  right, getNumber
  console, left, right, multiply
*/


// Using the code from Exercise 9, classify each variable name as either global
// or local. For our purposes here, you may assume that the code from Exercise
// 9 is the entire program.

/*
  global vars: left, right, multiply, getNumber, parseFloat, console
  local vars: left, right, product, prompt
*/

// Using the code from Exercise 9, are the left and right variables on lines
// 1 and 2 the same as the left and right variables on lines 10-12?
// Explain your reasoning.

/* No.
The variables on lines 1 and 2 are parameters for the multiply function. They
are therefore local variables that are scoped only within that function.
In contrast, the left and right variables defined on lines 10-12 are global
variables that are globally scoped.
One somewhat confusing thing about this example is that within the function
definitions, the global left and global right variables are inaccessible b/c
they are being shadowed by the local vars of the same name.
*/ ''