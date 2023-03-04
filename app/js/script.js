const toggleMenu = document.querySelector(".btn-mobile-nav");
const navList = document.querySelectorAll(".nav-list");

const features = document.querySelector(".features");
const company = document.querySelector(".company");

// sublinks
const subLinkFeatures = document.querySelector(".nav-link__features");
const subLinkCompany = document.querySelector(".nav-link__company");

features.addEventListener("click", function () {
  subLinkFeatures.classList.toggle("active-features");
  features.classList.toggle("features-up");
  console.log(subLinkFeatures);
});

company.addEventListener("click", function () {
  subLinkCompany.classList.toggle("active-company");
  company.classList.toggle("company-up");
});
