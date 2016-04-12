var $body = $('body');

$body.on('hover', '.right-paw', function () {
  $('.right-paw').toggleClass('slide');
});

$body.on('hover', '.left-paw', function () {
  $('.left-paw').toggleClass('slide');
});
