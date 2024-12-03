// Question 1
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWord = 'Hello';
// let myOtherWord = myWord;

// console.log(myWord);
// console.log(myOtherWord);

/*
  ANSWER:
  Hello
  Hello
  The myWord variable is assigned to and stores the primitive string, Hello.
  On the next line, a new variable myOtherWord is initialized and a copy of the
  primitive string, Hello, is stored in the new variable

  Hence, the output
*/

// Question 2
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWord = 'Hello';
// let myOtherWord = myWord;
// myWord = 'Goodbye';

// console.log(myWord);
// console.log(myOtherWord);

/*
  ANSWER:
  'Goodbye'
  'Hello'
  The first two lines work the same as in the previous question. On the third
  line, the myWord variable is reassigned and now stores a new string Goodbye.
  Since the myOtherWord variable has its own copy of 'Hello' this reassignment
  has no effect on it. 
*/


// Question 3
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello', 'Goodbye'];
// let myOtherWords = myWords;
// myWords[0] = 'Hi';

// console.log(myWords);
// console.log(myOtherWords);

/*
  ANSWER:
  ['Hi', 'Goodbye']
  ['Hi', 'Goodbye']
  Line one declares the myWords variable and assigns it a pointer that references
  the location of the array literal it's being assigned to.
  Line two declares the myOtherWords variables and stores inside it a *copy*
  of the pointer that's stored in myWords. Now both variables have their own
  pointers, each of which point to the same location in memory where the array
  resides.
  The third line uses indexical reassignment to store the string primitive Hi
  as the first element of the array. This mutates the array. The array remains
  the same object as before, but it now contains a reference to 'Hi' as its
  first element. This change is reflected in both variables since both continue
  to point at the now-changed array
*/


// Question 4
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello', 'Goodbye'];
// let myOtherWords = myWords;
// myWords = ['Hi', 'Bye'];

// console.log(myWords);
// console.log(myOtherWords);

/*
  ANSWER:
  ['Hi', 'Bye']
  ['Hello', 'Goodbye']

  In this case, the third line creates a new array, saves it to a new location
  in memory, and stores inside the myWords variable a pointer to that new
  location. This change has no effect on the myOtherWords variable which has
  it's own copy of the original pointer and is, thus, unaffected by the goings
  on with myWords.
*/


// Question 5
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello', 'Goodbye'];
// let myWord = myWords[0];
// myWords[0] = 'Hi';

// console.log(myWords);
// console.log(myWord);

/*
  ANSWER:
  ['Hi', 'Goodbye']
  'Hello'
  
  The first line is the same.
  The second line initializes the myWord variable to the string value 'Hello',
  as that is what is returned by the expression myWords[0]
  The third line mutates the array that myWords points to, reassigning the first
  element.
  This has no effect on the myWord variable since it does not point to or other
  reference either the myWords variable or the associated array. myWord simply
  stores a string primitive, 'Hello'
*/


// Question 6
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello', 'Goodbye'];
// let myWord = 'Hi';
// myWords[0] = myWord;
// myWord = 'Hello';

// console.log(myWords);
// console.log(myWord);

/*
  ANSWER:
  ['Hi', 'Goodbye']
  'Hello'

  This example works the same as the last one, except *first* we store the 
  string primitive 'Hi' in the myWords varaible and THEN we mutate the myWords
  array so that the first element is a new string copy of 'Hi'.
  Lastly, the myWord variable is made to store a different string primitive,
  Hello. Which change has no effect on myWords which stores is own copy of the
  original value (Hi) of myWord
*/
