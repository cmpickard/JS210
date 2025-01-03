// Create a function that computes the
// Greatest Common Divisor of two positive integers.

// Example

// gcd(12, 4);   // 4
// gcd(15, 10);  // 5
// gcd(9, 2);    // 1

function gcd(num1, num2) {
  if (num1 < num2) [num1, num2] = [num2, num1];
  let gcd = 1;

  for (let divisor = 2; divisor <= num2; divisor++) {
    if (num1 % divisor === 0 && num2 % divisor === 0) gcd = divisor;
  }

  return gcd;
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));

// FURTHER EXPLORATION
// Our solution works with only two numbers. Can you expand it to accept an
// array of two or more numbers instead?

function gcd2(numArr) {
  let gcd;

  for (let divisor = 1; divisor <= Math.min(...numArr); divisor++) {
    if (numArr.every((num) => num % divisor === 0)) gcd = divisor;
  }

  return gcd;
}

console.log(gcd2([5, 10, 15, 20, 100, 50, 60])); //5