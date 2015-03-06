$(document).ready(function(){

function slide_slide() 	
{
	$('#gallery img:first').delay(2000).animate({'margin-top' : '-300px'}, 1000, whenDone);

}

function whenDone() {	
	$('#gallery img:first').appendTo('#gallery').css({'margin-top' : '0px'});
	slide_slide(); 
}
	
slide_slide();


});

