// In the problems below, we ask you to write functions that work with Arrays.
// You may use Array's index access ([]), the length property, and any
// Array Methods you need.

// Write a function that returns the first element of an array passed in as
// an argument.

// function firstElementOf(arr) {
//   // …
// }

// firstElementOf(['U', 'S', 'A']);  // returns "U"

function firstElementOf(arr) {
  return arr[0];
}


// Write a function that returns the last element of an array passed in as
// an argument.

// function lastElementOf(arr) {
//   // …
// }

// lastElementOf(['U', 'S', 'A']);  // returns "A"

function lastElementOf(arr) {
  return arr[arr.length - 1];
}


// Write a function that accepts two arguments, an array and an integer
// index position, and returns the element at the given index. Can you predict
// what happens if the index is greater than the length of the array? What
// about if it is a negative integer?

// function nthElementOf(arr, index) {
//   // …
// }

// let digits = [4, 8, 15, 16, 23, 42];

// nthElementOf(digits, 3);   // returns 16
// nthElementOf(digits, 8);   // what does this return?
// nthElementOf(digits, -1);  // what does this return?

function nthElementOf(arr, index) {
  return arr[index];
}
/* ANSWER: indices out of range will always return undefined */




// Can we insert data into an array at a negative index? If so, why is this
// possible?

/* 
ANSWER:
  That's possible because arrays are fundamentally objects!
  All the operations we perform on array elements are really just operations
  on an object, with the indices automatically being used as keys and the
  elements we're storing the array as values. 
  BUT that doesn't mean we are limited to positive integer keys! Like any object
  in JS, we are free to use whatever string value we want as a key, including
  negative numbers. Only, those key/value pairs won't behave like array elements
  They'll behave like normal object properties -- e.g. the length of the array
  won't include properties with keys that are outside the counting numbers, any
  iteration methods for arrays like forEach will ignore those properties
*/


// Write a function that accepts an array as the first argument and an
// integer value, count, as the second. It should return a new array that
// contains the first count elements of the array.

// function firstNOf(arr, count) {
//   // …
// }

// let digits = [4, 8, 15, 16, 23, 42];
// firstNOf(digits, 3);    // returns [4, 8, 15]

function firstNOf(arr, count) {
  newArr = [];
  for (let i = 0; i < count; i++) {
    newArr[i] = arr[i];
  }

  return newArr;
}


// Write a function like the previous one, except this time return the last
// count elements as a new array.

// function lastNOf(arr, count) {
//   // …
// }

// let digits = [4, 8, 15, 16, 23, 42];
// lastNOf(digits, 3);    // returns [16, 23, 42]

function lastNOf(arr, count) {
  newArr = [];

  if (count > arr.length) count = arr.length;

  for (let i = (arr.length - count); i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}


// Using the function from the previous problem, what happens if you pass a
// count greater than the length of the array? How can you fix the function so
// it returns a new instance of the entire array when count is greater than the
// array length?

/* ANSWER: it adds a bunch of undefineds onto the end of the returned array */


// Write a function that accepts two arrays as arguments and returns an array
// with the first element from the first array and the last element from the
// second array.

// function endsOf(beginningArr, endingArr) {
//   // …
// }

// endsOf([4, 8, 15], [16, 23, 42]);  // returns [4, 42]

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}