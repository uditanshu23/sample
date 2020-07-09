$(window).scroll(function()
{
	$('nav').toggleClass('scrolled',$(this).scrollTop() > 200 );
});

window.addEventListener('scroll',function() {
	const parallax = document.querySelector('.parallax');
	let scrollPosition = window.pageYOffset;

	parallax.style.transform = 'translateY('+scrollPosition*0.4 + 'px)';
});

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        autoPlay:true
    });
});


$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true
    });
});