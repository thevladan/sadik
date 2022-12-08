$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		autoplay: false,
		speed: 1000,
		adaptiveHeight: true,
		centerMode: false,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					vertical: true,
					verticalSwiping: true,
					arrows: false,
				}
			}
		]
	});
});

