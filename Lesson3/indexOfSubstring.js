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

function indexOf(string, substring) {
  for (let idx = 0; idx < string.length; idx++) {
    if (substring[0] !== string[idx]) continue;

    for (let subIdx = 0; subIdx < substring.length; subIdx++) {
      if (substring[subIdx] !== string[idx + subIdx]) break;
      if (subIdx === substring.length - 1) return idx;
    }
  }

  return -1;
}

function lastIndexOf(string, substring) {
  let lastIndex = -1;
  for (let idx = 0; idx < string.length; idx++) {
    if (substring[0] !== string[idx]) continue;

    for (let subIdx = 0; subIdx < substring.length; subIdx++) {
      if (substring[subIdx] !== string[idx + subIdx]) break;
      if (subIdx === substring.length - 1) lastIndex = idx;
    }
  }

  return lastIndex;
}

console.log(indexOf('Some strings', 's') === 5);
console.log(indexOf('Blue Whale', 'Whale') === 5);
console.log(indexOf('Blue Whale', 'Bluet') === -1);
console.log(indexOf('Blue Whale', 'LeB') === -1);

console.log(lastIndexOf('Some strings', 's') === 11);
console.log(lastIndexOf('ssssss', 's') === 5);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale') === 19);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all') === -1);


// Further Exploration
// If you haven't used it yet, implement the lastIndexOf function by
// reusing your indexOf function

function simpleSlice(str, start) {
  let result = '';
  for (let idx = start; idx < str.length; idx++) {
    result += str[idx];
  }

  return result;
}

function lastIndexOf2(string, substring) {
  let currIndex = indexOf(string, substring);
  if (currIndex === -1) return currIndex;
  let nextMatch = currIndex;
  let remainder = string;
  while (nextMatch !== -1) {
    remainder = simpleSlice(remainder, nextMatch + 1);
    nextMatch = indexOf(remainder, substring);
    if (nextMatch !== -1) currIndex += (nextMatch + 1);
  }

  return currIndex;
}

console.log(lastIndexOf2('Some strings', 's')); //=== 11);
console.log(lastIndexOf2('ssssss', 's')); //=== 5);
console.log(lastIndexOf2('Blue Whale, Killer Whale', 'Whale')); //=== 19);
console.log(lastIndexOf2('Blue Whale, Killer Whale', 'all')); //=== -1);