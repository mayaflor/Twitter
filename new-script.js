$(document).ready(function(){

  (function sendTweet() {
    $('#submit-check').click((event) => {
      $('#second-section').append(`<div class='tweets'>${$('textarea').val()}</div>`);
      $('textarea').val('');
      
      event.preventDefault();
    });
  }());

  (function tweetCounter() {
    $('textarea').keyup(() => {
      const maxCharNum = 140;
      let rest = $('#count').text() - 1;

      $('textarea').val().length <= maxCharNum ? 
      $('#count').text(rest) : $('textarea').val($('textarea').val().substr(0,maxCharNum));
     });
  }());

});