// Write a password guessing program that tracks how many times the user enters
// the wrong password. If the user enters the password wrong three times,
// log 'You have been denied access.' and terminate the program.
// If the password is correct, log 'You have successfully logged in.'
// and end the program.

// Example
// // password = 'password'

// // The program displays a dialog that asks the user to enter a password.
// // If the user enters the wrong password, keep asking up to three times. After
// // three failures, log the access denied.

// What is the password: 123
// What is the password: opensesame
// What is the password: letmein

// // message on the console
// You have been denied access.

// // If the user enters the right password, report login success.
// What is the password: password

// // message on the console
// You have successfully logged in.

const PASSWORD = 'secret';
let guesses = 0;
let rlSync = require('readline-sync')
let message = "You have been denied access";

while (guesses < 3) {
  guess = rlSync.question("What is the password:\n");
  if (guess === PASSWORD) {
    message = "You have been successfully logged in."
    break;
  }
  guesses += 1;
}

console.log(message)