// // Write a function that iterates over the integers from 1 to 100, inclusive.
// // For multiples of three, log "Fizz" to the console. For multiples of five,
// // log "Buzz". For numbers which are multiples of both three and five, log
// // "FizzBuzz". For all other numbers, log the number.

// Your output should look like this:

// fizzbuzz();

// // console output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// // … rest of output omitted for brevity

function fizzBuzz() {
  for (let num = 1; num <= 100; num++) {
    if (num % 15 === 0) {
      console.log('FizzBuzz');
    } else if (num % 5 === 0) {
      console.log('Buzz');
    } else if (num % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(num);
    }
  }
}

fizzBuzz();

// FURTHER EXPLORATION
// This solution is more verbose than called for.
// Can you refactor it to make it more concise?

// function fizzBuzz2() {
//   for (let num = 1; num <= 100; num++) {
//     let remainder = num % 15;

//     switch (remainder) {
//       case 0:
//         console.log('FizzBuzz');
//         break;
//       case 3:
//       case 6:
//       case 9:
//       case 12:
//         console.log('Fizz');
//         break;
//       case 5:
//       case 10:
//         console.log('Buzz');
//         break;
//       default:
//         console.log(num);
//     }
//   }
// }

// fizzBuzz2();

function fizzBuzz3() {
  const SEQUENCE = ['FizzBuzz', null, null, 'Fizz', null, 'Buzz', 'Fizz', null,
    null, 'Fizz', 'Buzz', null, 'Fizz', null, null];
  for (let idx = 1; idx <= 100; idx++) {
    let value = SEQUENCE[(idx % 15)];
    value = value ?? idx;
    console.log(value);
  }
}

fizzBuzz3();