$(document).ready(function(){

	var topBar = $('.top-bar'),
			header = $('.header');
			

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
