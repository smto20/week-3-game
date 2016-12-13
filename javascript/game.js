//Letter choices:
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all counters to qty at beggining of game:
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//Computer chooses random letter from the options:
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//User has 9 guesses:
var updateGuessesLeft = function() {

  //Grab HTML element and set equal to guessesLeft:
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function() {

  //Display guesses user has entered:
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){

            if (userGuess == letterToGuess){

                wins++;

                document.querySelector('#wins').innerHTML = "Wins: " + wins;

                alert("You are psychic!");

                reset();

            }

        }else if(guessesLeft == 0){

            // Lose and update the html to show loss

            losses++;

            document.querySelector('#losses').innerHTML = "Losses: " + losses;

            alert("Sorry, try again?");

            // Then reset. 

            reset();

        }

};
