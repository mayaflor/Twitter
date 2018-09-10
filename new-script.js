$(document).ready(function(){

  $('#submit-check').click((event) => {
    $('#second-section').append(`<div class='tweets'>${$('textarea').val()}</div>`);
    $('textarea').val('');
    
    event.preventDefault();
  });

});