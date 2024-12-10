// Write a function that creates and returns a new array from its array argument.
// The new array should contain all values from the argument array whose
// positions have an odd index.

// function oddElementsOf(arr) {
//   // …
// }

// let digits = [4, 8, 15, 16, 23, 42];

// oddElementsOf(digits);    // returns [8, 16, 42]

function oddElementsOf(arr) {
  let newArr = [];

  for (let i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }

  return newArr;
}

// Write a function that takes an array argument and returns a new array that
// contains all the argument's elements in their original order followed by all
// the argument's elements in reverse order.

function doubleReverse(arr) {
  let newArr = arr.slice(0);

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;  
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
  return arr.toSorted((a, b) => b - a);
}

function sortDescending2(arr) {
  newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }

  return newArr.sort((a,b) => b - a);
}

function sortDescending3(arr) {
  return arr.concat([]).sort((first, second) => second - first);
}

// Write a function that takes an array of arrays as an argument, and returns a
// new array that contains the sums of each of the sub-arrays.

// function matrixSums(arr) {
//   // …
// }

// matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]

function matrixSums(arr) {
  let newArr = [];
  arr.forEach(subArr => newArr.push(subArr.reduce((acc, val) => acc + val)));

  return newArr;
}

function matrixSums2(arr) {
  let newArr = [];
  
  for (let outerIdx = 0; outerIdx < arr.length; outerIdx++) {
    let subArr = arr[outerIdx];
    let sum = 0;

    for (let innerIdx = 0; innerIdx < subArr.length; innerIdx++) {
      sum += subArr[innerIdx];
    }

    newArr.push(sum);
  }

  return newArr;
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
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currElement = arr[i];
    if (newArr.indexOf(currElement) === -1) {
      newArr.push(currElement);
    }
  }

  return newArr;
}

let arr2 = [1,2,3,4,5,1,3,1,4,5];
console.log(uniqueElements(arr2));