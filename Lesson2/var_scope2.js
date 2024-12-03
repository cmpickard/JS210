// Please predict the output of the following programs,
// and explain why they output what they do.

// Problem 1
// function say() {
//   if (false) {
//     var a = 'hello from inside a block';
//   }

//   console.log(a);
// }

// say();

/* 
  undefined

  Remember, variables declared with var are *function* scoped which means they
  count as local to whatever function they are inside and ignore block scopes
  entirely.
  Hence, the a variable is scoped to the say function and will be hoisted to 
  the top of that function during the creation phase. Since this is a var
  declaration, that means that a will be implicitly assigned to undefined.

  And since the if block is never executed, that remains the value of a when
  it is referenced on the final line of the say function.
*/


// Problem 2

// function say() {
//   if (false) {
//     let a = 'hello from inside a block';
//   }

//   console.log(a);
// }

// say();

/* 
  Reference Error
  Variables declared with let are block-scoped, which means the a variable is
  scoped to the block inside the if statement. 
  Thus, while let variables are hoisted, they are only hoisted to the top of
  their scope, and so when we try to reference a on the last line of the say
  function, we get a reference error. The a variable is not in scope.
*/



// Problem 3

// function hello() {
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     var a = 'hello again';
//   }
// }

// hello();
// console.log(a);

/* 
hello
reference Error

The a variable is function scoped to the hello function and so gets hoisted
during the creation phase and assigned to undefined. The first line of the 
funciton then reassigns it to 'hello' and the second line outputs that value
to the console.
The last line of the program attempts to reference a but fails because, again,
a is locally, function scoped inside the hello function and so not available
once we exist the function call.
*/





// Problem 4

// function hello() {
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     let a = 'hello again';
//   }
// }

// hello();
// console.log(a);

/*
hello
hello

In this case, the let-declared variable gets hoisted to the top of the block
it's in, but not to the top of the function. So on the first line, JS defined
a new global variable a on the global object and assigns it to the string 'hello'

that is what gets output on the subsequent and, b/c a is global, is also what
gets output by the final line
*/





// Problem 5

// var a = 'hello';

// for (var index = 0; index < 5; index += 1) {
//   var a = index;
// }

// console.log(a);

/* 
  4

  The variable a defined on the first line has global scope. And the a variable
  we see being declared inside the the for block *does not shadow* the original
  a variable, b/c var variables are function scoped, not block scoped. 
  It simply reassigns it to the present value of the index var.

  Thus, the value of a on the last line is just the value it was assigned on 
  the last iteration of the for loop -- which should be the number 4
*/


// Problem 6

// let a = 'hello';

// for (let index = 0; index < 5; index += 1) {
//   let a = index;
// }

// console.log(a);

/*
hello

because let-declared variables are block-scoped, the let declaration inside the
for loop is creating a distinct local variable, scoped to the for-loop block
which shadows the outer-scoped a variable that is declared on the first line.

That block-scoped a disappears at the closure of the for-loop, and so its the
original a that we reference on the final line -- and since a was shadowed
inside the for loop, its value remains unchanged.
*/


// Problem 7

// let a = 1;

// function foo() {
//   a = 2;
//   let bar = function() {
//     a = 3;
//     return 4;
//   };

//   return bar();
// }

// console.log(foo());
// console.log(a);

/*
4
3

the first logging line is going to output the return value of the call to the
foo function. The return statement at the end of the foo function is a call
to the function assigned to bar, so the foo function will return whatever 
value is returned by the invocation of that function. The anonymous function
assigned to bar returns 4, so the foo function returns 4, so that is what gets
output to the console.

As for the second logging line, we attempt to reference the a variable. That var
is in scope, having be declared on the first line of the program with let. B/c
let variables are block scoped and because the a declaration happens in the top
level of the program, a is available inside the foo invocation, where it is re-
assigned twice. It's final value is 3, and that is what gets output to console.

*/





// Problem 8

// var a = 'global';

// function checkScope() {
//   var a = 'local';
//   const nested = function() {
//     var a = 'nested';
//     let superNested = () => {
//       a = 'superNested';
//       return a;
//     };

//     return superNested();
//   };

//   return nested();
// }

// console.log(checkScope());
// console.log(a);

/* 
superNested
global

The first logging line sends to the console the return value from calling the
checkScope function. That function returns the value returned by a call to the
nested function, and the nested function returns the value returned by the
superNested function. That last funciton returns the string, 'superNested', and
so that return value propogates up through all the function calls to eventually
be output to console.

The second logging line sends to the console the value currently assigned to
global variable a. That variable was assign to the string 'global' on the first
line of the program and was never reassigned. (while it might *look* like a
is reassigned at multiple points, all of the nested functions have their own
non-identical a variables which shadow the global variable. Recall, variables
declared with var all have function scope, so each a defined inside a function
is locally scoped just to that function and blocks access to all outerscoped
vars of the same name.)
*/


// Problem 9

// let a = 'outer';
// let b = 'outer';

// console.log(a);
// console.log(b);
// setScope(a);
// console.log(a);
// console.log(b);

// function setScope(foo) {
//   foo = 'inner';
//   b = 'inner';
// }

/* 
outer
outer
outer
inner

the first two logs straightforwardly output the values assigned to a and b
on the first two lines. 
Then, the call to setScope reassigns b to the string 'inner' (it might *appear*
to reassign a to 'inner' but it doesn't. that's because JS has pass by value
behavior for primitive values like strings. whatever we do to the string 'inner'
inside the setScope function, the string value that a points to will remain
unchanged.)
*/


// Problem 10

// let total = 50;
// let increment = 15;

// function incrementBy(increment) {
//   total += increment;
// }

// console.log(total);
// incrementBy(10);
// console.log(total);
// console.log(increment);

/* 
50
60
15

The first logging statement outputs 50, which is the value we initialized the
totatl variable to.
Then we call the incrementBy function, which points the total variable at a new
value: the number 60. (increasing total by the value of increment, the inner
scoped variable created from the function parameter -- and not by the value
of increment, the globally scoped variable)
That gets output to console.
Then the initial value of increment -- 15 -- is output to console.

*/


// Problem 11

// let a = 'outer';

// console.log(a);
// setScope();
// console.log(a);

// var setScope = function () {
//   a = 'inner';
// };

/* 
outer
error 'setScope' is not a function

The first logging statement simply outputs the value we initialzed to a.
Then we attempt to call the function assigned to setScope.
However, because that's a function expression (and not a function statement),
that function has not been hoisted and so is not available on the line where
we try to call it. Rather, it is the setScope variable declaration that has been
hoisted, with that variable being added to the current scope and assigned an
initial value of undefined.

So when we try to call setScope, JS interprets us as trying to treat the 
primitive value undefined as a function -- which it isn't! -- and throws an
error.

*/