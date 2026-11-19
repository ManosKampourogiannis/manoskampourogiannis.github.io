// Light/dark mode. Loaded in <head> so the page never flashes the wrong theme.
(function () {
  // Default is light; a visitor's own choice from the toggle button is remembered.
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  document.documentElement.setAttribute("data-theme", saved || "light");

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  });
})();
