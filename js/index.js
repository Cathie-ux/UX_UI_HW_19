console.log("Your index.js file is loaded correctly!");

$(function() {
    $("#AboutMe").slideDown(1000).delay(1000).slideUp(1000).slideDown(1000);


var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("ContactModal")[0];
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}



});