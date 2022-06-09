
$(document).ready(function(){	

	
$('.navbar-toggler').click(function(){
	$('.nit-navigation').css('right','0');
});	
$('.nit-close').click(function(){
	$('.nit-navigation').css('right','-95%');
});


});
$(window).scroll(function(){

		if ($(window).scrollTop() >= 200) {

			$('header').addClass('fixed-header');

		}

		else {

			$('header').removeClass('fixed-header');

		}

	});
