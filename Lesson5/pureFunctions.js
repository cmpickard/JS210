// What side effects are present in the foo function in the following code?

//
// const bar = 42;
// let qux = [1, 2, 3];
// let baz = 3;

// function foo(arr) {
//   let value = arr.pop();
//   console.log(`popped ${value} from the array`);
//   return value + bar + baz;
// }

//// foo(qux);


/*
ANS:
  // eslint-disable-next-line max-len, max-len
  i) An array that's accessible in an outer scope is mutated by the call to
  pop()
  ii) Output is sent to the console
*/


// Which of the following functions are pure functions?

// Function 1
// function sum(a, b) {
//   console.log(a + b);
//   return a + b;
// }
// IMPURE

// Function 2
// function sum(a, b) {
//   a + b;
// }
// PURE

// Function 3
// function sum(a, b) {
//   return a + b;
// }
// PURE

// Function 4
// function sum(a, b) {
//   return a + b + Math.random();
// }
// IMPURE

// Function 5
// function sum(a, b) {
//   return 3.1415;
// }
// PURE