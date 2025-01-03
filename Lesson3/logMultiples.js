// Write a function logMultiples that takes one argument number.
// It should log all multiples of the argument between 0 and 100
// (inclusive) that are also odd numbers. Log the values in descending order.

// You may assume that number is an integer between 0 and 100.

// Example
// logMultiples(17);
// // output (5x, 3x and 1x)
// 85
// 51
// 17

// logMultiples(21);
// // output (3x and 1x)
// 63
// 21

const logMultiples = function logMultiples(num) {
  let largestMultiple = -1;
  for (let currNum = 100; currNum >= num; currNum--) {
    if (currNum % num === 0) {
      largestMultiple = currNum;
      break;
    }
  }

  for (let currNum = largestMultiple; currNum >= num; currNum -= num) {
    if (currNum % 2 === 1) {
      console.log(currNum);
    }
  }
};

logMultiples(17);
logMultiples(21);

// FURTHER EXPLORATION
// Determine the number's largest multiple that is less than 100, then start the
// loop with that multiple. With each iteration of the loop, you can decrement
// the number by the argument; when the result is negative, you can quit.