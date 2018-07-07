var submit = document.querySelector("input[type=submit]");
var input = document.querySelector("textarea");
var countdownNumbers = parseInt(document.querySelector("span"));
var textContent = input.value;
var bt = document.getElementById("submit-check");
bt.disabled = true;

function manage(txt) {
  bt.disabled = false;
}    

function limite_textarea(valor) {
  quant = 140;
  total = valor.length;
  if(total <= quant) {
      rest = quant - total;
      document.getElementById("count").innerHTML = rest;
  } else {
      document.getElementById("text").value = valor.substr(0,quant);
  }
}

submit.onclick = function(event) {
  var tweetBox = document.getElementsByClassName("tweet-box") [0];
  var newBox = document.createElement("div");
  newBox.textContent = input.value;
  tweetBox.appendChild(newBox);
  input.value = "";
  event.preventDefault();
}

