    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // answers
    var solution = ['party', 'dude', 'excellent', 'radical'];

    // Pick random word
    var chooseWord = solution[Math.floor(Math.random() * solution.length)];

  // Other Variables
    var empty;
    var count = 0;
    // var answers = chosenLetters;
    var answerUnderscore = [];
    var guessList = document.getElementById('answer');
    var answerContainer = document.getElementById('solution-container')
    var solutionContainer = document.getElementById('solution-container-words')

// userTypes();


function startGame() {
  var newList = document.createElement('ul');
  answerContainer.appendChild(newList);
  newList.setAttribute('id', 'solution-list');  

  for (var i = 0; i < chooseWord.length; i++) {
    var solutionItem = document.createElement('li');
    answerUnderscore[i]
     solutionItem.innerHTML = answerUnderscore;
     newList.appendChild(solutionItem);
    
  }


}
startGame();

// // 1. After user presses key, the key pressed is added to a list of guesses
      // detect key press
    // chosen letters
    // empty array to hold typed letters that go on screen
    var chosenLetters = [];
    // empty array to hold correct typed choices
    var correctChoices = [];
    // number of turns based on word length
    turnsTillWin = chooseWord.length;
    turnsTillLost = chooseWord.length;
    

document.addEventListener('keyup', function(e) { //listen to the keyboard events
// log guessed letters on screen
  var make = event.key;
  chosenLetters.push(make);
 //  console.log(make);
  var place = '<p>' + chosenLetters + '</p>';
  document.getElementById('user-text').innerHTML = place;
 
    if (chooseWord.indexOf(e.key) > -1) { //if clicked letter is included inside the words
      var choice = alphabet.splice(alphabet.indexOf(e.key), 1);
      // add correct choices to an array
      correctChoices.push(choice);
      console.log('correct letter');
   
        var makeAnswer = e.key;
        var toScreen = correctChoices.join('');
        document.getElementById('solution-container-words').innerHTML = toScreen;


      turnsTillWin--;


    } else {
      // subtract turns
      turnsTillLost--;
      // alert('you have ' + turns + ' left');
      console.log('incorrect letter');
      
    }
    console.log(JSON.stringify(alphabet));
     //show the alphabet and its actual state
  
});

    
  



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


// PUT answer into a variable
// check to see if typed key matches and letters in answer




// 3. If user presses wrong key then they the number of guesses remaining decreases
// 4. If user preses the wrong key a part of the man appears under the gallow.