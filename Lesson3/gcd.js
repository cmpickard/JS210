// Create a function that computes the
// Greatest Common Divisor of two positive integers.

// Example

// gcd(12, 4);   // 4
// gcd(15, 10);  // 5
// gcd(9, 2);    // 1

function gcd(num1, num2) {
  currNum = Math.min(num1, num2)
  while(currNum !== 0) {
    if (num1 % currNum === 0 && num2 % currNum === 0) return currNum;
    currNum -= 1;
  }
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));

// FURTHER EXPLORATION
// Our solution works with only two numbers. Can you expand it to accept an
// array of two or more numbers instead?

function gcd2(numArr) {
  numArr.sort((a, b) => a - b);
  let greatestCommonDenom;

  for (let index = 1; index < numArr.length - 1; index++) {
    greatestCommonDenom = gcd(numArr[0], numArr[index]);
  }

  return greatestCommonDenom;
}

console.log(gcd2([5, 10, 15, 20, 100, 50, 60])) //5