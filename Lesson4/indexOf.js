// Write a function indexOf that accepts two arguments: an array and a value.
// The function returns the first index at which the value can be found, or -1
// if the value is not present.

// indexOf([1, 2, 3, 3], 3);         // 2
// indexOf([1, 2, 3], 4);            // -1

function indexOf(arr, val) {
  let index = -1;
  for (let i = arr.length -1; i >= 0; i--) {
    if(arr[i] === val) index = i;
  }
  
  return index;
}

console.log(indexOf([1,2,3,2], 2) === 1);

console.log(indexOf([1,2,3], 4) === -1);


// Write a function lastIndexOf that accepts two arguments: an array and a
// value. The function returns the last index at which the value can be found
// in the array, or -1 if the value is not present.

// lastIndexOf([1, 2, 3, 3], 3);     // 3
// lastIndexOf([1, 2, 3], 4);        // -1

function lastIndexOf(arr, val) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) index = i;
  }

  return index;
}

console.log(lastIndexOf([1,2,3,2], 2) === 3);
console.log(lastIndexOf([1,2,3], 4) === -1);