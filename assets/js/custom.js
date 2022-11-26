var multipleCardCarousel = document.querySelector("#carousel-4");
var carousel = new bootstrap.Carousel(multipleCardCarousel, {
  interval: false,
});

function fnCarousel(e) {

  var carouselWidth = $("#carousel-4 .carousel-inner")[0].scrollWidth;
  var cardWidth = $("#carousel-4 .carousel-item").width();

  var scrollPosition = 0;

  $("#carousel-4 .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * (e + 1)) {
      scrollPosition = scrollPosition + cardWidth;
      $("#carousel-4 .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });

  $("#carousel-4 .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $("#carousel-4 .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
}

jQuery(window).resize(function(){
  var viewportwidth;

  if(typeof window.innerWidth!='undefined'){
        viewportwidth=window.innerWidth;
  }

  if (viewportwidth > 991) {
    $("#carousel-4").removeClass("slide");
    var carouselSlides = 4;
    fnCarousel(carouselSlides);
    
    $("#navbar").addClass("navbar-dark");
    $("#navbar").removeClass("navbar-light");
    $("#navbar").addClass("fixed-top");
    $("#navbar").removeClass("sticky-top");

  } else if (viewportwidth > 768) {
    $("#carousel-4").removeClass("slide");
    var carouselSlides = 3;
    fnCarousel(carouselSlides);

    $("#navbar").addClass("navbar-light");
    $("#navbar").removeClass("navbar-dark");
    $("#navbar").addClass("fixed-top");
    $("#navbar").removeClass("sticky-top");

  } else if (viewportwidth > 576) {
    $("#carousel-4").removeClass("slide");
    var carouselSlides = 1;
    fnCarousel(carouselSlides);

    $("#navbar").addClass("navbar-light");
    $("#navbar").removeClass("navbar-dark");
    $("#navbar").addClass("fixed-top");
    $("#navbar").removeClass("sticky-top");

  } else {
    $("#carousel-4").addClass("slide");
    $("#navbar").addClass("navbar-light");
    $("#navbar").removeClass("navbar-dark");
    $("#navbar").addClass("fixed-top");
    $("#navbar").removeClass("sticky-top");

  }
});