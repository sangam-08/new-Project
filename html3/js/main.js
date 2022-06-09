
$(document).ready(function(){	

	$('.slider-carousel').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		slideSpeed : 200,
		paginationSpeed : 800,
    rewindSpeed : 1000,
		slideSpeed : 200,
		dots:true
	});
		$('.famous-carousel').owlCarousel({
		items:6,
		loop:true,
		margin:24,
		autoplay:true,
		slideSpeed : 200,
		paginationSpeed : 800,
    rewindSpeed : 1000,
    nav:true,
        navText : ['<i class=""></i>','<i class=""></i>'],
		slideSpeed : 200,
		dots:false
	});
		
 AOS.init({easing: 'ease-in-out-sine',once:true});

});

$(window).scroll(function() {
			if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
				$('#return-to-top').fadeIn(200);    // Fade in the arrow
			} else {
				$('#return-to-top').fadeOut(200);   // Else fade out the arrow
			}
	   });
		$('#return-to-top').click(function() {      // When arrow is clicked
			$('body,html').animate({
				scrollTop : 0                       // Scroll to top of body
			}, 500);
		});
