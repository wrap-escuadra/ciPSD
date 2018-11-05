$(function(){
    new WOW().init();
	$('.burger-nav, .nav-close').on('click', function(){
		$('header nav ul').toggleClass('open');
	});


}); //end script