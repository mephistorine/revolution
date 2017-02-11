$(document).ready(function(){

	$('.header').parallax({
		imageSrc: '../img/image-2.jpg'
	});

	var topBar = $('.top-bar');


	window.onscroll = function() {
		topBar.addClass('sticky');
	}
	if (window.pageYOffset == 0){topBar.removeClass('sticky');}

	$('.english-levels').on('click', function(){

	});

	$('.trigger').on('click', function() {
		$('.modal-wrapper').toggleClass('open');
			$('.page-wrapper').toggleClass('blur-it');
		return false;
	});

});
