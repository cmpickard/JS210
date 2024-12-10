// Implement a function that takes a String as an argument and returns an object
// that contains a count of the repeated characters.

// repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
// repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
// repeatedCharacters('Pet');            // {}
// repeatedCharacters('Paper');          // { p: 2 }
// repeatedCharacters('Baseless');       // { s: 3, e: 2 }
// Note that repeatedCharacters does a bit more than simply count the frequency
// of each character: it determines the counts, but only returns counts for
// characters that have a count of 2 or more. It also ignores the case.

function repeatedCharacters(str) {
  let count = [];
  let chars = str.split('').map( char => char.toLowerCase() );

  chars.forEach(char => {
    count[char] = (count[char] !== undefined ? count[char] + 1 : 1);
  });

  for (let char in count) {
    if (count[char] === 1) delete count[char];
  }

  return count;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }