( function( $ ) {
$( document ).ready(function() {
  $('#cssmenu li.has-sub>a').on('click', function(){
  		$(this).removeAttr('href');
  		var element = $(this).parent('li');
  		if (element.hasClass('open')) {
  			element.removeClass('open');
  			element.find('li').removeClass('open');
  			element.find('ul').slideUp();
  		}
  		else {
  			element.addClass('open');
  			element.children('ul').slideDown();
  			element.siblings('li').children('ul').slideUp();
  			element.siblings('li').removeClass('open');
  			element.siblings('li').find('li').removeClass('open');
  			element.siblings('li').find('ul').slideUp();
  		}
  	});

  var offsetTop = $('#header-nav-fixed').height()*2;
  $(document).on('scroll', function() {
    if ($(this).scrollTop() > offsetTop) {
      $('#header-nav-fixed').addClass('header-active');
    } else {
      $('#header-nav-fixed').removeClass('header-active');
      $('.hidden-nav-options').removeClass('nav-active');
      $('#hamburger-icon').removeClass('open');
    }
  })

  var $root = $('html, body');
  $('a').click(function() {
    $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top - 100
    }, 1000);
    return false;
  });

  $('#hamburger-icon').click(function(){
    $(this).toggleClass('open');
    $('.hidden-nav-options').toggleClass('nav-active');
  });


});
} )( jQuery );
