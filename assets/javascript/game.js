    // Variables needed

    // alphabet with extra letters
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // answers
    var solution = ['party', 'dude', 'excellent', 'radical', 'awesome', 'bummer'];

    // Pick random word
    var chooseWord = solution[Math.floor(Math.random() * solution.length)];

  // Other Variables
    var empty;
    var count = 0;
    var answerUnderscore = [];
    var guessList = document.getElementById('answer');
    var answerContainer = document.getElementById('solution-container')
    var solutionContainer = document.getElementById('solution-container-words')
    // empty array to hold chosen letters
    var chosenLetters = [];
    // empty array to hold correct typed choices
    var correctChoices = [];
    // number of turns based on word length
   var turnsTillWin = chooseWord.length;
   var turnsTillLost = 7;
   var trys = 6;
   var trysTillWin = 0;
 
    

function startGame() {
  // Build out list of blank spaces for chosen word

  // create unordered list to hold chosen word
  var newList = document.createElement('ul');
  answerContainer.appendChild(newList);
  newList.setAttribute('id', 'solution-list');  

  for (var i = 0; i < chooseWord.length; i++) {
// Loop through chosen word to create list item underscors for hint word
    var solutionItem = document.createElement('li');
    answerUnderscore[i]
     solutionItem.innerHTML = answerUnderscore;
     newList.appendChild(solutionItem);
    
  }
}
startGame();


    

document.addEventListener('keyup', function(e) { //listen to the keyboard events
// log guessed letters on screen
  var make = event.key;
  chosenLetters.push(make);
  var place = '<p>' + chosenLetters + '</p>';
  document.getElementById('user-text').innerHTML = place;
 
    if (chooseWord.indexOf(e.key) > -1) { //if clicked letter is included inside the words
      var choice = alphabet.splice(alphabet.indexOf(e.key), 1);
      // add correct choices to an array
      correctChoices.push(choice);
      // console.log('correct letter');
      // add words to screen
      var makeAnswer = e.key;
      var toScreen = correctChoices.join('');
      document.getElementById('solution-container-words').innerHTML = toScreen;

      // reduce turns till win number
      turnsTillWin--;


    } else {
      // subtract turns till lost number
      turnsTillLost--;
      var addTrys = document.getElementById('guesses-left');
      addTrys.innerHTML = turnsTillLost - 1;

      // add conditional logic to show hangman image based on wrong guesses
        if (turnsTillLost === 6) {
          // get Id and and attache new src to img tag
            function addImage() {
              var addImage = document.getElementById('deadGuyContainer');
              var imageTag = document.getElementById('dead-guy')
              imageTag.setAttribute('src', 'assets/images/head.png');
              imageTag.setAttribute('alt', 'noose with head');
              
            }
            addImage();
        }
        else if (turnsTillLost === 5) {
          function addImage() {
            var addImage = document.getElementById('deadGuyContainer');
            var imageTag = document.getElementById('dead-guy')
            imageTag.setAttribute('src', 'assets/images/head-body.png');
            imageTag.setAttribute('alt', 'noose with head');
          }
          addImage();
        }
        else if (turnsTillLost === 4) {
          function addImage() {
            var addImage = document.getElementById('deadGuyContainer');
            var imageTag = document.getElementById('dead-guy')
            imageTag.setAttribute('src', 'assets/images/head-body-full.png');
            imageTag.setAttribute('alt', 'noose with head');
          }
          addImage();
        }
        else if (turnsTillLost === 3) {
          function addImage() {
            var addImage = document.getElementById('deadGuyContainer');
            var imageTag = document.getElementById('dead-guy')
            imageTag.setAttribute('src', 'assets/images/head-body-arms.png');
            imageTag.setAttribute('alt', 'noose with head');
          }
          addImage();
        }
        else if (turnsTillLost === 2) {
          function addImage() {
            var addImage = document.getElementById('deadGuyContainer');
            var imageTag = document.getElementById('dead-guy')
            imageTag.setAttribute('src', 'assets/images/head-body-arms-legs.png');
            imageTag.setAttribute('alt', 'noose with head');
            alert('One more guess. You are totally about to kill a dude. That would be a bummer. ');
          }
          addImage();
        }
        else if (turnsTillLost === 1) {
          function addImage() {
            var addImage = document.getElementById('deadGuyContainer');
            var imageTag = document.getElementById('dead-guy')
            imageTag.setAttribute('src', 'assets/images/dead.png');
            imageTag.setAttribute('alt', 'noose with head');
           
          }
          addImage();

          function killGame() {
            alert('you lose. You just killed a dude. bummer.  Try again?');
           return setTimeout(function(){location.reload()}, 2000);
                
                
          }
          killGame();
        }
        else {
          return null;
        }

      // console.log('incorrect letter');
      // console.log(turnsTillLost);
      
    }
    console.log(JSON.stringify(alphabet));

    function stopStart() {
      
      if(turnsTillWin === trysTillWin ) {

         function award() {
            var element = document.getElementById('gifContainer');
            element.classList.add('reveal');
              
          }
          award();
         function playAgain (){
            var a = prompt('great work. want to play again?');
            // prompt();
      
            if (a === 'yes') {
              // console.log('great');
              setTimeout(function(){location.reload()}, 5000);
            }
          }
          playAgain();
      }
      else {
        return null;
      }
    
    } 
    stopStart();
   
  
});
