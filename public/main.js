'use strict';

$(document).ready(init);

function init() {
  $('#convert').click(convertText);
}




function convertText(){
  event.preventDefault();
  console.log('convert text called');
  var newConvertInput = $('#mdinput').val();
  $.post('/convert', {
    text: newConvertInput,
  })
  .success(function(data) {
    var resultParsed = JSON.parse(data);
    var $toDomObj = $.parseHTML(resultParsed);
    $('#rightpanel').append($toDomObj);
  })
  .fail(function(err) {
    alert('something went wrong :(')
  });

}
