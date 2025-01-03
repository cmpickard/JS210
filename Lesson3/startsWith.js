// Implement a function that determines whether a string begins with another
// string. If it does, the function should return true, or false otherwise.

// Examples
// function startsWith(string, searchString) {
//   // …
// }

// let str = 'We put comprehension and mastery above all else';
// startsWith(str, 'We');              // true
// startsWith(str, 'We put');          // true
// startsWith(str, '');                // true
// startsWith(str, 'put');             // false

// let longerString = 'We put comprehension and mastery above all else!';
// startsWith(str, longerString);      // false

// You may use the square brackets ([]) to access a character by index
// (as shown below), and the length property to find the string length.
// However, you may not use any other properties or methods from JavaScript's
// built-in String class.

function startsWith(string, searchString) {
  for (let idx = 0; idx < searchString.length; idx++) {
    if (string[idx] !== searchString[idx]) return false;
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We put'));
console.log(startsWith(str, 'We'));
console.log(startsWith(str, 'put'));
console.log(startsWith(str, ''));
console.log(startsWith(str, 'We put comprehension and mastery above all else '));