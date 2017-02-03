	// $('.nav_slide_button').click(function() {
	// 	$('.pull').slideToggle();
	// });
	// $("#nav-toggle").click(function() {
	// 	$(this).toggleClass("active");
	// });


	$(document).ready(function() {
		$("#nav-toggle").click(function() {
			$(this).toggleClass("active");
			$('header nav').slideToggle();
			// $('.header_content h1').css("margin-top", 60 + "px");
		});

		$('.live_campaigns_slider').slick({
        	 infinite: false,
        	 arrows: false,
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  dots: true,
			  responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			      	arrows: false,
			        slidesToShow: 3,
			        slidesToScroll: 2,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			      	arrows: false,
			      	infinite: false,
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			      	arrows: false,
			      	infinite: false,
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]
      });

			$('.help_slider').slick({
				 infinite: false,
        		arrows: false,
			 	slidesToShow: 2,
			  	slidesToScroll: 1,
			  	dots: true,
			  	responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]

			});


		var val_india = $('.counts').html();
		var val_sierra = $('.counts_sierra').html();
		var val_guatemala = $('.counts_guatemala').html();
		var val_mali = $('.counts_mali').html();
			 $('#progres_bar_india').css('width' , val_india);
			 $('#progres_bar_sierra').css('width' , val_sierra);
			 $('#progres_bar_guatemala').css('width' , val_guatemala);
			 $('#progres_bar_mali').css('width' , val_mali);
			 $('.progres_bar_guatemala').css('width' , val_guatemala);
			 $('.progres_bar_india').css('width' , val_india);


});