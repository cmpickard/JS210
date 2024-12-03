// Write two functions that each take two strings as arguments. Their expected
// behaviors are as follows:

// The indexOf function searches for the first instance of a substring in
// firstString that matches the string secondString, and returns the index of
// the character where that substring begins.

// The lastIndexOf function searches for the last instance of a substring in
// firstString that matches the string secondString, and returns the index of
// the character where that substring begins.

// Both functions return -1 if firstString does not contain the substring
// specified by secondString.

// Examples
// function indexOf(firstString, secondString) {
//   // statements
// }

// function lastIndexOf(firstString, secondString) {
//   // statements
// }

// indexOf('Some strings', 's');                      // 5
// indexOf('Blue Whale', 'Whale');                    // 5
// indexOf('Blue Whale', 'Blute');                    // -1
// indexOf('Blue Whale', 'leB');                      // -1

// lastIndexOf('Some strings', 's');                  // 11
// lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
// lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
// You may use the square brackets ([]) to access a character by index
// (as shown below), and the length property to find the string length. However,
// you may not use any other properties or methods from JavaScript's
// built-in String class.

function indexOf(firstString, secondString) {
  for (let index1 = 0; index1 < firstString.length; index1++) {
    let match = true;
      for (let index2 = 0; index2 < secondString.length; index2++) {
        if (firstString[index1 + index2] !== secondString[index2]) {
          match = false;
          break;
        }
      }
    if (match) return index1;
  }
  return -1;
}

function slice(string, firstIndex, length) {
  let sliced = '';
  if (length === undefined) length = string.length;
  for (let index = firstIndex; index < (firstIndex + length); index++) {
    let nextChar = string[index];
    if (nextChar === undefined) break;
    sliced += nextChar;
  }
  
  return sliced;
}

function lastIndexOf(firstString, secondString) {
  let results = [];
  let resultIdx;
  while (resultIdx !== -1) {
    resultIdx = indexOf(firstString, secondString);
    firstString = slice(firstString, resultIdx + 1);
    if (resultIdx !== -1) results.push(resultIdx);
  }
  if (results.length === 0) return -1;
  return results.reduce((acc, num) => acc + num) + (results.length - 1);
}

console.log(indexOf('Some strings', 's') === 5);
console.log(indexOf('Blue Whale', 'Whale') === 5);
console.log(indexOf('Blue Whale', 'Bluet') === -1);
console.log(indexOf('Blue Whale', 'LeB') === -1);

console.log(lastIndexOf('Some strings', 's') === 11);
console.log(lastIndexOf('ssssss', 's') === 5);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale') === 19);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all') === -1);