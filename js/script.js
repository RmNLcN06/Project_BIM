var menu = document.getElementsByClassName("header__top__menu")[0];
var popupServices = document.getElementsByClassName(
  "navigation__link--dropdown"
)[0];
var popupTools = document.getElementsByClassName(
  "navigation__link--dropdown"
)[1];

// Menu Animation On Click
menu.addEventListener("click", () => {
  menu.classList.toggle("change");
});

// Popup Services SubLinks On Click
popupServices.addEventListener("click", () => {
  var popupServicesLinks = document.getElementsByClassName(
    "navigation__link--dropdown--sublink"
  )[0];
  popupServicesLinks.classList.toggle("show");
});

// Popup Tools SubLinks On Click
popupTools.addEventListener("click", () => {
  var popupToolsLinks = document.getElementsByClassName(
    "navigation__link--dropdown--sublink"
  )[1];
  popupToolsLinks.classList.toggle("show");
});
