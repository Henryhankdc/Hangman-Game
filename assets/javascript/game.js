
    // alphabet with extra letters to reference guessed letters on keyboard.
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // answers
    var solution = ['party', 'dude', 'excellent', 'radical', 'awesome', 'bummer', 'heinous'];

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
  //  var printSolutionWord;
   var newList = document.createElement('ul');
    

function startGame() {
  // Build out list of blank spaces for chosen word

  // create unordered list to hold chosen word
 
  answerContainer.appendChild(newList);
  newList.setAttribute('id', 'solution-list');  

  for (var i = 0; i < chooseWord.length; i++) {
// Loop through chosen word to create list item underscors for hint word
    var solutionItem = document.createElement('li');
    solutionItem.setAttribute('id', 'answer' + i); 
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
      var printThis = chooseWord.indexOf(e.key) + e.key;
      
      // add correct choices to an array
      correctChoices.push(choice);
      

      console.log('correct letter');
      console.log(chooseWord.indexOf(e.key) + e.key);
      
      // add words to screen
      var makeAnswer = e.key;
        // Add correctly Guessed words to LI to reveal word to User 
      document.getElementById('answer' + chooseWord.indexOf(e.key)).innerHTML = makeAnswer;
      

      // reduce turns till win number
      turnsTillWin--;

    } else {
      // subtract turns till lost number
      turnsTillLost--;
      var addTrys = document.getElementById('guesses-left');
      addTrys.innerHTML = turnsTillLost - 1;

      // add conditional logic to show hangman image based on wrong guesses. There is probably a "DRY"-er way of doing this, but enjoy....
        if (turnsTillLost === 6) {
          // get Id and and attach new src to img tag. wash, rinse, repeat.
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
            alert('YOU LOSE. You just killed a dude. Live with that. Try again?');
           return setTimeout(function(){location.reload()}, 2000);
                       
          }
          killGame();
        }
        else {
          return null;
        }

      // console.log('incorrect letter');
    }
    // console.log(JSON.stringify(alphabet));

    function stopStart() {
      // Create a gif to show when user wins!
      if(turnsTillWin === trysTillWin ) {

         function award() {
            var element = document.getElementById('gifContainer');
            element.classList.add('reveal');
              
          }
          award();

          // Prompt player to type yes to reload new random word and play again.
         function playAgain (){
            var a = prompt('great work. Type yes to play again.');
      
            if (a.toLowerCase() === 'yes') {
              // console.log('great');
              // add delay before reload to next game;
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
