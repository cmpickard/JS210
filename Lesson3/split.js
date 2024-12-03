// Write a function that takes two arguments:

// a string to be split
// a delimiter character
// The function logs the split strings to the console, as shown below:

// Examples
// function splitString(string, delimiter) {
//   // …
// }

// splitString('abc,123,hello world', ',');
// // logs:
// // abc
// // 123
// // hello world

// splitString('hello');
// // logs:
// // ERROR: No delimiter

// splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o

// splitString('hello', ';');
// // logs:
// // hello

// splitString(';hello;', ';');
// // logs:
// //  (this is a blank line)
// // hello

// You may use the square brackets ([]) to access a character by index
// (as shown below), and the length property to find the string length.
// However, you may not use any other properties or methods from
// JavaScript's built-in String class.

// 'hello'[0];    // "h"
// 'hello'[4];    // "o"

// function splitString(string, delimiter) {
//   if (delimiter === undefined) {
//     console.log("Error! No delimiter")
//     return;
//   }

//   let currIndex = 0;
//   let splitWord = '';

//   while (string[currIndex] === delimiter) {
//     console.log('');
//     currIndex += 1;
//   }

//   while (currIndex < string.length) {
//     splitWord = '';
//     do {
//       splitWord += string[currIndex];
//       currIndex += 1;
//     } while (string[currIndex] !== delimiter && delimiter !== '' &&
//              currIndex < string.length);
//     console.log(splitWord);
//     if (delimiter !== '') currIndex += 1;
//   }
// }

// splitString('helloWorld', '');
// splitString(';hello;', ';');

function splitString(string, delimiter){
  if (delimiter === undefined) {
    console.log("Error! No delimiter")
    return;
  }

  let currIndex = -1;
  let splitWord;
  let char;

  while(currIndex < string.length - 1) {
    splitWord = '';
    do {
      currIndex += 1;
      char = string[currIndex];
      if (char !== delimiter && char !== undefined) splitWord += char;
    } while(char !== delimiter && currIndex < string.length - 1);
    console.log(splitWord);
  }
}

splitString('hello,world', ',');
splitString(';hello;', ';');
splitString('hello', ';');
splitString('abc,123,hello world', ',');