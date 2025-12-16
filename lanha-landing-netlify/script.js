(function () {
  var toggle = document.querySelector(".navToggle");
  var nav = document.querySelector(".nav");
  var year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("isOpen");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      if (nav.classList.contains("isOpen")) {
        nav.classList.remove("isOpen");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
})();