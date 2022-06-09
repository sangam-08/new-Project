
$(document).ready(function(){	

	$('.slider-carousel').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		slideSpeed : 200,
		paginationSpeed : 800,
    rewindSpeed : 1000,
		slideSpeed : 200,
		dots:false
	});
	
$('.navbar-toggler').click(function(){
	$('.nit-navigation').css('right','0');
});	
$('.nit-close').click(function(){
	$('.nit-navigation').css('right','-95%');
});

	
	
 AOS.init({easing: 'ease-in-out-sine',once:true});

});
$(window).scroll(function(){

		if ($(window).scrollTop() >= 200) {

			$('header').addClass('fixed-header');

		}

		else {

			$('header').removeClass('fixed-header');

		}

	});
