// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var numberOfChildren = 5;
var partnersName = "Veronica"
var geographicLocation = "Top of Mount Everest";
var jobTitle = "Greeter";

"You will be a " + jobTitle + " at the " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.";

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
var currentYear = 2013;
var birthYear = 1987;
var possibleAge1 = currentYear - birthYear;
var possibleAge2 = possibleAge1 - 1;

"They are either " + possibleAge + " or " + possibleAge2 + ".";

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var currentAge = 36;
var maximumAge = 124;
var estAmountPerDay = 2;
var lifeTimeSupply = ((maximumAge - currentAge) * 365) * estAmountPerDay;

"You will need " + lifeTimeSupply + " to last you until the ripe old age of " + maximumAge + ".";



// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
var radius = 12;
var pi = Math.PI;
var circumference = 2 * pi * radius;
"The circumference is " + circumference + ".";


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.
var celsius = 38;
var fahrenheit = (celsius * (9/5)) + 32;
celsius + "°C is " + fahrenheit + "°F.";

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
var fahrenheit = 92;
var celsius = (fahrenheit - 32) * (5/9);
fahrenheight + "°F is " + celsius + "°C.";



