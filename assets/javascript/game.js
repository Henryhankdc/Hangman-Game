
// 1. get key pressed by user and add to this id in list item
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


// 1. After user presses key, the key pressed is added to a list of guesses
// 2. If the user presses a key that matches the letter appears under hangman
// 3. If user presses wrong key then they the number of guesses remaining decreases
// 4. If user preses the wrong key a part of the man appears under the gallow.