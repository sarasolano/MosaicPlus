function main() {

	(function () {
		'use strict';
		
				// navbar config
		$(window).bind('scroll', function () {
			var navHeight = $(window).height() - 100;
			if ($(window).scrollTop() > navHeight) {
				$('.navbar-default').addClass('on');
			} else {
				$('.navbar-default').removeClass('on');
			}
		});

		$('body').scrollspy({
			target: '.navbar-default',
			offset: 80
		});
		
		$(document).ready(function (){
			// set up the carousel situation in the main page
			$('#carousel-main').carousel({
				interval: 5000,
			});
		});
		

		
	}) ()

}
main();