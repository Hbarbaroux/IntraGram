$(function() {

	$("section.timeline").load("timeline.html");
	$("section.gallery").load("gallery.html");


    $(".gallery").css("display", "");
	$(".buttonGallery").addClass("active");
	$("body > section, header").not(".gallery").css("display", "none");

	$("#button").click(function() {
		$("#button, #nav, body > section, header").toggleClass("visible");
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
		$("body > section, header").not("."+displayedClass).css("display", "none");
	});

	var profile_section = $("header.gallery section");
	$("header").prepend(profile_section);
	
});