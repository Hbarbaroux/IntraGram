$(function() {

  $(".main-container").after('<div id="picturesModal" class="visionneuse" ><span class="cross cursor" onclick="closePicturesModal()">&times;</span><div class="visionneuse-content"></div></div>');

  $("#picturesModal .visionneuse-content").append('<div class="gallery-column-container dragscroll"><div>');

  var $array = $(".main-container").children();

  jQuery.each($array, function( i, div) {
    var $newDiv = $(div).clone();
    var $newDiv2 = $(div).clone();
    $newDiv.removeClass();
    $newDiv.addClass("gallery_column");
    var $img = $newDiv.children('img');
    $img.attr("name", "picturesDemo");
    $img.addClass("cursor");
    $img.addClass("demo");
    $img.click(function() {
      currentPictureSlide(i+1);
    });
    $(".pictures .gallery-column-container").append($newDiv);
    $newDiv2.removeClass();
    $newDiv2.addClass("mySlides");
    $newDiv2.attr("name", "picturesAlbum");
    $newDiv2.prepend('<div class="numbertext">' + (i+1) + ' / ' + $array.length + '</div>');
    $("#picturesModal .visionneuse-content .gallery-column-container").before($newDiv2);
  });

  jQuery.each($(".main-container img"), function(i, image) {
    $(image).click(function() {
        openPicturesModal();
        currentPictureSlide(i+1);
    });
  });

  $("#picturesModal .visionneuse-content .gallery-column-container").before('<a class="prev" onclick="plusPictureSlides(-1)">&#10094;</a>');
  $("#picturesModal .visionneuse-content .gallery-column-container").before('<a class="next" onclick="plusPictureSlides(1)">&#10095;</a>');

});

function openPicturesModal() {
	document.getElementById('picturesModal').style.display = "block";
}
function closePicturesModal() {
  document.getElementById('picturesModal').style.display = "none";
}

var slideIndex = 1;

showPicturesSlides(slideIndex);

function plusPictureSlides(nb_slide) {
  showPicturesSlides(slideIndex += nb_slide);
}
function currentPictureSlide(nb_slide) {
  showPicturesSlides(slideIndex = nb_slide);
}

function showPicturesSlides(nb_slide) {
  var i;
  var albumElements = document.getElementsByName("picturesAlbum");
  
  var dots = document.getElementsByName("picturesDemo");
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