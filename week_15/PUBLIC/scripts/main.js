$(document).ready(function () {
    var width = $(window).width();

//Hide main nav in tablet and mobile view 
    if ($(window).width() < 768) {
       	$("#mainNav").hide();
    };

	$(window).resize(function() {
    	if ($(window).width() < 768) {
       		$("#mainNav").hide();
       	};
    });

    $("#filter").show();

//Add background color to selected filter item on work samples pages

	$('ul#filter li a').click(function(){
    	$('ul#filter li a.selected').removeClass('selected');
    	$(this).addClass('selected');
    });
});

//expand and hide main navigation
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
