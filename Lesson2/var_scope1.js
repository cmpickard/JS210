// // Please predict the output of the following programs,
// // and explain why they output what they do.

// Problem 1
// let a = 'outer';

// function testScope() {
//   let a = 'inner';
//   console.log(a);  
// }

// console.log(a); => outer
// testScope();    => inner
// console.log(a); => inner

/* 
On the first line of output, the reference to the variable 'a' causes JS to
retrieve the variable defined on the first line, which has a global scope.

On the second line, we make a call to the testScope() function in which a new
block-scoped variable 'a' is defined. This local variable shadows the global
var of the same name, and so on the subsequent line when 'a' is referenced, it
is the value of the locally scoped 'a' that is retreived and not the globally
scoped 'a'.

On the third line of output, we have closed out the call to testScope() and so
all vars that were locally scoped to that function are now inaccessible / out
of scope. At this point, our reference to 'a' once again causes JS to access
the value assigned to the globally scoped variable of that name.
*/


// Problem 2

// let a = 'outer';

// function testScope() {
//   a = 'inner';
//   console.log(a);
// }

// console.log(a);   => outer
// testScope();      => inner
// console.log(a);   => inner

/* 
In this code, unlike in the first problem, there is only ever one variable with
the name 'a': the globally scoped variable defined on the first line. 
Thus, the first outputting line retrieves the value of 'a', 'outer'.
On the second line, inside the call to testScope(), that same 'a' variable is
reassigned to a new string value, 'inner'. Again, there is only one 'a', so 
that change impacts what happens when we reference 'a' both inside teh function
and out it.
Accordingly, the reference to 'a' inside the function points us to the string
value 'inner' as does the refernce to 'a' on the last line, outside the funciton.
*/


// Problem 3
// let basket = 'empty';

// function goShopping() {
//   function shop1() {
//     basket = 'tv';
//   }

//   console.log(basket);      => empty

//   let shop2 = function() {
//     basket = 'computer';
//   };

//   const shop3 = () => {
//     let basket = 'play station';
//     console.log(basket);      => play station
//   };

//   shop1();
//   shop2();
//   shop3();

//   console.log(basket);      => computer
// }

// goShopping();

/*
empty
play station
computer

The basket variable, having been declared in the top-level scope, is available
throughout the goShopping function call.
The first console.log line access that variable and it's original assigned
value, outputtin 'empty' to the console.
Inside the call to shop1(), the basket variable is reassinged to 'tv'. Inside
the call to shop2(), it is reassigned to 'computer'.
Inside teh call to shop3(), a new variable also named basked is declared and
initialized to the string 'play station'. This variable is locally scoped to
the shop3() function and shadows the globally scoped variable of the same name.
It is this locally scoped version that is referenced on the next line, where
'play station' is output to console
Lastly, the console.log line at the end references the globally scoped basket
variable which is still set to 'computer' from the reassignment that took place
inside shop2(). That string is output to console.  

*/






// Problem 4
// function hello() {
//   a = 'hi';
// }

// hello();
// console.log(a);

/* 
hi
inside the hello() call, the variable a is assigned to the string primitive, 'hi'.
this looks like a reassignment, but in fact, it's not. JS will look to find an
existing variable of that name and, not finding one, will create one and assign
it to 'hi'. this 
*/


// Problem 5

// function hello() {
//   let a = 'hello';
// }

// hello();
// console.log(a);

/* 
this will throw an error.
the variable a defined on the second line is locally scoped to the hello()
function. that variable disappears / is inaccessible after the funtion call 
returns, and so the reference on the last line fails
*/


// Problem 6
// console.log(a);
// var a = 1;

/* 
  undefined
  due to hoisting, the a variable will have already been declared on the first
  line when we try to reference it -- however, it will have been intialized to
  undefined since that is the value assigned to all var variables upon being
  hoisted. Any explicit assignments in the code will happen only when execution
  reaches the relevant line
*/


// Problem 7
// console.log(a);

// let a = 1;
/*  
  This will throw an error, saying that the variable a is not yet available
  for referencing. (NOTICE: that's NOT the same as the error we get when we
  reference a variable that has never been defined.)
  While let variables are hoisted, they are not *set* any value, not even 
  undefined, until expliticly assigned one in the code. Thus, on the first line
  where we try to reference the a variable, JS acknowledges that there is such
  a variable in the present scope, but also throws an error b/c that variable
  has no value assigned (contains neither a value nor a pointer)
*/


// Problem 8
// console.log(a);

// function hello() {
//   a = 1;
// }

/*
  while the hello function is hoisted, it is never actually called. thus,
  the function's code is never run and the global variable a is never defined.
*/