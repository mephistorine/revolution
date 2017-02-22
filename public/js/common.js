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

	window.onscroll = function(){
		$('.arrow-up').css('display', 'block');
	}

/*
	if ($(window).pageYOffset > 1000)
	var vWidth = $(window).width();
	if( vWidth <= 960 )
		header.attr('data-image-src', 'img/bus-960.jpg')
	else if (vWidth <= 780)
		header.attr('data-image-src', 'img/bus-780.jpg')
	else if (vWidth <= 560)
		header.attr('data-image-src', 'img/bus-560.jpg')
	else 
		header.attr('data-image-src', 'img/bus.jpg')
*/

$('#modal').iziModal();


$('.trigger').click(function (event) {
	event.preventDefault();
	$('#modal').iziModal('open');
});

$("#modal").iziModal({
	overlayClose: true,
	width: 600,
	autoOpen: false,
	overlayColor: 'rgba(0, 0, 0, 0.6)',
});


});
