
document.addEventListener("DOMContentLoaded", function() {
  var scrollUpButton = document.getElementById("scroll-up-button");
  var scrollDownButton = document.getElementById("scroll-down-button");

  scrollUpButton.addEventListener("click", function() {
    window.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth"
    });
  });

  scrollDownButton.addEventListener("click", function() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      scrollUpButton.style.transform = "translateY(0)";
    } else {
      scrollUpButton.style.transform = "translateY(100px)"; /* Adjust the distance from the top */
    }

    if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight) {
      scrollDownButton.style.transform = "translateY(100px)"; /* Adjust the distance from the top */
    } else {
      scrollDownButton.style.transform = "translateY(0)";
    }
  });
});
