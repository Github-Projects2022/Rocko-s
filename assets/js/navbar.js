$(window).bind('load resize' ,function(){
  var viewportwidth;

  if(typeof window.innerWidth!='undefined'){
        viewportwidth=window.innerWidth;
  }

  if (viewportwidth > 990) {
    $("#navbar").addClass("navbar-dark");
    $("#navbar").removeClass("navbar-light");
    $("#navbar").addClass("fixed-top");
    $("#navbar").removeClass("sticky-top");

  } else if (viewportwidth > 767) {
    $("#navbar").addClass("navbar-light");
    $("#navbar").removeClass("navbar-dark");
    $("#navbar").addClass("sticky-top");
    $("#navbar").removeClass("fixed-top");

  } else if (viewportwidth > 550) {
    $("#navbar").addClass("navbar-light");
    $("#navbar").removeClass("navbar-dark");
    $("#navbar").addClass("sticky-top");
    $("#navbar").removeClass("fixed-top");

  } else {
    $("#navbar").addClass("navbar-light");
    $("#navbar").removeClass("navbar-dark");
    $("#navbar").addClass("sticky-top");
    $("#navbar").removeClass("fixed-top");

  }

});
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