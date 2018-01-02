$(function() {

	$(".gallery").css("display", "");
	$(".buttonGallery").addClass("active");
	$("section, header").not(".gallery").css("display", "none");

	$("#button").click(function() {
		$("#button, #nav, section, header").toggleClass("visible");
	});

	$("button").click(function() {
		var displayedClass = $(this).html().toLowerCase();
		if (! $(this).hasClass("active")) {
			$("button").removeClass("active");
			$(this).addClass("active");
			$("i").removeClass("active");
			$("i."+$(this).attr("class").split(' ')[0]).addClass("active");
		}
		$("."+displayedClass).css("display", "");
		$("section, header").not("."+displayedClass).css("display", "none");
	});

});