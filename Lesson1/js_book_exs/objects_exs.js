// Given the following code, how can you access the name of the person?

// let person = {
//   name:       'Bob',
//   occupation: 'web developer',
//   hobbies:    'painting',
// };

/*
person.name
person[name]
*/

// Which of the following values are valid keys for an object?

// 1
// '1'
// undefined
// 'hello world'
// true
// 'true'

/* ANS: ALL are valid, but only because JS will automatically coerce them to 
strings */


// Use object literal syntax (e.g., { key: value, ... } notation) to create an
// object that behaves as an array in a for statement. The object should contain
// at least 3 elements. You should place your code between the braces in the
// let statement:

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

let myArray = {
  0: 'yes',
  1: 'no',
  2: '',
  length: 3,
};



// Create an array from the keys of the object obj below, with all of the keys
// converted to uppercase. Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};
// The order of the array does not matter.

console.log(Object.keys(obj).map(el => el.toUpperCase()));


// Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

myObj = Object.create(myProtoObj)


// Which of the following values are primitive values? Which are objects?
// Which are neither?

// "foo"     PRIMITIVE
// 3.1415     PRIMITIVE
// [ 'a', 'b', 'c' ]      OBJECT
// false    PRIMITIVE
// foo    NEITHER
// function bar() { return "bar"; }   OBJECT
// undefined    PRIMTIVE
// { a: 1, b: 2 }   OBJECT



// Add a qux property with value 3 to the myObj object we created in the
// previous exercise. Now, examine the following code snippets:

myObj.qux = 3

// Snippet 1
// let objKeys = Object.keys(myObj);
// objKeys.forEach(function(key) {
//   console.log(key);
// });

// Snippet 2
// for (let key in myObj) {
//   console.log(key);
// }
// Without running this code, can you determine whether these two snippets
// produce the same output? Why?
/* ANS:
They don't. The keys method only returns keys from the properties of the object
itself and not keys inherited from a prototype object. On the other hand, the
for...in structure will iterate over all the properties of the object both
inherited and not */


// Create a function that creates and returns a copy of an object. The function 
// should take two arguments: the object to copy and an array of the keys that
// you want to copy. Do not mutate the original object.

// The function should let you omit the array of keys argument when calling the
// function. If you do omit the argument, the function should copy all of the
// existing keys from the object.

// Here are some examples for your reference:

function copyObj(obj, keys) {
  if (keys == undefined) {
    keys = Object.keys(obj);
  }
  new_obj = {};

  keys.forEach(function(el) {
    new_obj[el] = obj[el];
  })
  return new_obj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }



// What does the following program log to the console? Why?

// let foo = {
//   a: 'hello',
//   b: 'world',
// };

// let qux = 'hello';

// function bar(argument1, argument2) {
//   argument1.a = 'hi';
//   argument2 = 'hi';
// }

// bar(foo, qux);

// console.log(foo.a);
// console.log(qux);

/* ANS
hi
hello
(that's because we mutate foo by reassigning one of its properties but don't
mutate qux -- what happens is instead, that the argument2 variable is reassigned
to 'hi', which change has no affect on what the global var foo is assigned to)
*/


// How many primitive values are there in the following expression? Identify them.
// How many objects are there in the expression? Identify those objects.

// [1, 2, ["a", ["b", false]], null, {}]
/* 
PRIMITIVES: 1, 2, 'a', 'b', false, null
OBJECTS: [1, 2, ["a", ["b", false]], null, {}],
         ["a", ["b", false]],
         ["b", false],
         {}
*/




// Write some code to replace the value 6 in the following object with 606:

// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };
// You don't have to search the object. Just write an assignment that
// replaces the 6.

/* obj["bar"][3]["xyz"] = 606 */



// Consider the following code:

// function foo(bar) {
//   console.log(bar, bar, bar);
// }

// foo("hello"); // should print "hello hello hello"
// bar("hi");    // should print "hi hi hi"
// As written, this code will raise an error on line 6. Without creating a new
// function or changing lines 5 or 6, update this code to work as intended.

/* 
  let bar = foo
*/


// Consider the following code:


function foo(bar) {
  console.log(bar());
}
// As written, this code will raise an error on line 5. Without modifying foo,
// update this code to print the desired text


foo(function() { return "Welcome" });    // Should print 'Welcome'
foo(function() { return "3.1415" });    // Should print 3.1415
foo(function() { return "[1, 2, 3]" });    // Should print [1, 2, 3]



// Identify all of the variables, object property names, primitive values, and
// objects shown in the following code (assume the code has not been executed)
//  Don't panic if you miss a few items - this exercise is more challenging than
//  it looks.

// function hello(greeting, name) {
//   return greeting + ' ' + name;
// }

// function xyzzy() {
//   return { a: 1, b: 2, c: [3, 4, 5], d: {} };
// }

// const howdy = hello('Hi', 'Grace');
// let foo = xyzzy();

/* 
variables: hello, greeting, name, xyzzy, howdy, foo

object property names: a, b, c, d (and the array index names 0, 1, 2)

primitive values: ' ', 'a', 'b', 'c', 'd', 1, 2, 3, 4, 5, 'Hi', 'Grace' (and 0,
1, and 2 which are implicit properties of the 3-element array)

objects: hello, xyzzy, { a: 1, b: 2, c: [3, 4, 5], d: {} }, {}, [3, 4, 5]

*/



// Identify all of the variables, object property names, primitive values, and
// objects in the following code. This problem is even more challenging than the
// previous one.

// function bar(arg1, arg2) {
//   let foo = 'Hello';
//   const qux = {
//     abc: [1, 2, 3, [4, 5, 6]],
//     def: null,
//     ghi: NaN,
//     jkl: foo,
//     mno: arg1,
//     pqr: arg2,
//   };

//   return qux;
// }

// let result = bar('Victor', 'Antonina');

/* 
variables: bar, arg1, arg2, foo, qux, result

object property names: abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3, 0, 1, 2

primitive values: 'Hello', 'Victor', 'Antonina, 1, 2, 3, 4, 5, 6, null, NaN,
'abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 0, 1, 2, 3, 0, 1, 2

objects: bar, [1, 2, 3, [4, 5, 6]], qux, [4, 5, 6]

*/