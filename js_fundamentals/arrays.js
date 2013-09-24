// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
top_choices = ["Green", "Obama", "Tuesday's with Morrie"];

for (var i = 0; i < top_choices.length; i++) {
	if (i == 0) {
		alert("My 1st choice is " + top_choices[i]);
	}
	else if(i == 1) {
		alert("My 2nd choice is " + top_choices[i]);
	}
	else {
		alert("my 3rd choice is " + top_choices[i]);
	}
}



