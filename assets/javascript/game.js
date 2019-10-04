// create variables needed to keep track of the score and run the game
var wins = 0;
var guessesRemaining = 7;
var answerArray = [];

// create an array that contains the game words
var words = ["turtle", "parrot", "dolphin", "elephant", "giraffe", "eagle"];
// create an array that will grab a random word 
var animal = words[Math.floor(Math.random() * words.length)];
console.log("Starting new game");
console.log("The animal to guess is " + animal);

// create a new variable that counts the letters in the selected word, 
// and converts it into a _ character  
var guesses = [];
for (var i = 0; i < animal.length; i++) {
    guesses[i] = "_";
}
console.log("empty letters" + guesses);


// Take the [animal] array and break the word into letters
// placing those letters into a new array [animallLetters] 
var animalLetters = [];
var animalLetters = animal.split('');
console.log(animalLetters);
console.log("the letters in the animal array are " + animalLetters);


// Create a function which displays the guesses variable.  
function updateGuesses() {
    document.querySelector("#guessed").innerHTML = "Your guesses will display here: " + guesses;
}
// starts the function, since the arrayis empty, it should start with only "_" up to the animal word length
updateGuesses();

// Create a conditional which takes the user input and pushes it into the guesses variable 
// if the letter is present in the animalLetters array

document.onkeyup = function (event) {
    if (animalLetters.includes(event.key)) {
        //pushes that word into the array, need to figure out how to push it into the apropiate space
        guesses.push(event.key);
        console.log("Correct letter " + event.key);


        //sorts the letter returned and places it in the correct order
        guesses.sort(function (a, b) {
            return animalLetters.indexOf(a) - animalLetters.indexOf(b);
        });


        // guesses.splice(0, 3, event.key);
        updateGuesses();
        console.log(guesses);
    } else {
        console.log("Wrong Letter " + event.key);
        console.log(guesses);
        updateGuesses();
    }

}



