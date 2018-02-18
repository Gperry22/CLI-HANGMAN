// Letter.js: Contains a constructor, Letter.This constructor should be able to either display an underlying 
// character or a blank placeholder(such as an underscore), depending on whether or not the user has guessed the letter.
// That means the constructor should define:

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder(like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
// ==========================================================================================
var Letter = function (letter) {
    this.letter = letter
    this.letterGuessedCorrectly = false;   

    this.letterOuput = function () {
        if (this.letterGuessedCorrectly === true) {
            return this.letter
        } else {
            return "_"
        }
    }
    //Method that will tell us if the letter appears or if "_" will appear.
    this.checkLetter = function (guessedLetter) {
        if (guessedLetter === this.letter) {
            this.letterGuessedCorrectly = true;
            return true;
        }
    }
};

//Testing the constructor******************************************
// var x = new Letter("G");
// console.log(x.theWordLetters);
// console.log(x.letterin("G"));
// console.log(x.letterin("T"));
// console.log(x.letterGuessedCorrectly);
// console.log(x.currentLetter);
//End of Testing the constructor***********************************

// ==========================================================================================
//export the constructor
module.exports = Letter;