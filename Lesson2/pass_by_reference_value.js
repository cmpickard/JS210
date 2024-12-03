// Question 1
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.


// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
// }

// let myWord = 'Hello';
// changeMyWord(myWord);
// console.log(myWord);

/*
  Hello
  Hello

  We initalize myWord to the primitive string 'Hello'. A copy of that value
  is passed into the changMyWord function as an argument, and inside that
  function call that copy is output to console. The function then reassigns
  the locally scope word variable and returns undefined. 
  On the last line, the string Hello is once again output to console, since the
  reassignment of word had no affect on the value stored in myWord -- for two
  reasons. First strings are primitive values and so we'll *never* affect the
  value that an outerscoped variable points to from inside a function when
  that value is a primitive. Second, reassignment is not mutating, so even if
  myWord pointed to an object (and thus something mutable) reassigning the
  argument variable inside the funciton still would not have affected that value
  that myWord points to
*/


// Question 2
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// myWord = changeMyWord(myWord);
// console.log(myWord);

/*
  Hello
  HELLO

  This case starts like the last one, except the changeMyWord function returns
  a new string value (HELLO) -- rather than undefined as in the last example --
  and that string value is then stored in the myWord variable
*/

// Question 3
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// let myOtherWord = changeMyWord(myWord);
// console.log(myWord);
// console.log(myOtherWord);

/*
  Hello
  Hello
  HELLO

  In this example, the function's return value of 'HELLO' is used as the
  initial value for myOtherWord. While it's true that this new string is
  *derived* from the value currently stored in myWord, at no point did we
  mutate that value nor did we store a different value in myWord.
*/

// Question 4
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// function changeMyWords(words) {
//   console.log(words);
//   words[0] = 'Hi';
// }

// let myWords = ['Hello', 'Goodbye'];
// changeMyWords(myWords);
// console.log(myWords);

/*
  ['Hello', 'Goodbye']
  ['Hi', 'Goodbye']

  In this example, we pass into the changeMyWords function a copy of the pointer
  stored in the myWords variable, which pointer contains the location in memory
  of the array literal ['Hello', 'Goodbye']

  That array is what gets output to console from inside the funciton call.

  On the second line of the function call, we are doing an indexical reassign-
  ment to change which value is stored as the first element of that array. That
  is a *mutating* or destructive operation, meaning all the variables that 
  reference our array will reflect that change -- since it was a change to the
  single array object that they all point to, all references to that object
  will return it and in its current, changed state.
*/

// Question 5
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// function changeMyWords(words) {
//   console.log(words);
//   words = ['Hi', 'Goodbye'];
// }

// let myWords = ['Hello', 'Goodbye'];
// changeMyWords(myWords);
// console.log(myWords);

/*
  ['Hello', 'Goodbye']
  ['Hello', 'Goodbye']
  This example starts the same as the previous one, except inside the function
  call we do longer perform a destructive action on our original array. Instead,
  a new array literal is created and saved in a new spot in memory, and the 
  argument-storing variable words then is reassigned with a pointer to that
  new object's location.
  The function call returns undefined, and once back in the main scope of the
  program, we find that the original array that myWords points to is unchanged.
*/