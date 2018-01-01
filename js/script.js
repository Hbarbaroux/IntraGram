$(function() {

	$(".gallery").css("display", "");
	$("section, header").not(".gallery").css("display", "none");

	$("button").click(function(event) {
			var target = $( event.target );
			var displayedClass = target.html().toLowerCase();
			var tab = $("."+displayedClass);
			for (i in tab) {
				console.log(i);
			}
			$("."+displayedClass).css("display", "");
			$("section, header").not("."+displayedClass).css("display", "none");
	});

});