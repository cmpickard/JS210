/* eslint-disable max-lines-per-function */
/* eslint-disable id-length */
// Write a function that takes a string as an argument, and returns the string
// stripped of spaces from both ends. Do not remove or alter internal spaces.

// Example
// trim('  abc  ');  // "abc"
// trim('abc   ');   // "abc"
// trim(' ab c');    // "ab c"
// trim(' a b  c');  // "a b  c"
// trim('      ');   // ""
// trim('');         // ""
// You may use the square brackets ([]) to access a character by index
// (as shown below), and the length property to find the string length.
// However, you may not use any other properties or methods from JavaScript's
// built-in String class.


// 'hello'[0];       // "h"
// 'hello'[4];       // "o"

// RegExp solution
function trim(string) {
  let frontPattern = /^ +/;
  let backPattern = / +$/;
  let stripped = string.replace(frontPattern, '');
  stripped = stripped.replace(backPattern, '');

  return stripped;
}

console.log(trim('   abc   '));

// Non-RegExp solution

function calcSpaces(string) {
  let frontSpaces = 0;
  let backSpaces = 0;

  if (string[0] === ' ') {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        frontSpaces += 1;
      } else {
        break;
      }
    }
  }

  if (string[string.length - 1] === ' ') {
    for (let i = (string.length - 1); i > 0; i--) {
      if (string[i] === ' ') {
        backSpaces += 1;
      } else {
        break;
      }
    }
  }

  return [frontSpaces, backSpaces];
}

function trim2(string) {
  let spaces = calcSpaces(string);
  let trimmedFront = '';

  for (let i = 0; i < string.length; i++) {
    if (spaces[0] > 0) {
      spaces[0] -= 1;
    } else {
      spaces[0] -= 1;
      trimmedFront += string[i];
    }
  }

  let fullyTrimmed = '';

  for (let i = 0; i < trimmedFront.length; i++) {
    if (i < (trimmedFront.length - (spaces[1]))) {
      fullyTrimmed += trimmedFront[i];
    }
  }

  console.log(fullyTrimmed);
}

trim2('   abc   ');
trim2(' abf fasd                 ');

function trim3(string) {
  let firstChar = string.split('').findIndex((char) => char !== ' ');
  let result = string.split('').slice(firstChar).reverse().join('');
  firstChar = string.split('').findIndex((char) => char !== ' ');
  return result.split('').slice(firstChar).reverse().join('');
}

console.log(trim3('   abc   '));
console.log(trim3(' abf fasd                 '));