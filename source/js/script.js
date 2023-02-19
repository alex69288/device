// Button auto-disabled
let searchInput = document.querySelector(".search__input");
let searchButton = document.querySelector(".search__button");

if (searchInput.hasAttribute("disabled")) {
  // searchButton.setAttribute("disabled", true);
  searchButton.disabled = true;
} else {
  searchButton.removeAttribute("disabled");
}

// Burger menu
let catalogLink = document.querySelector(".page-header__catalog-link");
let catalogBurger = document.querySelector(".page-header__catalog-burger");

catalogLink.addEventListener("click", function () {
  catalogLink.classList.toggle("page-header__catalog-link--active");
  catalogBurger.classList.toggle("page-header__catalog-burger--active");
});

// Popover
let popover = document.querySelector(".popover");
let popoverButton = document.querySelector(".page-header__button--shipping");

popoverButton.addEventListener("click", function () {
  popover.classList.toggle("popover--active");
});

// Проверка JS
let script = document.createElement("script");
script.src = "js/script.min.js";
document.head.append(script);

script.onerror = function () {
  catalogBurger.classList.add("no-js");
};
