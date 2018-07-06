var submit = document.querySelector("input[type=submit]");
submit.onclick = function(event) {
  var input = document.querySelector("textarea");
  var tweetBox = document.getElementsByClassName("tweet-box") [0];
  var newBox = document.createElement("div");
  newBox.textContent = input.value;
  tweetBox.appendChild(newBox);
  event.preventDefault();
}