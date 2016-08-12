( function( $ ) {
$( document ).ready(function() {

  var leftPos;
  var offsetTop = $('#header-nav-fixed').height()*2;
  var $sectionVals = $('.section-wrappers').map(function() {
    return $(this).offset().top - 500;
  })

  $(document).on('scroll', function() {
    var scrolled = $(this).scrollTop()
    if (scrolled > offsetTop) {
      $('#header-nav-fixed').addClass('header-active');
    } else {
      $('#header-nav-fixed').removeClass('header-active');
      $('.hidden-nav-options').removeClass('nav-active');
      $('#hamburger-icon').removeClass('open');
    }

  switch ( true ) {
    case scrolled > $sectionVals[6]:
      leftPos = '94.5%';
      break;
    case scrolled > $sectionVals[5]:
      leftPos = '83.5%';
      break;
    case scrolled > $sectionVals[4]:
      leftPos = '72.5%';
      break;
    case scrolled > $sectionVals[3]:
      leftPos = '61.5%';
      break;
    case scrolled > $sectionVals[2]:
      leftPos = '38.5%';
      break;
    case scrolled > $sectionVals[1]:
      leftPos = '27.5%';
      break;
    case scrolled > $sectionVals[0]:
      leftPos = '16.5%';
      break;
    default:
      leftPos = '-50%';
      break;
  }
    $('.active-diamond').css({
      opacity: 1,
      left: leftPos
    })

  })

  var $root = $('html, body');
  $('a').click(function() {
    $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top - 100
    }, 1000);
    return false;
  });

  $('.hamburger-icon').click(function(){
    $(this).toggleClass('open');
    $('.hidden-nav-options').toggleClass('nav-active');
  });


});
} )( jQuery );
