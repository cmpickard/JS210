// Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates
// a String into a new String:

// For each character in the original String:

// If the character is a letter in the modern English alphabet, change it to the
// character 13 positions later in the alphabet. Thus, a becomes n. If you reach
// the end of the alphabet, return to the beginning. Thus, o becomes b.
// Letter transformations preserve case. A becomes N while a becomes n.
// Don't modify characters that are not letters.
// Write a Function, rot13, that takes a String and returns that String
// transformed by the rot13 cipher.

// console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// // logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
// It's worth noting that rot13 applied twice results in the original string:

// console.log(rot13(rot13('Teachers open the door, but you must enter by
//   yourself.')));

// // logs:
// Teachers open the door, but you must enter by yourself.
// This happens since there are 26 characters in the modern English alphabet:
// 2 sets of 13.




function rot13(string) {
  const ROTATION = 13;
  let encrypted = '';

  for (let index = 0; index < string.length; index++) {
    let asciiValue = string.charCodeAt(index);
    let char = string[index];

    if (/[A-Za-z]/.test(char)) {
      asciiValue += /[A-Ma-m]/.test(char) ? ROTATION : -ROTATION;
    }

    encrypted += String.fromCharCode(asciiValue);
  }

  return encrypted;
}

console.log(rot13('abcdefghijklmnopqrstuvwxyz'));
console.log(rot13('Hello, World!') === 'Uryyb, Jbeyq!'); // Uryyb, Jbeyq!
console.log(rot13(rot13('Hello, World!')) === 'Hello, World!');

console.log(rot13('Teachers open the door, but you must enter by yourself.') === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.')
