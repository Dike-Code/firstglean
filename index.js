$(document).ready(function () {
	$(".slick-boxes").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	});

	$(".slick-card").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: false,
	});
});

AOS.init();

wow = new WOW({
	boxClass: "wow", // default
	animateClass: "animated", // default
	offset: 20, // default
	mobile: true, // default
	live: true, // default
});
wow.init();
