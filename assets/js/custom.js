//CAROUSEL AND NAVBAR CUSTOM JS
var multipleCardCarousel = document.querySelector("#carousel-4");
var carousel = new bootstrap.Carousel(multipleCardCarousel, {
  interval: false
});

var carouselWidth = 0;
var cardWidth = 0;
var scrollPosition = 0;
var carouselSlides = 0;
var carouselHeading = 0;

function fnCarousel(e) {
  $("#carousel-4 .carousel-control-next").on("click", function () {
    if (scrollPosition < (carouselWidth - cardWidth * e)) {
      scrollPosition += cardWidth;
      $("#carousel-4 .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });

  $("#carousel-4 .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carousel-4 .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
}
$(window).bind('load resize' ,function(){
  carouselHeading =  $(".carousel-heading").css("height");
  $(".blank-item").css("height", carouselHeading);

  carouselWidth = $("#carousel-4 .carousel-inner")[0].scrollWidth;
  cardWidth = $("#carousel-4 .carousel-item").width();
  scrollPosition = 0;

  var viewportwidth;

  if(typeof window.innerWidth!='undefined'){
        viewportwidth=window.innerWidth;
  }

  if (viewportwidth > 990) {
    $("#carousel-4").removeClass("slide");
    carouselWidth = $("#carousel-4 .carousel-inner")[0].scrollWidth;
    cardWidth = $("#carousel-4 .carousel-item").width();
    scrollPosition = 0;
    carouselSlides = 4;

  } else if (viewportwidth > 767) {
    $("#carousel-4").removeClass("slide");
    carouselWidth = $("#carousel-4 .carousel-inner")[0].scrollWidth;
    cardWidth = $("#carousel-4 .carousel-item").width();
    scrollPosition = 0;
    carouselSlides = 3;

  } else if (viewportwidth > 550) {
    $("#carousel-4").removeClass("slide");
    carouselWidth = $("#carousel-4 .carousel-inner")[0].scrollWidth;
    cardWidth = $("#carousel-4 .carousel-item").width();
    scrollPosition = 0;
    carouselSlides = 2;

  } else {
    $("#carousel-4").addClass("slide");
    carouselWidth = $("#carousel-4 .carousel-inner")[0].scrollWidth;
    cardWidth = $("#carousel-4 .carousel-item").width();
    scrollPosition = 0;
    carouselSlides = 1;
  }

});
fnCarousel(carouselSlides);