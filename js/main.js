var $body = $('body');
var $dog = $('.dog');
var $cat = $('.cat');
var $catvdogs = $ ('.cat-v-dogs')

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

$catvdogs.waypoint(function (direction) {
  if (direction == 'down') {
    $dog.addClass('js-svg-animate');
  } else {
    $dog.removeClass('js-svg-animate');
  }

}, {offset: '-20%'});

$catvdogs.waypoint(function (direction) {
  if (direction == 'down') {
    $cat.addClass('js-svg-animate');
  } else {
    $cat.removeClass('js-svg-animate');
  }

}, {offset: '-25%'});
