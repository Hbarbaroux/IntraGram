function openModal(n) {
	document.getElementById('myModal'+n).style.display = "block";
}
function closeModal(n) {
  document.getElementById('myModal'+n).style.display = "none";
}

var slideIndex = 1;
var n = 1;
showSlides(slideIndex,n);

function plusSlides(nb_slide, n) {
  showSlides(slideIndex += nb_slide,n);
}
function currentSlide(nb_slide, n) {
  showSlides(slideIndex = nb_slide,n);
}

function showSlides(nb_slide, n) {
 var i;
  var albumElements = document.getElementsByName("album"+n);
  
  var dots = document.getElementsByName("demo"+n);
  if (nb_slide > albumElements.length) {
    slideIndex = 1;
  }
  if (nb_slide < 1) {
    slideIndex = albumElements.length;
  }
  for (i = 0; i < albumElements.length; i++) {
	  albumElements[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
  }
  albumElements[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}