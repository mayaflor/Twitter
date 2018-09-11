$(document).ready(function(){

  $('#submit-check').click((event) => {
    $('#second-section').append(`<div class='tweets'>${$('textarea').val()}</div>`);
    $('textarea').val('');
    
    event.preventDefault();
  });

  $('textarea').keyup(() => {
    const maxCharNum = 140;
    let rest = $('#count').text() - $('textarea').val().length;
    console.log(rest)
    // $('textarea').val().length >= maxCharNum ?
    // $('#count').text(rest) : $('textarea').val($('textarea').val().substr(0,maxCharNum));

    if ($('textarea').val().length >= maxCharNum) {
      $('#count').text(rest)
    } else {
      $('textarea').val($('textarea').val().substr(0,maxCharNum));
    }
    
  });

});