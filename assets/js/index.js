/*======= AFFICHER LE MENU SUR PETIT ECRAN ======*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*Ouvrir Menu deroulant*/
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

/*Fermer Menu deroulant*/
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});
