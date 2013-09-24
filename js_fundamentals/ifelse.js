// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
function greaterNum(num1, num2){
	if (num1 > num2){
		alert("The greater number of " + num1 + " and " + num2 + " is " + num1);
	}
	else if (num1 < num2){
		alert("The greater number of " + num1 + " and " + num2 + " is " + num2);
	}
	else{
		alert(num1 + " and " + num2 + " are equal");
	}
};

greaterNum(10, 6);
greaterNum(6, 10);
greaterNum(6, 6);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld (languageCode) {
	if (languageCode == "es") {
		alert("hola mundo");
	}
	else if (languageCode == "fr") {
		alert("Bonjour tout le monde");
	}
	else if (languageCode == "hn") {
		alert("हैलो दुनिया");
	}
	else {
		alert("Hello World");
	}
}
var spanish = "es"
var french = "fr"
var hindi = "hn"
var japanese = "jp"

helloWorld(spanish);
helloWorld(french);
helloWorld(hindi);
helloWorld(japanese);

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.
function assignGrade (score) {
	if (score > 80) {
		alert("You got an A! GREAT WORK!!!");
	}
	else if (score >= 70 ) {
		alert("You got a B! Congratulations on a great year");
	}
	else if (score >= 60) {
		alert("You got a C, not bad");
	}
	else if (score >= 50) {
		alert("You just passed with a D");
	}
	else {
		alert("You FAILED!");
	}
}

assignGrade(95);
assignGrade(72);
assignGrade(68);
assignGrade(51);
assignGrade(48);

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
function pluralize(noun, number) {
	if (number == 1) {
		alert(number + " " + noun);
	}
	else {
		alert(number + " " + noun + "s");
	}
}

pluralize("dog", 1);
pluralize("car", 17);




