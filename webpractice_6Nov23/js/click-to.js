const menu = document.getElementById("menu");

menu.addEventListener("click", function(event) {
  const li = event.target.closest("li");
  if (li.classList.contains("active")) {
    li.classList.remove("active");
    li.querySelector("ul").style.display = "none";
  } else {
    li.classList.add("active");
    li.querySelector("ul").style.display = "block";
  }
});
