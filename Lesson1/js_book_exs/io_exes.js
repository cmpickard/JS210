// Write a dynamic greeter program named greeter.js. The program should ask for
// your name, then output Hello, {name}! where {name} is the name you entered:

rlSync = require("readline-sync");
ans = rlSync.question("What is your name?\n");
console.log(`Hello, ${ans}!`);


// Modify the greeter.js program to ask for the user's first and last names
// separately, then greet the user with their full name.

first_name = rlSync.question("What is your first name?\n");
last_name = rlSync.question("What is your last name?\n");
console.log(`Hello, ${first_name} ${last_name}!`);


// Modify the age.js program you wrote in the exercises for the Variables
// chapter. The updated code should ask the user to enter their age instead of
// hard-coding the age in the program. Here's an example run:

age = Number(rlSync.question("How old are you?\n"));
console.log(`You are ${age} years old`);
console.log(`In 10 years, you will be ${age + 10} years old`);
console.log(`In 20 years, you will be ${age + 20} years old`);
console.log(`In 30 years, you will be ${age + 30} years old`);
console.log(`In 40 years, you will be ${age + 40} years old`);


// How old are you? 22
// You are 22 years old.
// In 10 years, you will be 32 years old.
// In 20 years, you will be 42 years old.
// In 30 years, you will be 52 years old.
// In 40 years, you will be 62 years old.