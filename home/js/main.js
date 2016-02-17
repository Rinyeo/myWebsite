jQuery(document).ready(function($) {
	var isLateralNavAnimating = false;


	$('.home-btn').on('click', function(event){
		event.preventDefault();

		if( !isLateralNavAnimating ) {
			if(true) isLateralNavAnimating = true;

			$('body').toggleClass('nav-is-open');
			$('.back-contain').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){

				isLateralNavAnimating = false;
			});
		}
	});

	$('.back-btn').on('click',function(event){
		event.preventDefault();

		if( !isLateralNavAnimating ) {
			if(true) isLateralNavAnimating = true;

			$('body').toggleClass('nav-is-open');
			$('.back-contain').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){


				isLateralNavAnimating = false;
			});
		}
	});

	$('.home-contain').css('top',($(window).height()-154)/2+'px');
	$('.home-contain').css('visibility','visible');
	$('.back-nav-contain').css('top',($('.back-nav').height()-90)/2+'px');
	$(window).resize(function(){
		$('.home-contain').css('top',($(window).height()-154)/2+'px');
		$('.back-nav-contain').css('top',($('.back-nav').height()-90)/2+'px');

	});
});

window.onload=function () {
	 setTimeout(function(){
	 	$('#onload').fadeOut();
	 	$('.home').removeClass('home-onload');
	 },300);
};