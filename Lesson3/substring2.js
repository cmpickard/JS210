// This practice problem is similar to the previous one. This time though, both
// arguments are indices of the provided string. The following rules apply:

// If both start and end are positive integers, start is less than end, and both
// are within the boundary of the string, return the substring from the start
// index (inclusive), to the end index (NOT inclusive).
// If the value of start is greater than end, swap the values of the two, then
// return the substring as described above.
// If start is equal to end, return an empty string.
// If end is omitted, the end variable inside the function is undefined. Return
// the substring starting at position start up through (and including) the end
// of the string.
// If either start or end is less than 0 or NaN, treat it as 0.
// If either start or end is greater than the length of the string, treat it as
// equal to the string length.

// Examples
// function substring(string, start, end) {
//   // …
// }

// let string = 'hello world';

// substring(string, 2, 4);    // "ll"
// substring(string, 4, 2);    // "ll"
// substring(string, 0, -1);   // ""
// substring(string, 2);       // "llo world"
// substring(string, 'a');     // "hello world"
// substring(string, 8, 20);   // "rld"

function substring(string, start, end) {
  start = start > 0 ? start : 0;
  start = start < string.length ? start : string.length;
  end = end ?? string.length;
  end = end > 0 ? end : 0;
  end = end < string.length ? end : string.length;
  if (start > end) [start, end] = [end, start];

  let substr = '';
  for (let idx = start; idx < end; idx++) {
    substr += string[idx];
  }

  return substr;
}

let string = 'hello world';
console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
console.log(substring(string, 2, 2));    // ""