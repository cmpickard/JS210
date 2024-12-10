// Write a function named push that accepts two arguments: an Array and any
// other value. The function should append the second argument to the end of the
// Array, and return the new length of the Array.

// 
// let count = [0, 1, 2];
// push(count, 3);         // 4
// count;                  // [ 0, 1, 2, 3 ]

function push(array, element) {
  array[array.length] = element;
  return array.length;
}

// Write a function named pop that accepts one argument: an Array. The function
// should remove the last element from the array and return it.

// 
// let count = [1, 2, 3];
// pop(count);             // 3
// count;                  // [ 1, 2 ]

function pop(array) {
  if (array.length === 0 ) return undefined;

  let element = array[array.length - 1];
  array.length = array.length - 1;
  return element;
}

arr = [1,2,3];
console.log(pop(arr));
console.log(arr);


// Write a function named unshift that accepts two arguments: an Array and a
// value. The function should insert the value at the beginning of the Array,
// and return the new length of the array. You will need a for loop for
// this problem.

// 
// let count = [1, 2, 3];
// unshift(count, 0);      // 4
// count;                  // [ 0, 1, 2, 3 ]

function unshift(array, element) {
  for (let i = array.length; i >= 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = element;
  return array.length;
}

arr = [2,3,4]
console.log(unshift(arr, 1) === 4);
console.log(arr);



// Write a function named shift that accepts one argument: an Array. The function
// should remove the first value from the beginning of the Array and return it.

// 
// let count = [1, 2, 3];
// shift(count);           // 1
// count;                  // [ 2, 3 ]

function shift(arr) {
  if (arr.length === 0) return undefined;
  
  let value = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  
  arr.length = arr.length - 1;
  return value;
}

arr2 = [1,2,3]
console.log(shift(arr2));
console.log(arr2);