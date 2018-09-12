$(document).ready(function(){
  $('#submit-check').prop('disabled', true);

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
      // $('#submit-check').prop('disabled', false);
      // $('textarea').val() === '' ?
      // $('#submit-check').prop('disabled', true) : $('#submit-check').prop('disabled', false);

      $('textarea').val().length <= maxCharNum ? 
      $('#count').text(rest) : $('textarea').val($('textarea').val().substr(0,maxCharNum));
      
      
    });
  }());

  (function disableButton() {
    $('textarea').change(() => {
      if ($('textarea').val() == '') {
        $('#submit-check').prop('disabled', true);
      } else {
        $('#submit-check').prop('disabled', false);
        }
      });
  }())

});