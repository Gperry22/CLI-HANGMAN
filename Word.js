// Word.js: Contains a constructor, Word that depends on the Letter constructor.This is used to create an object representing the current word the user is attempting to guess.That means the constructor should define:
// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word.This should call the function on each letter object(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in Letter.js)


var Letter = require("./Letter.js");

var Word = function (currentWord, hint) {
    this.currentWordArray = [];
    for (let i = 0; i < currentWord.length; i++) {
        var newLetter = new Letter(currentWord[i]);
        this.currentWordArray.push(newLetter);
    }

    this.wordString = function () {
        this.letterOutputArray = [];
        for (let i = 0; i < this.currentWordArray.length; i++) {
            var outputLetter = this.currentWordArray[i].letterOuput();
            this.letterOutputArray.push(outputLetter);
        }
        console.log("\n" + hint);
        console.log(this.letterOutputArray.join(" "));
    }

    this.checkLetterGuessed = function (guessedLetter) {
        for (let i = 0; i < this.currentWordArray.length; i++) {
            this.currentWordArray[i].checkLetter(guessedLetter);


        }
    }
}

// var gabe = new Word ("bull", "horns");
// gabe.wordString();
// gabe.checkLetterGuessed('u');
// console.log(gabe.currentWordArray);
// console.log(gabe.currentWordArray[1]);

module.exports = Word;