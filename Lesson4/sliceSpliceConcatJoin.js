// Write a function named slice that accepts three arguments: an Array, a start
// index, and an end index. The function should return a new Array that contains
// values from the original Array starting with the value at the starting index,
// and including all values up to but not including the end index. Do not modify
// the original Array.

// You may use functions that were answers to previous practice problems to
// complete this problem, but do not use any built-in Array methods.

// slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
// slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]

function push(arr, el) {
  arr[arr.length] = el;
  return arr;
}

function slice(array, start, end) {
  let newArr = [];

  for (let index = start; index < end; index++) {
    push(newArr, array[index]);
  }

  return newArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// Write a function named splice that accepts three arguments: an Array, a start
// index, and the number of values to remove. The function should remove values
// from the original Array, starting with the start index and removing the
// specified number of values. The function should return the removed values
// in a new Array.

// You may use functions that were answers to previous practice problems to
// complete this problem, but do not use any built-in Array methods.

// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
// count;                                 // [ 1, 2, 8 ]

function deleteAt(arr, index) {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
}

let arr2 = [0,1,2,3];
deleteAt(arr2, 2);
console.log(arr2);

function splice(arr, start, numVals) {
  let newArr = [];
  let counter = 0;
  
  while(counter < numVals) {
    push(newArr, arr[start + counter]);  
    counter += 1;
  }

  counter = 0;

  while(counter < numVals) {
    deleteAt(arr, start);
    counter += 1;
  }

  return newArr;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]


// Write a function named concat that accepts two Array arguments. The function
// should return a new Array that contains the values from each of the original
// Arrays.

// You may use functions that were answers to previous practice problems to
// complete this problem, but do not use any built-in Array methods.

// concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]

function concat(arr1, arr2) {
  let newArr = [];

  for (let index1 = 0; index1 < arr1.length; index1++) {
    push(newArr, arr1[index1]);
  }

  for (let index2 = 0; index2 < arr2.length; index2++) {
    push(newArr, arr2[index2]);
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));


// Write a function named join that accepts two arguments: an Array and a String.
// The function should coerce each value in the Array to a String, and then join
// those values together using the second argument as a separator. You may assume
// that a separator will always be passed.

// You can call the String function on any JavaScript value to get its
// String representation.

// join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
// join([1, 2, 3], ' and ');                 // '1 and 2 and 3'

function join(arr, separator) {
  newString = '';
  
  for (let index = 0; index < arr.length; index++) {
    newString += String(arr[index]);
    newString += (index < arr.length - 1) ? separator : '';
  }

  return newString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));