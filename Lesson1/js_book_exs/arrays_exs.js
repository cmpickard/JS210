
// In the following code, what are the final length values for array1, array2,
// array3, array4, and array5?

// let array1 = [1, 2, undefined, 4];

// let array2 = [1];
// array2.length = 5;

// let array3 = [];
// array3[-1] = [1];

// let array4 = [1, 2, 3, 4, 5];
// array4.length = 3;

// let array5 = [];
// array5[100] = 3;
/* array1: 4, array2: 5, array3: 0, array4: 3, array5: 101 */



// Log all of the even values from myArray to the console.
/*
let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];
myArray.forEach( function(element) {
  if (element % 2 === 0) {
    console.log(element);
  }
});
*/


// Let's make the problem a little harder. In this problem, we're again
// interested in even numbers, but this time the numbers are in nested arrays
// in a single outer array.

/*
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(sub) {
  sub.forEach(function(num) {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
});
*/


// Let's try another variation on the even-numbers theme.

// We'll return to the simpler one-dimensional array. In this problem, we want to
// use the map function to create a new array that contains one element for each
// element in the original array. If the element is an even value, then the
// corresponding element in the new array should contain the string 'even';
// otherwise, the element in the new array should contain 'odd'.

// Example
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

ans = myArray.map(function(el) {
  return (el % 2 === 0 ? 'even' : 'odd');
});

console.log(ans)





// Write a findIntegers function that takes an array argument and returns an
// array that contains only the integers from the input array. Use the filter
// method in your function.

// Example
// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
 
// You can use Number.isInteger(value) to determine whether a numeric value is an
// integer. It returns true if the value is an integer, false otherwise.

function findIntegers(arr) {
  return (arr.filter(function(el) {
    Number.isInteger(el);
  }));
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]


// Use map and filter to first determine the lengths of all the elements in an
// array of string values, then discard the even values (keep the odd values).

function oddLengths(arr) {
  lengths = arr.map(function(el) { 
    return el.length;
  })
  return lengths.filter(el => el % 2 !== 0 )
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(oddLengths(arr)); // => [1, 5, 3]
// Note that it is possible to solve this problem without using map. However,
// our intent is to show how you can combine multiple functions to achieve a
// desired result.




// Use reduce to compute the sum of the squares of all of the numbers in an
// array:

function sumOfSquares(arr) {
  return arr.reduce((acc, el) => acc + (el * el), 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83



// This problem is more challenging than most in this book. Don't worry if you
// can't solve it on your own.

// Write a function similar to the oddLengths function from Exercise 6, but don't
// use map or filter. Instead, try to use the reduce method.

function oddLengths2(arr) {
  odds =[]
  arr.forEach(function(str) {
    length = str.split("").reduce((acc, char) => acc + 1, 0)
    if (length % 2 !== 0) {
      odds.push(length);
    }
  });
  return odds
}

let arr2 = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths2(arr2)); // => [1, 5, 3]




// Without using a for, while, or do/while loop, write some code that checks
// whether the number 3 appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
// Return true or false depending on each result.

function checkThree(arr) {
  return (arr.filter(el => el === 3).length !== 0);
}

console.log(checkThree(numbers1));
console.log(checkThree(numbers2));
console.log(checkThree(numbers3));


// Write some code to replace the value 6 in the following array with 606:

// let arr = [
//   ["hello", "world"],
//   ["example", "mem", null, 6, 88],
//   [4, 8, 12]
// ];
// You don't have to search the array. Just write an assignment that
// replaces the 6.

arr[1][3] = 606