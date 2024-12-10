// Let's do some practice problems with the Date object and its methods.
// You can refer to the MDN Documentation as you go through these.

// Create a variable named today with the current date and time as its value.

let date = new Date();

// Solution
// Log a string, "Today's day is 5", that tells the current day of the week as a
// number between 0 and 6 (Sunday is 0, Saturday is 6). Use the getDay method to
// obtain the number of the day of week.


console.log(`Today's day is ${date.getDay()}`);

// Solution
// The getDay method, like many of the get methods on the date object, returns
// a zero-based index of the current day of week instead of the day name. This
// enables support for multiple locales and formats. Modify the output messageof
// the previous problem to show the 3-letter day name abbreviation. You may use
// the following array:

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(`Today's day is ${daysOfWeek[date.getDay()]}`);

// Let's add the calendar date (the day of month) to our log message: "Today's
// date is Mon, the 6th". Use the getDate method to obtain the current day of
// month. Don't worry about using different suffixes for numbers that end with
// 1, 2, or 3 just yet; we'll deal with that in the next problem.
let currDay = date.getDate();
let dayName = daysOfWeek[date.getDay()];
console.log(`Today is ${dayName}, the ${currDay}${dateSuffix(currDay)}.`);


// Ideally, the suffix on the day number needs to adjust to the proper suffix
// for days like the 1st, 22nd, and 3rd. Write a function named dateSuffix that
// takes the day of month as a numeric value and returns the formatted day of
// month and suffix. Make sure you use the correct suffixes.

function dateSuffix(num) {
  if (num === 1 || num === 21 || num === 31) {
    return 'st';
  } else if (num === 2 || num === 22) {
    return 'nd';
  } else if (num === 3 || num === 23) {
    return 'rd';
  } else {
    return 'th';
  }
}

currDay += dateSuffix(currDay);

// Change your output to include the value from the getMonth method. Thus, the
// logged string will read "Today's date is Mon, 11 6th", where 11 is the month
// number returned by getMonth.

let monthNum = date.getMonth();


console.log(`Today is ${dayName}, ${monthNum} ${currDay}`);

// Let's make the month readable. Using the same technique we used in problem 3,
// convert the month number in the output string to a 3-letter month name
// abbreviation. You may use the following array:


let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'];

let monthName = months[monthNum];

console.log(`Today is ${dayName}, ${monthName} ${currDay}`);

// Our call to console.log is getting cluttered. Let's clean things up a bit and
// refactor the code into a few formatting functions that we can call from
// anywhere in our code. Create formattedMonth and formattedDay functions to
// format the month and day, then write a formattedDate function that pulls
// everything together and logs the fully formatted date.

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'];
  let monthNum = date.getMonth();
  return months[monthNum];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let currDay = date.getDate();
  currDay += dateSuffix(currDay);
  let dayName = daysOfWeek[date.getDay()];
  return [dayName, currDay];
}

function formattedDate(date) {
  let monthName = formattedMonth(date);
  let dayName;
  let currDay;
  [dayName, currDay] = formattedDay(date);

  return `${dayName}, ${monthName} ${currDay}`;
}

console.log(`!Today is ${formattedDate(date)}`);


// Log the values returned from the getFullYear and getYear methods. Note how
// these values differ. Note especially that getYear is deprecated: you should
// avoid using deprecated methods as they may one day disappear.

console.log(date.getFullYear());
console.log(date.getYear());

// Use the getTime method and log the current date and time in total
// milliseconds since Jan. 1st 1970.

console.log(date.getTime());

// Create a new date object variable named tomorrow that contains a Date object.
// Initialize the variable by setting it to the value of today. You can get the
// value of today using the getTime method. Next, change the date on the
// tomorrow object to the day after today: you should use setDate to change the
// date. Finally, log the tomorrow object with your formattedDate function.

let tomorrow = new Date(date.getTime());
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(tomorrow);

// Create a new variable named nextWeek that is a new Date copied from the today
// object. Compare nextWeek and today, and log the results. Are they equal?
// Why or why not?

let nextWeek = new Date(date.getTime());
console.log(nextWeek === date);

// The === operator only returns true with Date objects if the objects are the
// same object. Since we have two different objects (with the same values), we
// must instead compare the values represented by those objects. Compare the
// values returned by toDateString to determine whether the two objects are
// equal. Finally, add 7 days to the nextWeek date and compare the two
// objects again.

console.log(nextWeek.toDateString() === date.toDateString());
nextWeek.setDate(nextWeek.getDate() + 7);
console.log(nextWeek.toDateString() === date.toDateString());

// Finally, write a function named formatTime that takes a date object as an
// argument and returns a string formatted with the hours and minutes as
// "15:30". Make sure you handle the case where the hours or minutes has only
// one digit: you need to pad the value with a leading zero in such cases,
// e.g., "03:04". You can use the getHours and getMinutes methods to obtain
// the hours and minutes.

function formatTime(date) {
  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  console.log(hours + ':' + minutes);
}

formatTime(date);