$(document).ready(function(){

	var topBar = $('.top-bar'),
			header = $('.header'),
			viewportWidth = document.documentElement.clientWidth;

/*
	window.onscroll = function() {
		topBar.addClass('sticky');
	}
	if (window.pageYOffset == 0){topBar.removeClass('sticky');}
*/

	$('.trigger').on('click', function() {
		$('.modal-wrapper').toggleClass('open');
			$('.page-wrapper').toggleClass('blur-it');
		return false;
	});

 
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
				'scrollTop': $target.offset().top
		}, 500, 'swing', function () {
				window.location.hash = target;
		});
	});

	if( viewportWidth < 960 )
		header.attr('data-image-src', 'img/bus-960.jpg')

});
