$(document).ready(function() {
  var front = document.getElementsByClassName("front");
  var back = document.getElementsByClassName("back");

  var highest = 0;
  var absoluteSide = "";

  for (var i = 0; i < front.length; i++) {
    if (front[i].offsetHeight > back[i].offsetHeight) {
      if (front[i].offsetHeight > highest) {
        highest = front[i].offsetHeight;
        absoluteSide = ".front";
      }
    } else if (back[i].offsetHeight > highest) {
      highest = back[i].offsetHeight;
      absoluteSide = ".back";
    }
  }
  $(".front").css("height", highest);
  $(".back").css("height", highest);
  $(absoluteSide).css("position", "absolute");
});


var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollToTopBtn.addEventListener("click", scrollToTop);

// Removing the Parallax effect in table size
var screenTable = window.matchMedia("(max-width: 991.98px)");
function removeClassTablet(screenTable) {
  if (screenTable.matches) { // If media query matches
    var landingPageDiv = document.getElementById("landingPage");
    var projectDiv = document.getElementById("project");
    var creativeDiv = document.getElementById("creative");

     landingPageDiv.classList.remove("ParallaxContainer");
     projectDiv.classList.remove("ContentContainer");
     creativeDiv.classList.remove("ParallaxContainer2");

  }
}

removeClassTablet(screenTable) // Call listener function at run time
screenTable.addListener(removeClassTablet) // Attach listener function on state changes
