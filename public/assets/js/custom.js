(function($) {

	'use strict';
	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});
	
	// Header Sticky, Go To Top JS
	$(window).on('scroll', function() {
		// Header Sticky JS
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}

		else{
			$('.navbar-area').removeClass("is-sticky");
		};

		// Go To Top JS
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});

	// navbar-category-dropdown
    $(".navbar-category button").on('click', function() {
        if($(".navbar-area").hasClass("is-sticky")) {
            $(this).next(".navbar-category-dropdown").toggleClass("active");
        }
    })

	// Header Sticky, Go To Top JS
	$(window).on('scroll', function() {
		// Header Sticky JS

		if ($(this).scrollTop() >750){  
			$('.only-home-one-sticky').addClass("is-sticky");
		}
		else{
			$('.only-home-one-sticky').removeClass("is-sticky");
		};
	});

	

	// Preloader
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	}) 

	// WOW JS
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}

	// Newsletter Modal
	$(document).ready(function(event){
		function loadPopup(event){
			  if($(".popup-overlay").hasClass("popup-hide")){
				  $(".popup-overlay").removeClass("popup-hide");
			  }else{
				  $(".popup-overlay").addClass("popup-show");
			  }
		}
		setTimeout(loadPopup, 3500);
		
		$(".popup-close").click(function(e){
			$('.popup-overlay').addClass("popup-hide");
			e.preventDefault();
		})
	});

})(jQuery);
