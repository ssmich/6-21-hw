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

let animal = "cow";
if(animal == "cow"){
	console.log("moooo");
} else {
	console.log("Hey! You're not a cow.")
}

animal = "something else";
if(animal == "cow"){
	console.log("moooo");
} else {
	console.log("Hey! You're not a cow.")
}

// E. Driver's Ed
// 	Make a variable that holds a person's age. Be semantic.

let age = 0;

// 	Write code that will print out "Here are the keys!", if the
// 	age is 16 years or older, or, if the age is younger than 16, 
// 	a message should print "Sorry, you're too young."

age = 16;
if (age < 16){
	console.log("Sorry, you're too young");
} else {
	console.log("Here are the keys!");
}

age = 14;
if (age < 16){
	console.log("Sorry, you're too young");
} else {
	console.log("Here are the keys!");
}

// II. Loops
//	A. The basics
//	Write a loop that will print out all the numbers from 0 to 10, 
//	inclusive.

for(let i = 0; i < 11; i++){
	console.log(i);
}
//	Write a loop that will print out all the numbers from 10 up to 
//	and including 400.

for(let i = 10; i <= 400; i++){
	console.log(i);
}

//	Write a loop that will print out every third number starting 
//	with 11 and going no higher than 4000.

for(let i = 11; i <= 4000; i+=3){
	console.log(i);
}

//	B. Get even
//	Print out the numbers that are within the range of 1 - 100.

for(let i = 1; i <= 100; i++){
	console.log(i);
}

//	Adjust your code to add a message next to even numbers only that 
//	says: "<-- is an even number".

for(let i = 1; i <= 100; i++){
	if(i % 2 ===0){
		console.log(`${i} <-- is an even number`);
	} else {
		console.log(`${i}`);
	}
}

// 	C. Give me Five
//	For the numbers 0 - 100, print out "I found a number. High five!" 
//	if the number is a multiple of five.
//	Example Output:
//	I found a 5. High five!
//	I found a 10. High five!

for(let i = 0; i <= 100; i++){
	if(i % 5 === 0){
		console.log("I found a " + i + ". High five!");
	}
}
//	Add to the code from above to print out "I found a number. Three is 
//	a crowd" if the number is a multiple of three.
//	Example Output:
// 	I found a 3. Three is a crowd
// 	I found a 5. High five!
// 	I found a 6. Three is a crowd
// 	I found a 9. Three is a crowd
// 	I found a 10. High five!
// 	For numbers divisible by both three and five, be sure your code 
//	prints both messages.

for(let i = 0; i <= 100; i++){
	if(i % 5 === 0){
		console.log("I found a " + i + ". High five!");
	} if (i % 3 === 0){
		console.log("I found a " + i + ". Three is a crowd");
	} 
}

// D. Savings account
// 	Write code that will save the sum of all the numbers between 1 - 10 
//	to a variable called bank_account.
// 	Check your work! Your banck_account should have $55 in it.

let bank_account = 0;
for(let i = 0; i <=10; i++){
	bank_account +=i;
}

console.log(`$${bank_account}`);

// 	You got a bonus! Your pay is now doubled each week. Write code that 
//	will save the sum of all the numbers between 1 - 100 multiplied by 2.
// 	Check your work! Your banck_account should have $10,100 in it.

bank_account = 0;
for(let i = 1; i <=100; i++){
	bank_account +=(i*2);
}

console.log(`$${bank_account}`);

// E. Multiples of 3 and 5
// 	If we list all the natural numbers below 10 that are multiples of 
//	3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// 	Find the sum of all the multiples of 3 or 5 below 1000. If a 
//	previous question you've done has helpful bits of code in it that 
//	partially solves this problem, look back at them.

// 	You just solved Project Euler problem 1!

// 	Are you having dejà vu? This just in! From the "Read the entire 
//	problem before you start" dept: This problem was on a previous 
//	assignment. You may skip it if you've already done it, just include 
//	a comment saying that you've already done it. If you've now done 
// 	the problem twice, perhaps next time you'll read the whole problem 
//	before starting it.

// 		Already done it. 

// III. Arrays & Control flow
// 	A. Talk about it:
// 	What are the things in an array called?

//		elemenst

// 	Do Arrays guarantee those things will be in order?

//		no

// 	What real-life thing could you model with an array?

// 		Grocery items, students in class

// 	B. Easy Does It
// 	Create an array that contains three quotes and store it in a 
//	variable called quotes.

const quotes = ["2 legit 2 quit", "Got it goin like a turbo jet", "Check it, direct it, lets begin"];

// 	C. Accessing elements
// 	Given the following array 

const randomThings = [1, 10, "Hello", true]

// 	How do you access the 1st element in the array?

console.log(randomThings[0]);

// 	Change the value of "Hello" to "World".

randomThings[2] = "World";

// 	Check the value of the array to make sure it updated the array. 
//	How? Why, yes! console.log();

console.log(randomThings[2]);

// 	D. Change values
// 	Given the following array 

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?

console.log(ourClass[2]);

// Change the value of "Github" to "Octocat"

ourClass[4] = "Octocat";
console.log(ourClass[4]);

// Add a new element, "Cloud City" to the array.

ourClass.push("Cloud City");
console.log(ourClass);
// 🔴 Commit.

// E. Mix It Up
// Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]

// Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.

// Remove the 5 from the beginning of the array.

// Add the string "Bob Marley" to the beginning of the array.

// Remove the string of your choice from the end of the array.

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?

// 🔴 Commit.

// F. Biggie Smalls
// Create a variable that contains an integer.

// Write an if ... else statement that:

// console.log()s "little number" if the number is entered is less than 100

// console.log()s big number if the number is greater than or equal to 100.

// 🔴 Commit.

// G. Monkey in the Middle
// Write an if ... else if ... else statement:

// console.log() little number if the number entered is less than 5.

// If the number entered is more than 10, log big number.

// Otherwise, log "monkey". 

// 🔴 Commit.



