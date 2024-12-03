// Question 1
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWord = 'Hello';
// myWord.concat(' there.');

// console.log(myWord);

/* 
ANSWER:
Hello

The string Hello is a primitive value and thus IMMUTABLE. Whatever we do it and
however much those doings seem like they mutated the string, the string will
not in fact be mutated

*/


// Question 2
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWord = 'Hello';
// myWord.repeat(3);
// console.log(myWord);
// myWord.replace('H', 'J');
// console.log(myWord);
// myWord.split(' ');
// console.log(myWord);

/* 
ANSWER:
  Hello
  Hello
  Hello

  Same deal. Exact same explanation. None of these methods mutate the string
  primitive 'Hello' -- because NO METHODS mutate strings
*/


// Question 3
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello'];
// myWords.push('Goodbye');

// console.log(myWords);

/* 
ANSWER:
  ['Hello', 'Goodbye']

  The push method mutates the calling object, adding one more element to the end
  of the arry. Thus, it's the same array we see output in the last line, but
  mutated
*/

// Question 4
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myWords = ['Hello'];
// myWords.concat(['Goodbye']);

// console.log(myWords);

/* 
ANSWER:
  ['Hello']

  in this case, the concat method happens not to be mutating, so we do not
  see any changes reflected in the array assigned to myWords
*/

// Question 5
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello'];
// myWords[0].toUpperCase();

// console.log(myWords);

/* 
ANSWER:
  ['Hello']

  the second line does the following. First, it uses index notation to return
  the first element of the myWords array -- which is the string 'Hello'. Then
  it calls the toUpperCase method on that string, which method call returns
  a new string, 'HELLO'. That return value is not saved anywhere, and the
  originl string, being immutable, is not affected, so the array is unchanged
  when we output it to console.
*/

// Question 6
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello'];
// myWords[0] = myWords[0].toUpperCase();

// console.log(myWords);

/* 
ANSWER:
  ['HELLO']

  this example proceeds the same as before, with the expression on the right
  resolving to the string value 'HELLO'. However, in this case, we are using
  indexical reassignment to save that new string as the first element of the
  myWords array. This replaces the original string saved at that index and
  mutates the array.
*/