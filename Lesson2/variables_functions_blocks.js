// Question 1
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let color = 'yellow';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors) {
//   colors.push(color);
// }

// updateColors(colors);
// console.log(colors);

/* 
  ANSWER:
  ['red', 'green', 'blue', 'yellow']

  The call to updateColors passes in as an argument a copy of a pointer to the
  array that the colors variable points to.
  Inside the function, that pointer is assigned to the local argument variable
  colors. The array object that colors points to then calls the push function,
  which adds to the end of the array a new value, 'yellow'.

  The push function mutates the caller, so we find after exiting the function
  call that the array that the outer scoped colors variable points to has
  been mutated.
/*


// Question 2
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let color = 'yellow';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors);
// console.log(colors);

/* 
  ANSWER:
  ['red', 'green', 'blue', undefined]
  The story is exactly the same here. In this case, the only real diff is that
  in the previous example, the push method was being passed the value of the
  global variable, color, while in this example that outer scoped variable is
  shadowed by a local argument variable of the same name, generated from the
  second parameter of the updateColors function.
  Since our call to updatColors doesn't include a second argument, the color
  argument variable gets default assigned to undefined, and so THAT is the value
  that gets pushed into the array.

// Question 3
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.


// let color1 = 'purple';
// let color2 = 'pink';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors, color1);
// updateColors(colors, color2);
// console.log(colors);

/* 
  ANSWER:
  ['red', 'green', 'blue', 'purple', 'pink']

  This example works similarly to the last one, except we ARE passing in a
  second argument both of the times we call the updateColors funciton. On both
  calls, then, a copy of the second argument is being added to the array that
  we passed in (w/ a copy of a pointer) to the method call, which mutates the
  associated array.

  We therefore find on the last line that the array object that colors points
  to has been mutated twice
/*

// Question 4
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let color1 = 'purple';
// let color2 = 'pink';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
//   return colors;
// }

// let newColors = updateColors(colors, color1);
// updateColors(newColors, color2);
// console.log(colors);

/* 
  ANSWER:
    ['red', 'green', 'blue', 'purple', 'pink']

  This example is basically the same as the previous one. Although we are
  defining an extra global variable, newColors, it stores a copy of a pointer
  to the same array that the colors variable points to. Thus, the changes we
  make to the array that newColors points to are all reflected in the array
  that colors points to -- because they are literally the same object! -- and
  vice versa.
/*

// Question 5
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let color = 'purple';
// let colors = ['red', 'green', 'blue'];

// function addColor(colors, color) {
//   colors.push(color);
//   return colors;
// }

// function removeColor(colors) {
//   color = colors.pop();
//   return colors;
// }

// let newColors = removeColor(colors);
// addColor(colors, color);
// console.log(newColors);

/* 
  ANSWER:
  ['red', 'green', 'blue']

  The first two lines define and initialize two global variables: color and
  colors.
  The next executed line calls the removeColor function and passes in the value
  saved to the colors variable as an argument -- namely, it passes in the array
  -- and saves the return value of that function call as the initial value of a
  new variable, newColors.

  Inside the removeColor function all, the array argument is assigned to the
  local argument variable colors; the pop method is called on that array obj, 
  and the return value is assigned to the global color variable -- which is
  available here inside the function call. Thus, the color varaible now stores
  the string 'blue'
  finally, the array is returned from the funciton and gets assigned to
  newColors.
  On the next line, the addColor function is called and passed two arguments:
  the array that the global colors variable points to and the string stored in
  the global color variable.
  Inside the funciton call, the array calls the push method. That method takes
  an argument, and we are passing it a copy of the string that we passed into
  the addColor function as an argument.
  The result is that the string 'blue' is added to the end of the array object.
  the function then returns the array object
  The last line then outputs to console the current value that the colors var
  points to, which is the same array object we assigned it at the beginning.
/*

// Question 6
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// function capitalize() {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function exclaim() {
//   return word += '!!!';
// }

// let word = 'hello';
// let capitalizedWord = capitalize(word);
// let exclaimedWord = exclaim(capitalizedWord);

// console.log(word);
// console.log(capitalizedWord);
// console.log(exclaimedWord);

/* 
  ANSWER:
  hello
  Hello
  hello!!!

  The first line declares a new global variable word and assigns it the primitive
  string value 'hello'.
  The next line declares a new global variable capitalizedWord and assigns it 
  to the return value of calling the capitalize function using the value of 
  word as an argument.
  That argument is unusued. Instead, the function access the global variable 
  word, and returns a new string object that consists of the original string
  with the first character capitalized and the remaining chars unchanged.

  On the next line, a third new global var is declared and is assigned the value
  returned by calling the exclaim function and passing in the value of 
  capitalizedWord as an argument. Inside the function, the argument is unused
  and instead the value of the global word var is used to create a new string
  that is the same as the current value of word but with !!! concatted to the
  end.
/*


// Question 7
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function exclaim(word) {
//   return word += '!!!';
// }

// let word = 'hello';
// let capitalizedWord = capitalize(word);
// let exclaimedWord = exclaim(capitalizedWord);

// console.log(word);
// console.log(capitalizedWord);
// console.log(exclaimedWord);

/* 
  ANSWER:
  hello
  Hello
  Hello!!!

  This example works the same as the previous example, except our two functions
  do actually have one parameter this time, and so the arguments we're passing
  in can be used to generate the string values they return.
  The major upshot of this is that the call to exclaimedWord takes the value
  of capitalizedWord as an argument and returns a new string that consists of
  that value (viz Hello) concatted to three exclamation points
*/