/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
// Let's get some practice understanding the various kinds of shorthand
// notation.

// Rewrite the following code using classic JavaScript syntax. That is,
// write it without using any of the shorthand notations described in the
// previous assignment.

// function foo(bar, qux, baz) {
//   return {
//     bar,
//     baz,
//     qux,
//   };
// }

// eslint-disable-next-line no-unused-vars
function foo(bar, qux, baz) {
  return {
    bar: bar,
    qux: qux,
    baz: baz,
  };
}

// Rewrite the following code using classic JavaScript syntax:

// function foo() {
//   return {
//     bar() {
//       console.log("bar");
//     },
//     qux(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

function foo2() {
  return {
    bar: function () {
      console.log("bar");
    },
    qux: function (arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz: function (arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}


// Rewrite the following code using classic JavaScript syntax:

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let { baz, qux, bar } = foo(1, 2, 3);

function foo3(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = foo(1, 2, 3);
let bar = obj.bar;
let baz = obj.baz;
let qux = obj.qux;



// Rewrite the following code using classic JavaScript syntax:

// function foo([ one, , three ]) {
//   return [
//     three,
//     5,
//     one,
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let [ bar, qux, baz ] = result;

function foo4([ one, , three ]) {
  return [
    three,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let bar2 = result[0];
let baz2 = result[1];
let qux2 = result[2];


// Rewrite the following code using classic JavaScript syntax:

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(...array);

function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array2 = [2, 3, 5];
let result2 = product(array2[0], array2[1], array2[2]);

// Rewrite the following code using classic JavaScript syntax:

// function product(...numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

function product3() {
  let args = Array.from(arguments);
  return args.reduce((total, number) => total * number);
}

let result3 = product(2, 3, 4, 5);

// Replace the word HERE in the following code so the program prints the
// results shown:

// const HERE = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

const {foo6, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
console.log(foo6);         // 42
console.log(rest);        // { bar: 3.1415, qux: 'abc' }


// Rewrite the final line of code in the following snippet using classic
// JavaScript syntax:

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };

// const { first, second, ...rest } = obj;

const obj5 = {
  first: "I am the first",
  second: "I am the second",
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

const first3 = obj5.first;
const second3 = obj5.second;
const rest5 = {third: obj5.third, rest: obj5.rest};


// OPTIONAL Assume that you have some code that looks like this:

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   // missing code
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]
// Using shorthand notation, what is the missing code?

/*
  return { type: animalType, age, colors};
*/

// OPTIONAL Write a function that takes 5 string arguments, and returns an
// object with 3 properties:

// first: the first argument
// last: the last argument
// middle: the middle 3 arguments as a sorted array
// After writing the function, write some code to call the function. The
// arguments you provide should come from an array. You should create local
// variables named first, last, and middle from the return value.

// Use shorthand syntax wherever you can.

function practice(...strings) {
  let [first, ...remainder] = strings;
  let [last, ...middle] = remainder.reverse();
  return { first, middle: middle.sort(), last };
}

let arr = ['a', 'c', 'b', 'd', 'e'];
let {first, middle, last} = practice(...arr);
console.log([first, middle, last]);