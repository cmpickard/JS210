// What values do the following expressions evaluate to?

// false || (true && false);   false
// true || (1 + 2);   true
// (1 + 2) || true;   3
// true && (1 + 2);   3
// false && (1 + 2);   false
// (1 + 2) && true;   true
// (32 * 4) >= 129;   false
// false !== !true;   false
// true === 4;    false
// false === (847 === '847');    true
// false === (847 == '847');     false
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;   true



// Write a function, evenOrOdd, that determines whether its argument is an even
// number. If it is, the function should log 'even' to the console; otherwise,
// it should log 'odd'. For now, assume that the argument is always an integer.

function evenOrOdd (num) {
  console.log((num % 2 === 0 ? 'even' : 'odd'));
}

evenOrOdd(2);
evenOrOdd(3);

// Let's improve our previous implementation of evenOrOdd. Add a validation check
// to ensure that the argument is an integer. If it isn't, the function should
// issue an error message and return.

function evenOrOdd (num) {
  if (typeof(num) !== 'number') {
    console.log("error! input must be a number");
  } else {
    console.log((num % 2 === 0 ? 'even' : 'odd'));
  }  
}

evenOrOdd('ten');
evenOrOdd('1');

// What does the following code log to the console, and why?
// function barCodeScanner(serial) {
//   switch (serial) {
//     case '123':
//       console.log('Product1');
//     case '113':
//       console.log('Product2');
//     case '142':
//       console.log('Product3');
//     default:
//       console.log('Product not found!');
//   }
// }

// barCodeScanner('113');
/* 
   'Product2' 
   'Product3'
   'Product not found!'
*/


// Refactor thus statement to use an if statement instead.
// return foo() ? 'bar' : qux();
/*
if (foo()) {
  'bar';
} else {
  qux();
}
*/

// What does this code output to the console?

// function isArrayEmpty(arr) {
//   if (arr) {
//     console.log('Not Empty');
//   } else {
//     console.log('Empty');
//   }
// }

// isArrayEmpty([]);
/* 'Not Empty' */


// Write a function that takes a string as an argument and returns an all-caps
// version of the string when the string is longer than 10 characters. Otherwise,
// it should return the original string. Example: change 'hello world' to
// 'HELLO WORLD', but don't change 'goodbye'.

function allCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(allCaps('goodbye'));
console.log(allCaps('Hello World'));

// Write a function that logs whether an integer is between 0 and 50 (inclusive)
// between 51 and 100 (inclusive), greater than 100, or less than 0.

// numberRange(25);
// numberRange(75);
// numberRange(125);
// numberRange(-25);

function checkRange(num) {
  if (num < 0) {
    console.log(`${num} is less than zero`);
  } else if (num < 50) {
    console.log(`${num} is between 0 and 50, inclusive`);
  } else if (num < 100) {
    console.log(`${num} is between 50 and 100, inclusive`);
  } else {
    console.log(`${num} is more than 100`)
  }
}

checkRange(-1)
checkRange(20)
checkRange(60)
checkRange(124)

// Expected Output
// 25 is between 0 and 50
// 75 is between 51 and 100
// 125 is greater than 100
// -25 is less than 0



// Without running this code, what will it print?
// console.log(false ?? null);    false
// console.log(true ?? (1 + 2));    true
// console.log((1 + 2) ?? true);    3
// console.log(null ?? false);    false
// console.log(undefined ?? (1 + 2));   3
// console.log((1 + 2) ?? null);    3
// console.log(null ?? undefined);    undefined
// console.log(undefined ?? null);    null



// Without running this code, what will it print?
// function show(foo = undefined, bar = null) {
//   console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
// }

// show(5, 7);    "foo is 5, bar is 7"
// show(0, 0);    "foo is 0, bar is 0"
// show(4);    "foo is 4, bar is 42"
// show();    "foo is 3, bar is 42"

