$(function(){
 		$('#dowebok').fullpage({
 			// 7BAABE
 			sectionsColor: ['none', 'none', 'none', 'none', 'none','none','none','none'],
 			'navigation': true,
 			'navigationTooltips': ['Hello World', 'Computer', 'Skill', 'Internet', 'Music','Animation','JavaScript','End'],
 			'resize':false,
 			continuousVertical: true,
 			scrollingSpeed:1100,
 		});
 });


window.onload=function() {
	 	$('#onload').fadeOut();
	 	$('#fp-nav').css('display','block');
	 	$('body').addClass('fp-viewing-0');
}