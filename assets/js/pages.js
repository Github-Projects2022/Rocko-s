function runDisplay(cssVis) {

  if(cssVis == "none") {
    $("#carousel-1, #products, #branches, #media, #find").fadeToggle();
    $("#about, #vision-mission").fadeToggle("slow");
  }
  
}
$(".link-logo").on("click", function () {
  var cssVis = $("#carousel-1").css("display");
  runDisplay(cssVis);
});

$(".link-about").on("click", function () {
  var cssVis = $("#about").css("display");
  runDisplay(cssVis);
});

$(".link-home").on("click", function () {
  var cssVis = $("#carousel-1").css("display");
  runDisplay(cssVis);
});

$(".link-products").on("click", function () {
  var cssVis = $("#products").css("display");
  runDisplay(cssVis);
});

$(".link-branches").on("click", function () {
  var cssVis = $("#branches").css("display");
  runDisplay(cssVis);
});