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

let rlSync = require('readline-sync')
let score1 = rlSync.question('Enter score 1:\n');
let score2 = rlSync.question('Enter score 2:\n');
let score3 = rlSync.question('Enter score 3:\n');
avg = (Number(score1) + Number(score2) + Number(score3)) / 3;
grade = 'F';
if (avg >= 90) {
  grade = 'A';
} else if (avg >= 70) {
  grade = 'B';
} else if (avg >= 50) {
  grade = 'C'
}

console.log(`Based on the avg of your 3 scores your letter grade is ${grade}`);