var screen = document.body.clientWidth;

$(document).ready(function() {
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		}
	})
	
	$(".menu-link").click(function(i) {
		i.preventDefault();
		$(this).toggleClass("active");
		$(".nav").toggle();
	});
	adjustMenu();
})

$(window).bind('resize orientationchange', function() {
	screen = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (screen < 400) {
    
		$(".menu-link").css("display", "inline-block");
		if (!$(".menu-link").hasClass("active")) {
			$(".nav").hide();
		} else {
			$(".nav").show();
		}
		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a.parent").unbind('click').bind('click', function(i) {

			i.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	} 
	else if (screen >= 400) {
		$(".menu-link").css("display", "none");
		$(".nav").show();
		$(".nav li").removeClass("hover");
		$(".nav li a").unbind('click');
		$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {

		$(this).toggleClass('hover');
		});
	}
}