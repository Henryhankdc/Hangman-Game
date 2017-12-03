
// // 1. After user presses key, the key pressed is added to a list of guesses
      // detect key press
    // chosen letters
    var chosenLetters = [];
    
    document.addEventListener('keyup', userTypes);

    function userTypes (event) {  
      var make = event.key;
      chosenLetters.push(make);
      console.log(make);
      var place = '<p>' + chosenLetters + '</p>';
    
      return document.getElementById('user-text').innerHTML = place;
      // return 
    }
    

    // answers
    var solution = ['party', 'dude', 'excellent', 'radical'];

    // Pick random word
    var chooseWord = solution[Math.floor(Math.random() * solution.length)];

  // Other Variables
    var count = 0;
    var answers = chosenLetters;
    

// userTypes();


function startGame() {
  // for (var i = 0; i < drinkList.length; i++) {
//   var newItem = document.createElement('li');
//     newItem.innerHTML = drinkList[i];
//     newList.appendChild(newItem);
//   }


}

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
var revealList = document.getElementById('answer');

// PUT answer into a variable
// check to see if typed key matches and letters in answer
// var getChar = function(answer, chosenLetters){
//   for(var i=0;i<string.length;i++)
//   {
//     if(string.charAt(i)==chosenLetters) console.log(i);
//   }
// }



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