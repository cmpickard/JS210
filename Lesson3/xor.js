// For boolean values, the || operator returns true if either or both of its
// operands are true, false if both operands are false. The && operator, on
// the other hand, returns true if both of its operands are true, and false if
// either operand is false. This works great until you need only one of two
// conditions to be true, the so-called "exclusive or", or XOR.

// Write a function named isXor that takes two arguments, and returns true if
// exactly one argument is truthy, false otherwise. Your function should work
// with the boolean values of true and false, but also any JavaScript values
// based on their "truthiness".

// Revisit this lesson for a refresher on how JavaScript does logical operations
// of || and &&.

// Example
// isXor(false, true);     // true
// isXor(true, false);     // true
// isXor(false, false);    // false
// isXor(true, true);      // false


// isXor(false, 3);        // true
// isXor('a', undefined);  // true
// isXor(null, '');        // false
// isXor('2', 23);         // false

function isXor(val1, val2) {
  return !(!!val1 === !!val2);
}

console.log(isXor(false, true));
console.log(isXor(true, false));
console.log(isXor(false, false));
console.log(isXor(true, true));
console.log(isXor(false, 3));
console.log(isXor('a', undefined));
console.log(isXor(null, ''));
console.log(isXor('2', 23));