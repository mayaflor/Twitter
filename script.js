var submit = document.querySelector("input[type=submit]");
var input = document.querySelector("textarea");
var countdownNumbers = parseInt(document.querySelector("span"));

function limite_textarea(valor) {
  quant = 140;
  total = valor.length;
  if(total <= quant) {
      resto = quant - total;
      document.getElementById('cont').innerHTML = resto;
  } else {
      document.getElementById('texto').value = valor.substr(0,quant);
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

