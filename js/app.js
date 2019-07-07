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

// 	E. Mix It Up
// 	Note: You don't really need .splice() for these. You could use it, 
//	but there are simpler array methods that are more appropriate.
// 	Given the following array: 

const myArray = [5, 10, 500, 20];

// 	Add the string "Egon" to the end of the array. Add another string 
//	of your choice to the end of the array.

myArray[4] = "Egon";
myArray[5] = "Igor";
console.log(myArray);

// 	Remove the 5 from the beginning of the array.

myArray.shift();
console.log(myArray);

// 	Add the string "Bob Marley" to the beginning of the array.

myArray.unshift("Bob Marley");
console.log(myArray);

// 	Remove the string of your choice from the end of the array.

myArray.pop();
console.log(myArray);

// 	Reverse this array using Array.prototype.reverse(). 

myArray.reverse();
console.log(myArray);
console.log(myArray.reverse());

//	Did you mutate the array? What does mutate mean? Did the .reverse() 
//	method return anything?

// 		Yes the array was mutated, or changed. It returned the original 
//		array with the elements in reverse indexed order. 

// 	F. Biggie Smalls
// 	Create a variable that contains an integer.

let int = 1

// 	Write an if ... else statement that:
// 	console.log()s "little number" if the number is entered is less 
//	than 100, console.log()s big number if the number is greater than 
//	or equal to 100.

if(int < 100){
	console.log("little number");
} else {
	console.log("big number");
}

int = 100
if(int < 100){
	console.log("little number");
} else {
	console.log("big number");
}

// 	G. Monkey in the Middle
// 	Write an if ... else if ... else statement:
// 	console.log() little number if the number entered is less than 5.
// 	If the number entered is more than 10, log big number.
// 	Otherwise, log "monkey". 

int = 2
if(int < 5){
	console.log("little number");
} else if (int > 10){
	console.log("big number");
} else {
	console.log("monkey");
}

int = 15
if(int < 5){
	console.log("little number");
} else if (int > 10){
	console.log("big number");
} else {
	console.log("monkey");
}

int = 8
if(int < 5){
	console.log("little number");
} else if (int > 10){
	console.log("big number");
} else {
	console.log("monkey");
}


// 	H. What's in Your Closet?
// 	Below, we've given you examples of Kristyn and Thom's closets 
//	modeled as data in JavaScript.

const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "GA hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
];

// 	Thom's closet is more complicated. Check out this nested data 
//	structure!!
const thomsCloset = [
	[
     // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
   	],[
     // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
   	],[
     // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
   	]
];
// 	What's Kristyn wearing today? Using bracket notation to access
//	items in kristynsCloset, log the sentence "Kristyn is rocking 
//	that " + the third item in Kristyn's closet + " today!" to the 
//	console.

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// 	Kristyn just bought some sweet shades! Add "raybans" to her 
//	closet after "yellow knit hat".

kristynsCloset.splice(6,0,"raybans");
console.log(kristynsCloset);

// 	Kristyn spilled coffee on her hat... modify this item to read 
//	"stained knit hat" instead of yellow.

kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

// 	Put together an outfit for Thom! Using bracket notation, access 
//	the first element in Thom's shirts array.

console.log(thomsCloset[0][0]);

// 	In the same way, access one item from Thom's pants array.

console.log(thomsCloset[1][2]);

// 	Access one item from Thom's accessories array.

console.log(thomsCloset[2][1]);

// 	Log a sentence about what Thom's wearing. Example: "Thom is looking 
//	fierce in a grey button-up, jeans and wool scarf!" =

console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][2] + " and " + thomsCloset[2][1] + "!");

// 	Get more specific about what kind of PJs Thom's wearing this winter. 
//	Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1]);

// IV. Functions
// 	A. printGreeting
// 	Do you think you could write a function called printGreeting with 
//	a parameter name that returns a greeting with the argument 
//	interpolated into the greeting?	Like so?
// 	console.log(printGreeting("Slimer"));
// 	=> Hello there, Slimer! You think you could? I think so too. Feel 
//	free to skip this problem, because you've already done it. If you've 
//	done the problem twice, read entire problems carefully before doing 
//	them from now on.

// 	B. printCool
// 	Write a function printCool that accepts one parameter, name as an 
// 	argument. The function should print the name and a message saying 
//	that that person is cool.
// 	console.log(printCool("Captain Reynolds")); 
//	=> "Captain Reynolds is cool";

function printCool(name){
	console.log(`${name} is cool`);
}

printCool("Stacey");

// 	C. calculateCube
// 	Write a function calculateCube that takes a single number and prints 
//	the volume of a cube made from that number.
// 	console.log(calculateCube(5));	=> 125

function calculateCube(num) {
	console.log(Math.pow(num,3));
}

calculateCube(5);

// 	D. isVowel
// 	Write a function isVowel that takes a character (i.e. a string of 
//	length 1) and returns true if it is a vowel, false otherwise. The 
//	vowel could be upper or lower case. Test your function on every vowel 
//	and make sure it's working. In general, when you write functions, 
//	take a minute to test them with different values to make sure they 
//	behave the way you want.
// 	console.log(isVowel("a"));	=> true

//	method taken from: https://dev.to/worldclassdev/javascript-algorithms-1-counting-the-vowels-in-a-string-oftext-5ejl
function isVowel(letter){
	const vowels = ["a", "e", "i", "o", "u"];
	let char = letter;
	if(vowels.includes(char.toLowerCase())){
		return true;
	} else{
		return false;
	}
}

console.log(isVowel("o")); //--> true
console.log(isVowel("Z")); //--> false
console.log(isVowel("A")); //--> true
console.log(isVowel("&")); //--> false
console.log(isVowel("3")); //--> false
// 🔴 Commit.

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

// 🔴 Commit.

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

// 🔴 Commit.

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().

// 🔴 Commit.

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

// 🔴 Commit.

// I. transmogrify
// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

// console.log(transmogrify(5, 3, 2));
// => 225

// 🔴 Commit.

// J. reverseWordOrder v2
// Without using .split(), .reverse(), or .join(), write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

// See if you can do it without googling.

// Remember: You can index directly into a string:

// "hello world"[7]
// => "o"

// That and basic loops and variables and arrays are all you need to solve this without the Array methods.

// console.log(reverseWordOrder("Ishmael me Call"));
// => "Call me Ishmael"

// console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"

// 🔴 Commit.

// K. Get down and dirty with Math.random()
// Write a function that will return a random integer between 1 and 10. Test it.
// Write a function that will return a random integer between 10 and 100. Test it.
// Write a function that will return a random number between 532 and 13267. Test it.
// Write a function that will return a random number between 1 and 10. Test it.
// Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array. Call your function a few times, passing in the quotes array. Give it a nice semantic name like getRandomElement.
// 🔴 Commit.

// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
// 🔴 Commit.

// B. Update the user
// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
// 🔴 Commit.

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
// 🔴 Commit.

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
// Console.log just the "Merino jodhpurs" from the purchased array.
// 🔴 Commit.

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friend with a name and age, we could write:

// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friend object added to our user object.

// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
// Console.log just "A latte" from the friend's purchased array.
// 🔴 Commit.

// F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
// 🔴 Commit.

// G. Functions can operate on objects
// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
// 🔴 Commit.


