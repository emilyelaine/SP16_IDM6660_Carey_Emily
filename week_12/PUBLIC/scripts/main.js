$(function() {
	var menuVisible = false;
	
	$('#menuBtn').click(function() {
		if (menuVisible) {
			$('#mainNav').css({'display':'none'});
			menuVisible = false;
			return;
		}
		$('#mainNav').css({'display':'block'});
		menuVisible = true;
	});
	$('#mainNav').click(function() {
		$(this).css({'display':'none'});
		menuVisible = false;
	});

});