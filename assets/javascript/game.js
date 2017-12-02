
// // 1. After user presses key, the key pressed is added to a list of guesses
      // detect key press
    document.addEventListener('keyup', userTypes);
    var chosenLetters = [];

    function userTypes (event) {
      var make = event.key;
      chosenLetters.push(make);
      console.log(make);

      var place = '<p>' + chosenLetters + '</p>';
      
      return document.getElementById('user-text').innerHTML = place;
      // return 
    }
// userTypes();

// reference
// for (var i = 0; i < drinkList.length; i++) {
//   var newItem = document.createElement('li');
//     newItem.innerHTML = drinkList[i];
//     newList.appendChild(newItem);
//   }


// 2. If the user presses a key that matches the letter appears under hangman

// targert answer UL
var revealList = document.getElementsById('answer');

// add class to list item
var newItem = document.createElement('li');

    function correctGuess() {
   
    }
    correctGuess();



// 3. If user presses wrong key then they the number of guesses remaining decreases
// 4. If user preses the wrong key a part of the man appears under the gallow.