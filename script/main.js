	$(document).ready(function() {
		$("#nav-toggle").click(function() {
			$(this).toggleClass("active");
			$('header nav').slideToggle();
		});

		$('.live_campaigns_slider').slick({
			infinite: false,
			arrows: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: true,
			responsive: [{
				breakpoint: 992,
				settings: {
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 2,
					dots: true
				}
			}, {
				breakpoint: 768,
				settings: {
					arrows: false,
					infinite: false,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 480,
				settings: {
					arrows: false,
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});

		$('.help_slider').slick({
			infinite: false,
			arrows: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]

		});


		$('.donors_slider').slick({
			infinite: false,
			arrows: false,
			slidesToShow: 5,
			slidesToScroll: 2,
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}]

		});

		var val_india = $('.counts').html();
		var val_sierra = $('.counts_sierra').html();
		var val_guatemala = $('.counts_guatemala').html();
		var val_mali = $('.counts_mali').html();
		$('#progres_bar_india').css('width', val_india);
		$('#progres_bar_sierra').css('width', val_sierra);
		$('#progres_bar_guatemala').css('width', val_guatemala);
		$('#progres_bar_mali').css('width', val_mali);
		$('.progres_bar_guatemala').css('width', val_guatemala);
		$('.progres_bar_india').css('width', val_india);


	});
	