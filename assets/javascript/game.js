var randomLetter = "";
var possibleLetters = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuess = "";
var yourGuesses = "";

//GENERATE RANDOM LETTER
function generateRandomLetter() {
	randomLetter = possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
}

generateRandomLetter();
console.log(randomLetter);

//GATHER USER LETTER
document.onkeyup = function(event) {
	yourGuess = String.fromCharCode(event.keyCode).toLowerCase();
	yourGuesses += String.fromCharCode(event.keyCode).toLowerCase();

	//DISPLAY USER LETTER
	

	//COMPARE USER LETTER WITH RANDOM LETTER

	if (wins < 10 && losses < 10) {
		document.getElementById("guesses").innerHTML = yourGuesses;

		if (guessesLeft > 0) {
    		if (yourGuess == randomLetter) {
        		wins ++;
        		document.getElementById("wins").innerHTML = wins;

        		guessesLeft=10;
        		document.getElementById("guesses-left").innerHTML = guessesLeft;

        		yourGuesses="";
        		document.getElementById("guesses").innerHTML = yourGuesses;

        		generateRandomLetter();
				console.log(randomLetter);
        	} else {
        		guessesLeft--;
        		document.getElementById("guesses-left").innerHTML = guessesLeft;
        	}
    	} else {
    		losses++;
    		document.getElementById("losses").innerHTML = losses;

    		guessesLeft=10;
        		document.getElementById("guesses-left").innerHTML = guessesLeft;

        		yourGuesses="";
        		document.getElementById("guesses").innerHTML = yourGuesses;

        		generateRandomLetter();
				console.log(randomLetter);
    	}
	} else {
		document.getElementById("guesses").innerHTML = "";
		guessesLeft = 0;
		document.getElementById("guesses-left").innerHTML = guessesLeft;

	}

	}; 