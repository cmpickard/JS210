// Write a function named slice that accepts three arguments: an Array, a start
// index, and an end index. The function should return a new Array that contains
// values from the original Array starting with the value at the starting index,
// and including all values up to but not including the end index. Do not modify
// the original Array.

// You may use functions that were answers to previous practice problems to
// complete this problem, but do not use any built-in Array methods.

// slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
// slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]


function slice(array, start, end) {
  let newArr = [];
  for (let idx = start; idx < end; idx++) {
    newArr[newArr.length] = array[idx];
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


function splice(arr, start, numVals) {
  let removed = [];
  let count = numVals;
  for (let idx = start; ; idx++) {
    removed[removed.length] = arr[idx];
    arr[idx] = arr[idx + numVals];
    count -= 1;
    if (count <= 0) break;
  }

  arr.length = start + 1;
  return removed;
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
  for (let idx = 0; idx < arr1.length; idx++) {
    newArr[newArr.length] = arr1[idx];
  }

  for (let idx = 0; idx < arr2.length; idx++) {
    newArr[newArr.length] = arr2[idx];
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]


// Write a function named join that accepts two arguments: an Array and a String
// The function should coerce each value in the Array to a String, and then join
// those values together using the second argument as a separator. You may assum
// that a separator will always be passed.

// You can call the String function on any JavaScript value to get its
// String representation.

// join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
// join([1, 2, 3], ' and ');                 // '1 and 2 and 3'

function join(arr, separator) {
  let joined = arr[0];
  for (let idx = 1; idx < arr.length; idx++) {
    joined += separator + arr[idx];
  }

  return joined;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));