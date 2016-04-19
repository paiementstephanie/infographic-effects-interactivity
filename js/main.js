var $body = $('body');

$body.on('mouseover', '.right-paw', function () {
  $('.right-paw').addClass('slide');
});

$body.on('mouseout', '.right-paw', function () {
  $('.right-paw').removeClass('slide');
});

$body.on('mouseover', '.left-paw', function () {
  $('.left-paw').addClass('slide');
});

$body.on('mouseout', '.right-paw', function () {
  $('.left-paw').removeClass('slide');
});

