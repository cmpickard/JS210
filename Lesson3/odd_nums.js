// Write a function that takes a positive integer as an argument,
// and logs all the odd numbers from 1 to the passed in number (inclusive).
// All numbers should be logged on separate lines.

// Example
// logOddNumbers(19);

// // output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19

function logOddNumbers(max) {
  for (let currNum = 1; currNum <= max; currNum += 2) {
    console.log(currNum);
  }
}
logOddNumbers(20);