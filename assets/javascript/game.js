// Variable that holds all game logic.
var wordGuessGame = {

    // object that holds words to be chosen / imgs.
    wordsToPick: {
        apple: {
            img: "apple.png",
        }
        // FILL IN WORDS.
    },

    // variables.
    wordInPlay: null,
    lettersOfTheWord: [],
    matchedLetters: [],
    guessLetters: [],
    guessesleft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0,

    // Initializes game.
    setUpGame: function() {
        var objkeys = Object.keys(this.wordsToPick);
        this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];
        this.lettersOfTheWord = this.wordInPlay.split("");
        this.rebuildWordView();
        this.updateTotalGuesses();
    },
    // Updates page
    updatePage: function(letter) {
        if(this.guessesLeft === 0) {
            this.restartGame();
        }
        else {
            this.updateGuesses(letter);
            this.updateMatchedLetters(letter);
            this.rebuildWordView();
            if (this.updateWins() === true) {
                this.restartGame();
            }
        }
    },
    // Wrong guess logic.
    updateGuesses: function(letter) {
        if ((this.guessLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {
            // adds letter to guessedLetters array.
            this.guessedLetters.push(letter);
            // Subjects 1 from guesses.
            this.guessesLeft--;

            // Updates guesses and letters.
            document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
            document.querySelector("#guessed-letters").innerHTML = this.guessedLetters.join(", ");
        }
    },

    // Sets initial guesses.
    processUpdateTotalGuesses: function() {
        // Increases guesses based on word length.
        this.totalGuesses = this.lettersOfTheWord.length + 5;
        this.guessesLeft = this.totalGuesses;
        
        // Updates guessesLeft.
        document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
    },

    // successful Guess logic.
    updateMatchedLetters: function(letter) {
        for (var i = 0; i < this.lettersOfTheWord.length; i++) {
            if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
                this.matchedLetters.push(letter);
            }
        }
    },

    

}
