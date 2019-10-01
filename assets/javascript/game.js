var wins = 0;
var currentWord = [];
var guessesRemaining = 7;
var guesses = [];
var currentAnimal = [];
var animals = ["turtle", "parrot", "dolphin", "elephant", "giraffe", "eagle"];
var animalLetters = [];

console.log(animals);

function updateAnimalSelected() {
    currentAnimal = animals[Math.floor(Math.random() * animals.length)];
    console.log("Starting new game");
    console.log("The animal is " + currentAnimal);
}



updateAnimalSelected();

var animalLetters = currentAnimal.split('');
console.log(animalLetters);
console.log("the letters in the array are " + animalLetters);

function updateGuessed() {
    document.querySelector("#guessed").innerHTML = "Letters guessed so Far: " + guesses;
}

updateGuessed();

document.onkeyup = function (event) {
    if (animalLetters.includes(event.key)) {
        console.log("Correct letter " + event.key);
        guesses.sort()
        guesses.push(event.key);
        updateGuessed();
        console.log(guesses);
    } else {
        console.log("Wrong Letter " + event.key);
        console.log(guesses);
        updateGuessed();
    }
}