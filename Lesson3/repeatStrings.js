// Implement a function that takes a string and a number times as arguments.
// The function should return the string repeated times number of times.
// If times is not a number, return undefined. If it is a negative number,
// return undefined also. If times is 0, return an empty string. You may
// ignore the possibility that times is a number that isn't an integer.

// function repeat(string, times) {
//   // …
// }

// repeat('abc', 1);       // "abc"
// repeat('abc', 2);       // "abcabc"
// repeat('abc', -1);      // undefined
// repeat('abc', 0);       // ""
// repeat('abc', 'a');     // undefined
// repeat('abc', false);   // undefined
// repeat('abc', null);    // undefined
// repeat('abc', '  ');    // undefined
// You may concatenate strings, but you may not use any other properties or
//  methods from JavaScript's built-in String class.

function repeat(string, times) {
  let result;
  if (typeof times === 'number' && times >= 0) {
    for (let num = 0; num < times; num++) {
      result = result ? result + string : string;
    }
  }

  return result;
}

console.log(repeat('abc', -1));
console.log(repeat('abc', 0));
console.log(repeat('abc', 1));
console.log(repeat('abc', 2));
console.log(repeat('abc', 4));
console.log(repeat('abc', false));
console.log(repeat('abc', null));
console.log(repeat('abc', ' '));