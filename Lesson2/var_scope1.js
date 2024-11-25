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


*/


// Problem 4
// function hello() {
//   a = 'hi';
// }

// hello();
// console.log(a);



// Problem 5

// function hello() {
//   let a = 'hello';
// }

// hello();
// console.log(a);



// Problem 6
// console.log(a);

// var a = 1;


// Problem 7
// console.log(a);

// let a = 1;


// Problem 8
// console.log(a);

// function hello() {
//   a = 1;
// }