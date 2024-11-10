// Write a program named greeter.js that greets 'Victor' three times. Your
// program should use a variable and not hard code the string value 'Victor' in
// each greeting. Here's an example run of the program:

// $ node greeter.js
// Good Morning, Victor.
// Good Afternoon, Victor.
// Good Evening, Victor.
let NAME = 'Victor';
console.log(`Good Morning, ${NAME}.`);
console.log(`Good Afternoon, ${NAME}.`);
console.log(`Good Evening, ${NAME}.`);


// Write a program named age.js that includes someone's age and then calculates
// and reports the future age in 10, 20, 30 and 40 years. Below is the output
// for someone 20 years old.
// You are 20 years old.
// In 10 years, you will be 30 years old.
// In 20 years, you will be 40 years old.
// In 30 years, you will be 50 years old.
// In 40 years, you will be 60 years old.
let AGE = 20;
console.log(`In 10 years, you will be ${AGE + 10} years old.`);
console.log(`In 20 years, you will be ${AGE + 20} years old.`);
console.log(`In 30 years, you will be ${AGE + 30} years old.`);
console.log(`In 40 years, you will be ${AGE + 40} years old.`);


// What happens when you run the following program? Why do we get that result?
// {
//   let foo = 'bar';
// }

// console.log(foo);
//ANS: variables declared with a 'let' have block scope. That means, that they
//available only inside the block in which they are declared -- or inside blocks
// which are themselves contained in the block in which the var was declared.
// In thi case, the variable foo was declared inside the opening block. But
// our attempt to access foo from inside the call to console.log occurs after
// the block's closure. Hence, the var foo is no longer in scope and cannot be
// accessed


// What happens when you run the following code? Why?
// const NAME = 'Victor';
// console.log('Good Morning, ' + NAME);
// console.log('Good Afternoon, ' + NAME);
// console.log('Good Evening, ' + NAME);

// NAME = 'Joe';
// console.log('Good Morning, ' + NAME);
// console.log('Good Afternoon, ' + NAME);
// console.log('Good Evening, ' + NAME);
// ANS: First, we output three lines to the console.
// Then, We throw an error for attempting to reassign the constant NAME to a new
// value. Constants cannot be reassigned; that's the whole point of them.


// Take a look at this code snippet:

// let foo = 'bar';
// {
//   let foo = 'qux';
// }

// console.log(foo);
// What does this program log to the console? Why?
// ANS: This program logs the string 'bar'. That's because that's the value we
// assign to foo in the outermost scope on the first line of the code and that
// variable is never reassinged. It LOOKS like we reassign it inside the block,
// but that's not actually what we're doing. Inside the block we DON'T say,
// foo = 'qux';
// which statement would reassign the outerscoped version of foo to the new string
// 'qux'. Instead, we say,
// let foo = 'qux';
// That's a brand-new variable declaration, one that just so happens to shadow
// an existing variable in the outerscope. This inner scoped variable is
// assigned to the string 'qux' and is available up until the block that it's
// defined in is closed out. At that point, it ceases to be avaiable and ceases
// to shadow the outerscoped variable of the same name. Thus, when we attempt
// to access a variable named 'foo' on the last line of code, we successfully
// access the outer-scoped version which was and still is assigned to the string
// 'bar'


// Will this program produce an error when run? Why or why not?
// const FOO = 'bar';
// {
//   const FOO = 'qux';
// }
// console.log(FOO);
// ANS: No because the block creates a new scope for variables, including
// constants. That means we can create a new constant with the same name as an
// outer-scoped constant 

let var1 = 'hello';
{
  console.log(var1);
  // let var1 = 'world';
  console.log(var1);
}
console.log(var1);