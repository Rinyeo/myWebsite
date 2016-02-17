$(function(){
 		$('#dowebok').fullpage({
 			// 7BAABE
 			sectionsColor: ['#2AD4B4', '#ff6666', '#54C8D1', '#FCCB58','#8FD489','#FC8D68','#57D8D7'],
 			'navigation': true,
 			'navigationTooltips': ['Hello World', 'Computer', 'Skill', 'Internet','Animation','JavaScript','End'],
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