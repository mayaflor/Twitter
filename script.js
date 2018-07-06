var submit = document.querySelector("input[type=submit]");
var input = document.querySelector("textarea");
var countdownNumbers = document.querySelector("span");
submit.onclick = function(event) {
  var tweetBox = document.getElementsByClassName("tweet-box") [0];
  var newBox = document.createElement("div");
  newBox.textContent = input.value;
  tweetBox.appendChild(newBox);
  input.value = "";
  event.preventDefault();
}

// input.value = "";

// if ( document.querySelector("textarea").innerHTML.length === 0 ) {
//   submit.disabled = true; 
//   event.preventDefault();  
// }

// input.onkeyup = function countdown(maxCharacters) {
//   var number = parseInt(document.querySelector("span"));
//   console.log(number);
// }

// document.getElementsByClassName("input-box").setAttribute('maxlength',140);

function countText(text, counter, max) {
  if (text.value.length > max)
    text.value = text.value.substring(0, max);
  else
    counter.value = max - text.value.length;
}

countText(input, countdownNumbers, 140);