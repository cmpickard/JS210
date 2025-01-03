// Write a function that returns a string converted to lowercase.

// To convert a single uppercase character to a lowercase character, get its
// ASCII
// numeric representation from the ASCII table, add 32 to that number, then
// convert the number back to a character using the same ASCII table. You can
// use the String.fromCharCode and the String.charCodeAt methods for these
// operations. For example:

// let string = 'A';
// let asciiNumeric = string.charCodeAt(0);         // 65
// asciiNumeric += 32;
// string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

// Examples
// function toLowerCase(string) {
//   // …
// }

// toLowerCase('ALPHABET');    // "alphabet"
// toLowerCase('123');         // "123"
// toLowerCase('abcDEF');      // "abcdef"
// You may use the square brackets ([]) to access a character by index (as shown
//   below), and the length property to find the string length. However, you may
//   not use any other properties or methods from JavaScript's built-in String
//   class.

function toLowerCase(string) {
  const A_VALUE = 'A'.charCodeAt(0);
  const Z_VALUE = 'Z'.charCodeAt(0);
  const CASE_CONVERSION = 32;

  let upcased = '';
  for (let char of string) {
    let ascii = char.charCodeAt(0);
    if (ascii >= A_VALUE && ascii <= Z_VALUE) {
      ascii += CASE_CONVERSION;
    }

    upcased += String.fromCharCode(ascii);
  }

  return upcased;
}

console.log(toLowerCase('ASGh'));
console.log(toLowerCase('BGN'));

