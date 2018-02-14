var inquirer = require("inquirer");
var Word = require("./Word.js");
var clear = require("clear");

var guessesLeft;
var lettersGuessed;
var randomNumberToPickWord;
var randomWordChosen;
var hintForUser;
var currentWord;


var wordBank = [
    "bug", "dove", "snake", "donkey", "pitbull",
    "elephant", "ostrich", "lion", "penguin", "giraffe"];
var wordBankHints = [
    "Creepy Little Things", "A white Bird", "Sssssssss", "Hee Hawww",
    "Best Dog Breed in the World", "I have a Trunk", "I am a bird with a long Neck",
    "King of the Jungle", "I wear a Tux", "Toyz R/US Nicknamed me Jeffery"]

clear();
chooseWord();
function chooseWord() {
    guessesLeft = 5;
    console.log("ANIMAL HANGMAN\n");
    console.log("Guesses Left: " + guessesLeft);
    lettersGuessed = [];
    randomNumberToPickWord = Math.floor(Math.random() * wordBank.length)
    randomWordChosen = wordBank[randomNumberToPickWord];
    hintForUser = wordBankHints[randomNumberToPickWord];
    currentWord = new Word(randomWordChosen, hintForUser);
    // hangman.wordString(randomWordChosen, hintForUser);
    currentWord.wordString()
    userChoice();

}

function userChoice() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter a Letter",
                name: "userLetterEntered",
                validate: function (value) {
                    if (/[a-zA-Z]/.test(value)) {
                        return true
                    } else {
                        return "Enter a valid Letter a-z or A-Z"
                    }
                }
            }
        ])
        .then(function (inquirerResponse) {
            if (/[a-zA-Z]/.test(inquirerResponse.userLetterEntered)) {

                var answer = inquirerResponse.userLetterEntered.toLowerCase();
                console.log("You Entered: " + answer);

                currentWord.checkLetterGuessed(answer);
                lose(answer)

            }
        });
}




function lose(answer) {
    if (guessesLeft === 0) {
        console.log("You Lose, Would you like to play again?");
        playAgain()
    } else if (!currentWord.checkLetterGuessed(answer) === true) {
        guessesLeft--
        console.log("Guesses Left: " + guessesLeft);
        currentWord.wordString()
        userChoice();
    } else if (currentWord.checkLetterGuessed(answer) === true) {
        console.log("Guesses Left: " + guessesLeft);
        currentWord.wordString()
        userChoice();
    }
}

function playAgain() {
    inquirer
        .prompt({
            name: "playorquit",
            type: "rawlist",
            message: "Would you like to [PLAY AGAIN] or [QUIT] the game?",
            choices: ["PLAY AGAIN", "QUIT"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.playorquit.toUpperCase() === "PLAY AGAIN") {
                clear();
                chooseWord();
            }
            else {
                endGame();
            }
        });
}

function endGame() {
    console.log("Goodbye, and Thanks for Playing!");

}