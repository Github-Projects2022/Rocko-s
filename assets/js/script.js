/* CUSTOM NAVBAR */
var menuHolder = document.getElementById('menuHolder')
var siteBrand = document.getElementById('siteBrand')

function menuToggle(){
  if(menuHolder.className === "drawMenu") {
    menuHolder.className = "" }
  else {
    menuHolder.className = "drawMenu" }
}

if(window.innerWidth < 426) {
    siteBrand.innerHTML = "RC" }

window.onresize = function(){
  if(window.innerWidth < 420) {
    siteBrand.innerHTML = "RC" }
  else {
    siteBrand.innerHTML = "ROCKO'S CHICKEN" }
}
/* END CUSTOM NAVBAR */