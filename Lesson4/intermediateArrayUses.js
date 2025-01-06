/* eslint-disable no-unused-vars */
// Write a function that creates and returns a new array from its array argument
// The new array should contain all values from the argument array whose
// positions have an odd index.

// function oddElementsOf(arr) {
//   // …
// }

// let digits = [4, 8, 15, 16, 23, 42];

// oddElementsOf(digits);    // returns [8, 16, 42]

function oddElementsOf(arr) {
  return arr.filter((_, idx) => idx % 2 === 1);
}

console.log(oddElementsOf([0,1,2,3,4,5]));

// Write a function that takes an array argument and returns a new array that
// contains all the argument's elements in their original order followed by all
// the argument's elements in reverse order.

function doubleReverse(arr) {
  return arr.concat(arr.toReversed());
}

// Use the array sort method to create a function that takes an array of numbers
// and returns a new array of the numbers sorted in descending order. Do not
// alter the original array.

// function sortDescending(arr) {
//   // …
// }

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

function sortDescending(arr) {
  return arr.slice(0).sort((a, b) => b - a);
}

// Write a function that takes an array of arrays as an argument, and returns a
// new array that contains the sums of each of the sub-arrays.

// function matrixSums(arr) {
//   // …
// }

// matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]

function matrixSums(arr) {
  return arr.map((subArr) => subArr.reduce((acc, num) => num + acc));
}

function matrixSums2(arr) {
  let sums = [];

  for (let idx = 0; idx < arr.length; idx++) {
    let sum = 0;
    for (let innerIdx = 0; innerIdx < arr[idx].length; innerIdx++) {
      sum += arr[idx][innerIdx];
    }

    sums.push(sum);
  }

  return sums;
}

let arr = [[2, 8, 5], [12, 48, 0], [12]];
console.log(matrixSums2(arr));


// Write a function that takes an array, and returns a new array with duplicate
// elements removed.

// function uniqueElements(arr) {
//   // …
// }

// uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]

function uniqueElements(arr) {
  let uniques = [];
  for (let element of arr) {
    if (uniques.includes(element)) continue;
    uniques.push(element);
  }

  return uniques;
}

let arr2 = [1,2,3,4,5,1,3,1,4,5];
console.log(uniqueElements(arr2));