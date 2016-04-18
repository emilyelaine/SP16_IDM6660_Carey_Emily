$(function() {
	var menuVisible = false;
	$('#menuBtn').click(function() {
		if (menuVisible) {
			$('#mainNav').css({'display':'none'}).animate({duration: 'slow'});
			menuVisible = false;
			return;
		}
		$('#mainNav').css({'display':'block'}).animate({duration: 'slow'});
		menuVisible = true;
	});
	$('#mainNav').click(function() {
		$(this).css({'display':'none'}).animate({duration: 'slow'});
		menuVisible = false;
	});

});