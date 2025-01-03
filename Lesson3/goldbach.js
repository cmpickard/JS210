// Write a function named checkGoldbach that uses Goldbach's Conjecture to log
// every pair of primes that sum to the number supplied as an argument.
// The conjecture states that "you can express every even integer greater than
// 2 as the sum of two primes". The function takes as its only parameter, an
// integer expectedSum, and logs all combinations of two prime numbers whose
// sum is expectedSum. Log the prime pairs with the smaller number first.
// If expectedSum is odd or less than 4, your function should log null.

// Your checkGoldbach function may call the isPrime function you wrote for
// a previous practice problem.

// Example
// checkGoldbach(3);
// // logs: null

// checkGoldbach(4);
// // logs: 2 2

// checkGoldbach(12);
// // logs: 5 7

// checkGoldbach(100);
// // logs:
// // 3 97
// // 11 89
// // 17 83
// // 29 71
// // 41 59
// // 47 53

function isPrime(num) {
  if (num < 2) return false;
  if (num % 2 === 0) return false;

  for (let divisor = 3; divisor <= num / 3; divisor += 2) {
    if (num % divisor === 0) return false;
  }

  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 === 1 || expectedSum < 4) console.log(null);

  let candidatePrimes = [2];
  for (let num = 3; num < expectedSum; num += 2) {
    if (isPrime(num)) candidatePrimes.push(num);
  }

  candidatePrimes.forEach((prime1, idx) => {
    candidatePrimes.slice(idx).forEach((prime2) => {
      if (prime1 + prime2 === expectedSum) console.log(prime1 + ' ' + prime2);
    });
  });
}

checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);
