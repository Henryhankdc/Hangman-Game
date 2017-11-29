
// get key pressed by user and add to this id
var userText = document.getElementById('user-text');

document.onkeyup = function(event) {
    userText.textContent = event.key;
    // console.log(userText);
};
