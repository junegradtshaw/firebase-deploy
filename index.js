//Fix this so place holder width defines input width.
// var input=$('input');
// input.setAttribute('size',input.getAttribute('placeholder').length);

$('#textClick').click(function () {
  $('#textEcho').html($('#textInput').val());
});

$('#getCheckerBoard').click(function () {
  console.log("Displaying checkerboard");
  window.location = 'https://junegradtshaw.firebaseapp.com/checkerboard.html';
})
