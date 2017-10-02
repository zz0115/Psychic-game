var wins = 0;
			var losses = 0;
			var guessesLeft = 9;
			var guess = []; 

			var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

			// This function is run whenever the user presses a key.
			document.onkeyup = function(event) {

		    // Determines which key was pressed.
		    var userGuess = event.key;

		    //push userGuess to guess array 
		    guess.push(userGuess);

       	    // Randomly chooses a choice from the options array. This is the Computer's guess.
		    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		    console.log(computerGuess);

		    if(guessesLeft != 0) {
			    if(userGuess.toLowerCase()==computerGuess) {
			    	wins++;
			    }

			    else {
			    	losses++;
			    	guessesLeft--;
			    	
			    }

			}

			else {
				guessesLeft = 9;
				guess = [];
			}

		
			// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
			var html =
			"<p>Guess what letter I'm thinking of" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + guessesLeft + "</p>" +
			"<p>Your Guesses so far: " + guess + "</p>";

        	// Set the inner HTML contents of the #game div to our html string
        	document.querySelector("#game").innerHTML = html;
		
	
		}