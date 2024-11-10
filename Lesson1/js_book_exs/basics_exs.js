// Concatenate two or more strings, one with your first name and one with your
// last, to create a string with your full name as its value. For example, if your
// name is John Doe, think about how you can put 'John' and 'Doe' together to get
// 'John Doe'.
console.log('Caleb' + ' ' + 'Pickard')

// Using arithmetic operators, get the individual digits of a 4-digit number
// like 4936:
// thousands place is 4
// hundreds place is 9
// tens place is 3
// ones place is 6

function fourDigits(int) {
  let digits = []
  while (int > 0) {
    let next = int % 10
    digits.push(next)
    int = parseInt(int / 10)
  }
  return digits
}

console.log(fourDigits(4936))


// Identify the data type for each of the following values:

// 'true' => String
// false => Boolean
// 1.5 => Number
// 2 => Number
// undefined => Undefined
// { foo: 'bar' } => Object


// Explain why this code logs '510' instead of 15.
// console.log('5' + 10);
// ANS: JS automatically coerces the Number value of 10 to a string value of
// '10' which is then concatenated (rather than added) to the string value of 
// '5' -- hence '510'

// Refactor the code from the previous exercise to use explicit coercion, so
// it logs 15 instead.
console.log(Number('5') + 10)


// Use the template literal syntax along with the expression Number('5') + 10 to
// log the following sentence to the console:
// The value of 5 + 10 is 15.
let expression = Number('5') + 10
console.log(`the value of 5 + 10 is ${expression}`)


// Will an error occur if you try to access an array element with an index that
// is greater than or equal to the length of the array? For example:

// let foo = ['a', 'b', 'c'];
// console.log(foo.length);  // => 3
// console.log(foo[3]);      // will this result in an error?
// ANS: this will returned undefined, rather than throw an error


// Create an array named names that contains a list of pet names. For instance:

// Name
// asta
// butterscotch
// pudding
// neptune
// darwin
// You can use that data or make up your own.
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin']
console.log(names)


// Create an object named pets that contains a list of pet names and the type
// of animal. For instance:

// Name	Animal
// asta	dog
// butterscotch	cat
// pudding	cat
// neptune	fish
// darwin	lizard
// You can use that data or make up your own.
names = { asta: 'dog', buttescotch: 'cat', pudding: 'cat',
          neptune: 'fish', darwin: 'lizard'}
console.log(names)

// What value does the following expression evaluate to?
// 'foo' === 'Foo'
//ANS: False


// What value does the following expression evaluate to?
// parseInt('3.1415')
//ANS: 3



// What value does the following expression evaluate to?
// '12' < '9'
// ANS: True