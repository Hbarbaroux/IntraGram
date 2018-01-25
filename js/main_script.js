$(function() {

    $(".gallery").css("display", "");
	$(".buttonGallery").addClass("active");
	$("body > section, header").not(".gallery").css("display", "none");
    $("#usernameDisplayed").text("Username : " + localStorage.getItem("username"));

	$("#button").click(function() {
		$("#button, #nav, body > section, header").toggleClass("visible");
	});

	$("nav button").click(function() {
		var displayedClass = $(this).html().toLowerCase();
		if (! $(this).hasClass("active")) {
			$("nav button").removeClass("active");
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


var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

function openModal2() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


