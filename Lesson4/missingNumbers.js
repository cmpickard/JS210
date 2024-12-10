// Practice Problems: Find Missing Numbers
// Write a function that takes a sorted array of integers as an argument, and
// returns an array that includes all the missing integers (in order) between the
// first and last elements of the argument.

// Examples:
// missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
// missing([1, 2, 3, 4]);                    // []
// missing([1, 5]);                          // [2, 3, 4]
// missing([6]);                             /

function missing(arr) {
  let newArr = [];
  let min = arr[0] + 1;
  let max = arr[arr.length - 1];

  for (let currNum = min; currNum < max; currNum++) {
    if (arr.indexOf(currNum) === -1) {
      newArr.push(currNum);
    }
  }

  return newArr;
}

let arr = [-3, -2, -1, 5];
console.log(missing(arr));

let arr2 = [1,2,3,4];
console.log(missing(arr2));

let arr3 = [1, 5];
console.log(missing(arr3));

let arr4 = [6];
console.log(missing(arr4));