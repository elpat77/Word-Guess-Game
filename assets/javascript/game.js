// create variables needed to keep track of the score and run the game
var wins = 0;
var guessesRemaining = 7;
var answerArray = [];

// create an array that contains the game words
var animals = ["turtle", "parrot", "dolphin", "elephant", "giraffe", "eagle"];
console.log("Starting new game");

// create an array that will get a random location
var randomNum = Math.floor(Math.random() * animals.length);
console.log("I'm thinking of the animal at position " + randomNum);

// create an array that will get the word assocaiated with that random location
var randomAnimal = animals[randomNum];
console.log("The animal I'm thinking of is " + randomAnimal);

// create a new variable that counts the letters in the chosen word, 
// converts and displays that number into a _ character  
var chosenWord = [];
for (var i = 0; i < randomAnimal.length; i++) {
    chosenWord.push(" _ ");
}

// create a function that will update the word in the front end
function updateGuesses() {
    document.querySelector("#guessed").innerHTML = "Word to be guessed: " + chosenWord;
};

// starts the function, since the array is empty, it will only display _ upo to the word lenght
updateGuesses();

// takes the user input 
document.onkeyup = function (event) {
    console.log("key pressed " + event.key);

    // create a loop that will update the chosen word if the kety pressed matches any of the letters in the chosen word

    for (var i = 0; i < randomAnimal.length; i++) {
        if (randomAnimal[i] === event.key) {
            chosenWord[i] = event.key;
            console.log("Correct letter " + event.key);
            updateGuesses();
        }
    }
}




