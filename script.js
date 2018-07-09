var submit = document.querySelector("input[type=submit]");
var input = document.querySelector("textarea");
var countdownNumbers = document.querySelector("span").innerHTML;
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
  if (resto < 140 && resto > 19) {
    document.getElementById('count').style.color = 'black';
  }
  if (resto < 20 && resto > 11) {
    document.getElementById('count').style.color = 'blue';
  }
  if (resto < 10 ) {
      document.getElementById('count').style.color = 'red';
  }
}

submit.onclick = function(event) {
  var tweetBox = document.getElementsByClassName("tweet-box") [0];
  var newBox = document.createElement("div");
  var linebreak = document.createElement('br');
  document.getElementById("count").innerHTML = 140;
  newBox.textContent = input.value;
  tweetBox.appendChild(newBox);
  input.value = "";
  event.preventDefault();
}

$(function() {
  $(".txt-area").on('keyup paste', function() {
    var $el = $(this),
        offset = $el.innerHeight() - $el.height();

    if ($el.innerHeight < this.scrollHeight) {
      $el.height(this.scrollHeight - offset);
    } else {
      $el.height(1);
      $el.height(this.scrollHeight - offset);
    }
  })
});

// function change_color() {
//   console.log(countdownNumbers)
//   if (countdownNumbers < 20 && countdownNumbers > 11) {
//       document.getElementById('count').style.color = 'blue';
//   }
//   if (countdownNumbers < 10 ) {
//       document.getElementById('count').style.color = 'red';
//   }
// };

