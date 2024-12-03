// Write a function that takes a number of rows as the argument nStars and logs
// a square of numbers and asterisks. For example, if nStars is 7, log the
// following pattern:

// generatePattern(7);

// // console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567
// You may assume that nStars is greater than 1 and less than 10.

// FIRST ATTEMPT

// function generatePattern(nStars) {
//   let starCounter = nStars - 2;

//   do {
//     let nums = '1';
//     for (let i = 2; i < (nStars - starCounter); i++) {
//       nums += i;
//     }

//     let stars = '';
//     for (let i = 0; i <= starCounter; i++) {
//       stars += '*';
//     }

//     console.log(nums + stars);
    
//     starCounter -= 1;
//   } while (starCounter >= -1);
// }

// generatePattern(7);
// generatePattern(20);



function generatePattern(nStars) {
  let extraStars = (nStars - 9) > 0 ? (nStars - 9) : 0;

  for (let lineNum = 1; lineNum <= nStars; lineNum++) {
    let nums = '';
    for (let currNum = 1; currNum <= lineNum; currNum++) {
      nums += currNum;
    }

    let stars = '';
    let counter = (lineNum <= 9 ? 0 : lineNum - 9 )
    while (counter < (nStars - lineNum + extraStars)) {
      stars += '*';
      counter += 1;
    }

    console.log(nums + stars);
  }
}

generatePattern(7);
generatePattern(20);