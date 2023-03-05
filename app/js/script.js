const toggleMenu = document.querySelector(".btn-mobile-nav");
const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");

// sublinks
const subLinkFeatures = document.querySelector(".nav-link__features");
const subLinkCompany = document.querySelector(".nav-link__company");
const features = document.querySelector(".features");
const company = document.querySelector(".company");

toggleMenu.addEventListener("click", function () {
  container.classList.toggle("nav-open");
  overlay.classList.toggle("hidden");
});

features.addEventListener("click", function () {
  subLinkFeatures.classList.toggle("active-features");
  features.classList.toggle("features-up");
});

company.addEventListener("click", function () {
  subLinkCompany.classList.toggle("active-company");
  company.classList.toggle("company-up");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  container.classList.remove("nav-open");
});
