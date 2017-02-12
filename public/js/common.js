$(document).ready(function(){

	$('.header').parallax({
		imageSrc: '../img/image-2.jpg'
	});

	var topBar = $('.top-bar');

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
});
