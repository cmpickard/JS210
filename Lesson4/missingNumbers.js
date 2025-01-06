// Practice Problems: Find Missing Numbers
// Write a function that takes a sorted array of integers as an argument, and
// returns an array that includes all the missing integers (in order) betweenthe
// first and last elements of the argument.

// Examples:
// missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
// missing([1, 2, 3, 4]);                    // []
// missing([1, 5]);                          // [2, 3, 4]
// missing([6]);                             /

function missing(arr) {
  return Array(1 + (arr[arr.length - 1] - arr[0]))
    .fill(null)
    .map((_, idx) => idx + arr[0])
    .filter((num) => !arr.includes(num));
}

let arr = [-3, -2, -1, 5];
console.log(missing(arr)); // [0, 1, 2, 3, 4]

let arr2 = [1,2,3,4];
console.log(missing(arr2)); // []

let arr3 = [1, 5];
console.log(missing(arr3)); // [2, 3, 4]

let arr4 = [6];
console.log(missing(arr4)); // []