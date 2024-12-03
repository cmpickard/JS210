// Write a function that logs the integers from 1 to 100 (inclusive) that are
// multiples of either 3 or 5. If the number is divisible by both 3 and 5,
// append an "!" to the number.

// Example
// multiplesOfThreeAndFive();

// // output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// // … remainder of output omitted for brevity

function multiplesOfThreeAndFive() {
  for (let i = 3; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}!`)
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(i)
    }
  }
}

// multiplesOfThreeAndFive()

// FURTHER EXPLORATION
// How would you change your function so it takes, as arguments, 
// the range of numbers it should check?
function multiplesWithRange(min = 0, max = 100) {
  for (let num = min; num <= max; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(`${num}!`)
    } else if (num % 3 === 0 || num % 5 === 0) {
      console.log(num)
    }
  }
}

multiplesWithRange(2, 45)