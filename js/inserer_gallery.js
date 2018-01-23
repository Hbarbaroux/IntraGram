$(function() {

	$(".gallery").css("display", "");
	$(".buttonGallery").addClass("active");
	$("body > section, header").not(".gallery").css("display", "none");

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
		$("body > section, header").not("."+displayedClass).css("display", "none");
	});

	var profile_section = $("header.gallery section");
	$("header").prepend(profile_section);
	
});


function openModal(n) {
  console.log('myModal'+n);
  document.getElementById('myModal'+n).style.display = "block";
  console.log('myModal'+n);
}
function closeModal(n) {
  document.getElementById('myModal'+n).style.display = "none";
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
 var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
