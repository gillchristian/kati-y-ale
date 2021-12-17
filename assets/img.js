document.addEventListener("DOMContentLoaded", () => {
  var URL = "/assets/kati-y-ale.png";

  var img = new Image();

  img.onload = function () {
    var bg = document.querySelector("#main-bg");

    if (bg) {
      bg.classList.add("bg-img");

      bg.style.backgroundImage = "url(" + URL + ")";
    }
  };

  img.src = URL;
});
