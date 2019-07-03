// I. Variables & Datatypes
//  A. Q + A
//    How do we assign a value to a variable?
//      "="
//    How do we change the value of a variable?
//      reassign
//    How do we assign an existing variable to a new variable?
//      "="
//    Remind me, what are declare, assign, and define?
//      declare: 1st time variable is named using "let" or "const" 
//      assign: a value is assigned to the declared variable using
//      "="
//      define: assigns a value or properties of an object or 
//      function
//    What is pseudocoding and why should you do it?
//      Clear simple statements in plain english (for moi)
//      that outlines the steps of code required to perform task. 
//    What percentage of time should be spent thinking about how 
//    you're going to solve a problem vs actually typing in code to 
//    solve it?
//      90%    

//  B. Strings
//    Create a variable called firstVariable.
//    Assign it the value of the string "Hello World"

let firstVariable = "Hello World";

//    Change the value of this variable to some number.

firstVariable = 45;

//    Store the value of firstVariable in a new variable called 
//    secondVariable

secondVariable = firstVariable;

//    Change the value of secondVariable to any string.

secondVariable = "any string";

//    What is the value of firstVariable?
//      => 45

console.log(firstVariable);

//    Create a variable called yourName and set it equal to your 
//    name as a string. Then, write an expression that takes the 
//    string "Hello, my name is " and the variable yourName so 
//    that it returns a new string with them concatenated.
//    ex: Hello, my name is Jean Valjean

let yourName = "Stacey";
console.log("Hello, my name is " + yourName + ".");

//  C. Booleans
//    Using the provided variable definitions, replace the blanks
//    so that all log statements print true in the console. Answers
//    should be all be valid JS syntax and not weird things that 
//    don't make sense but happen to print true to the console.
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

//  console.log(a __ b);

console.log(a < b);

//  console.log(c __ d);

console.log(c > d);

//  console.log('Name' __ 'Name');

console.log('Name' == 'Name');

//  FOR THE NEXT TWO, USE ONLY && OR ||
//  console.log(true __ false);

console.log(true || false);

//  console.log(false __ false __ false __ false __ false __ true);

console.log(false || false || false || false || false || true);

//  console.log(false __ false)

console.log(false === false);

//  console.log(e ___ 'Kevin');

console.log(e == 'Kevin');

//  console.log(a __ b ___ c); // note: a < b < c is NOT CORRECT 
//	(and is not a valid JS expression)

console.log(a + b == c);

//  console.log(a __ a ___ d); // note: the answer is a simple 
//	arithmetic equation, not something "weird"

console.log(a * a == d);

//   console.log(48 __ '48');

console.log(48 == '48');

// D. The farm
// 	Declare a variable animal. Set it to be either "cow" or 
//	something else. Write code that will print out "mooooo" if 
//	the it is equal to cow. Change your code so that if the 
// 	variable animal is anything other than a cow, it will print 
//	"Hey! You're not a cow."

// E. Driver's Ed
// Make a variable that holds a person's age. Be semantic.

// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."