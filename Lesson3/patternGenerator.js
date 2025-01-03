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

function generatePattern(nStars) {
  let numArr = [];
  for (let num = 1; num <= nStars; num++) {
    numArr.push(num);
  }

  let starArr = [];
  let extraStars = nStars > 10 ? nStars - 9 : 0;
  for (let num = 1; num <= nStars + extraStars; num++) {
    starArr.push('*');
  }

  for (let rowNum = 1; rowNum <= nStars; rowNum++) {
    let row = numArr.slice(0, rowNum).join('');
    if (rowNum < 10) {
      row += starArr.slice(rowNum).join('');
    } else {
      row += starArr.slice((2 * rowNum) - 9 ).join('');
    }
    console.log(row);
  }
}

generatePattern(7);
generatePattern(20);