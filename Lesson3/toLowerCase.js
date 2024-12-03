// Write a function that returns a string converted to lowercase.

// To convert a single uppercase character to a lowercase character, get its ASCII
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
  upcaseString = '';
  const CONVERSION_OFFSET = 32;

  for (let idx = 0; idx < string.length; idx++) {
    let ascii = string.charCodeAt(idx);

    if (ascii <= 90 && ascii >= 65) {
      upcaseString += String.fromCharCode(ascii + CONVERSION_OFFSET);
    } else {
      upcaseString += string[idx];
    }
  }
  
  return upcaseString;
}

console.log(toLowerCase('ASGh'));

console.log(toLowerCase('BGN'));

