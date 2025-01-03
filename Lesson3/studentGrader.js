// Write a program to determine a student’s grade based on the average of three
// scores you get from the user. Use these rules to compute the grade:

// If the average score is greater than or equal to 90 then the grade is 'A'
// If the average score is greater than or equal to 70 and less than 90
// then the grade is 'B'
// If the average score is greater than or equal to 50 and less than 70
// then the grade is 'C'
// If the average score is less than 50 then the grade is 'F'
// You may assume that all input values are valid positive integers.

// Example
// // prompts to get the 3 scores
// Enter score 1: 90
// Enter score 2: 50
// Enter score 3: 78

// // log to the console
// Based on the average of your 3 scores your letter grade is "B".

const rlsync = require('readline-sync');
let grade1 = Number(rlsync.question('Enter score 1:\n'));
let grade2 = Number(rlsync.question('Enter score 2:\n'));
let grade3 = Number(rlsync.question('Enter score 3:\n'));
let letter;

switch (Math.trunc((grade1 + grade2 + grade3) / 30)) {
  case 10:
  case 9:
    letter = 'A';
    break;
  case 8:
    letter = 'B';
    break;
  case 7:
    letter = 'C';
    break;
  case 6:
    letter = 'D';
    break;
  default:
    letter = 'F';
}

console.log(`Based on the avg of your scores, your letter grade is ${letter}.`);