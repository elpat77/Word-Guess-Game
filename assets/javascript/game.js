//create variables needed to keep track of the score and run the game
var wins = 0;
var guessesRemaining = 7;
var guesses = [];

// create an array that contains the game words
var animals = ["turtle", "parrot", "dolphin", "elephant", "giraffe", "eagle"];

//create an array that will hold the actual word to be guessed
var currentAnimal = [];

//create an array that will hold the actual letters of the word to be guessed
var animalLetters = [];

console.log(animals);

//Step 1) Create a function that randomly selects a word from an array [animals] 
//and places it into a new array [currentAnimal]

function updateAnimalSelected() {
    currentAnimal = animals[Math.floor(Math.random() * animals.length)];
    console.log("Starting new game");
    console.log("The animal is " + currentAnimal);
}

updateAnimalSelected();

// Step 2) Take the [currentAnimal] array and break the work into letters
// placing those letters into a new array [animallLetters]  
var animalLetters = currentAnimal.split('');
console.log(animalLetters);
console.log("the letters in the array are " + animalLetters);

// Step 3) Create a function which update the letters that the user inputs
function updateGuesses() {
    document.querySelector("#guessed").innerHTML = "Letters guessed so Far: " + guesses;
}

updateGuesses();

//Styep 4)create a conditional which takes the user input and pushes it into the guesses variable 
//if the letter is present in the animalLetters array

document.onkeyup = function (event) {
    if (animalLetters.includes(event.key)) {
        console.log("Correct letter " + event.key);
        guesses.push(event.key);
        updateGuesses();
        console.log(guesses);
    } else {
        console.log("Wrong Letter " + event.key);
        console.log(guesses);
        updateGuesses();
    }
}

// Step 5) Compare and return the correct position of the letter guesses against the current Animal word


// Step 6 ) Display the letter in the correct position order on the game,  
// Once all letters are selected end the game.
// if a letter is already slected, don't count this as another entry
