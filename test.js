var letters = "[a],, [b], [c], [d]";
var userInput = [];

document.onkeyup = function (event) {
    if (letters.includes(event.key)) {
        console.log("Correct letter " + event.key);
    }
}