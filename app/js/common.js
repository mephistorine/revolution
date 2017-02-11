$(document).ready(function(){

	$('.header').parallax({
		imageSrc: '../img/image-2.jpg'
	});

	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	var topBar = $('.top-bar');

	window.scroll(function(){
		topBar.addClass('sticky');
	})


});
if (window.pageYOffset == 53){ alert('hello') };