var wins = 0;
var currentWord = [];
var guessesRemaining = 7;
var lettersGuessed = [];
var animalSelected = [];
var animals = ["turtle", "parrot", "dolphin", "elephant", "girraffe", "eagle"];


console.log(animals);

function updateAnimalSelected() {
    animalSelected = animals[Math.floor(Math.random() * animals.length)];
    console.log("Starting new game");
    console.log("The animal is " + animalSelected);
}
updateAnimalSelected();
console.log(animalSelected);