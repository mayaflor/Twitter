var submit = document.querySelector("input[type=submit]");
var input = document.querySelector("textarea");
var countdownNumbers = parseInt(document.querySelector("span"));
var textContent = input.value;
var bt = document.getElementById("submit-check"); 
bt.disabled = true;


input.addEventListener("keyup",function() {
  bt.disabled = false;
})

function limit_textarea(valor) {
  var quant = 140;
  var total = valor.length;
  if (total <= quant) {
      var resto = quant - total;
      document.getElementById("count").innerHTML = resto;
  } else {
      document.getElementById("text").value = valor.substr(0,quant);
  } 
}

submit.onclick = function(event) {
  var tweetBox = document.getElementsByClassName("tweet-box") [0];
  var newBox = document.createElement("div");
  document.getElementById("count").innerHTML = 140;
  newBox.textContent = input.value;
  tweetBox.appendChild(newBox);
  input.value = "";
  event.preventDefault();
}

