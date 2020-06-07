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

    
}
