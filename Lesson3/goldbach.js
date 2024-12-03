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
  
  for (let i = 2; i <= (num / 2); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function getCandidatePrimes(expectedSum) {
  let candidatePrimes = [];
  for (let i = 2; i < expectedSum; i++) {
    if (isPrime(i)) {
      candidatePrimes.push(i);
    }
  }
  return candidatePrimes;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 !== 0 || expectedSum < 4) {
    console.log(null);
    return;
  }

  let candidatePrimes = getCandidatePrimes(expectedSum);

  candidatePrimes.forEach((prime1, index1) => {
    candidatePrimes.forEach((prime2, index2) => {
      if (index2 >= index1) {
        if (prime1 + prime2 === expectedSum) {
          console.log([prime1, prime2]);
        }
      }
    })
  })
}

checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);
