
// get key pressed by user and add to this id

var userText = document.getElementById("user-text");

var guesses = [];

document.onkeyup = function(event) {
    userText.textContent = event.key;
    console.log(userText);
  };

// 1. After user presses key, the key pressed is added to a list of guesses
// 2. If the user presses a key that matches the letter appears under hangman
// 3. If user presses wrong key then they the number of guesses remaining decreases
// 4. If user preses the wrong key a part of the man appears under the gallow.