
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

    var solution = 'party';
// userTypes();

// reference

// for (var i = 0; i < drinkList.length; i++) {
//   var newItem = document.createElement('li');
//     newItem.innerHTML = drinkList[i];
//     newList.appendChild(newItem);
//   }

// var newDiv = document.createElement("div");
// newDiv.innerHTML = "A pleasure to meet you!";

// targetDiv.appendChild(newDiv);

// // We then apply that CSS to our newDiv.
// newDiv.setAttribute("class", "fancy");


// 2. If the user presses a key that matches the letter appears under hangman

// targert answer UL
var revealList = document.getElementsByClassName('match');

// PUT answer into a variable
// check to see if typed key matches and letters in answer
// If is pop out the letter from the answer variable (array?)
// put array variable on the the screen to show user guess is correct

// revealList.setAttribute('class', 'party');

// add class to list item
// var newItem = document.createElement('li');


//     function correctGuess() {
   
//     }
//     correctGuess();



// 3. If user presses wrong key then they the number of guesses remaining decreases
// 4. If user preses the wrong key a part of the man appears under the gallow.