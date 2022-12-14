//STORE BRANCHES JS
var storeData = [];

function genStoreCard(_storeData) {

  $("#carousel-4 .carousel-inner").html("");

  $.each(_storeData, function (i) { 
    $("#carousel-4 .carousel-inner").append("\
    <div class=\"carousel-item\">\
        <div class=\"card\">\
            <div class=\"card-body\">\
                <h6 class=\"  card-subtitle mb-2\">" + _storeData[i].location + "</h6>\
                <h5 class=\"card-title d-flex align-items-end\">" + _storeData[i].name + "</h4>\
                <p class=\"card-text\">" + _storeData[i].address + "</p>\
                <a class=\"card-link btn btn-danger\" href=\"" + _storeData[i].map + "\" target=\"_blank\">Directions</a>\
            </div>\
        </div>\
    </div>\
    ");
  });

  $("#carousel-4 .carousel-inner .carousel-item:nth-child(1)").addClass("active");
}

$.getJSON("assets/js/store-data.json", function(data){
  $.each(data, function (i) { 
     storeData.push(data[i]);
  });
  
  genStoreCard(storeData);
  searchStores();
});
//STORE BRANCHES JS END

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
    
    $("#navbar").addClass("navbar-dark");
    $("#navbar").removeClass("navbar-light");
    $("#navbar").addClass("fixed-top");
    $("#navbar").removeClass("sticky-top");

  } else if (viewportwidth > 767) {
    $("#carousel-4").removeClass("slide");
    carouselWidth = $("#carousel-4 .carousel-inner")[0].scrollWidth;
    cardWidth = $("#carousel-4 .carousel-item").width();
    scrollPosition = 0;
    carouselSlides = 3;

    $("#navbar").addClass("navbar-light");
    $("#navbar").removeClass("navbar-dark");
    $("#navbar").addClass("sticky-top");
    $("#navbar").removeClass("fixed-top");

  } else if (viewportwidth > 550) {
    $("#carousel-4").removeClass("slide");
    carouselWidth = $("#carousel-4 .carousel-inner")[0].scrollWidth;
    cardWidth = $("#carousel-4 .carousel-item").width();
    scrollPosition = 0;
    carouselSlides = 2;

    $("#navbar").addClass("navbar-light");
    $("#navbar").removeClass("navbar-dark");
    $("#navbar").addClass("sticky-top");
    $("#navbar").removeClass("fixed-top");

  } else {
    $("#carousel-4").addClass("slide");
    carouselWidth = $("#carousel-4 .carousel-inner")[0].scrollWidth;
    cardWidth = $("#carousel-4 .carousel-item").width();
    scrollPosition = 0;
    carouselSlides = 1;

    $("#navbar").addClass("navbar-light");
    $("#navbar").removeClass("navbar-dark");
    $("#navbar").addClass("sticky-top");
    $("#navbar").removeClass("fixed-top");

  }

});
  
fnCarousel(carouselSlides);

$(window).bind('load', function (e) {
  $("#scrollTop").addClass("hidden");
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $("#scrollTop").removeClass('hidden');
  } else {
    $("#scrollTop").addClass('hidden');
  }
 });
//CAROUSEL AND NAVBAR CUSTOM JS END