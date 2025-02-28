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

/*======== FERMER LE MENU SUR MOBILE ======*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //Quand on clique sur un lien, on ferme le menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======== AJOUTER L'OMBRE A L'ENTETE ======*/
const shadowHeader = () => {
  const header = document.getElementById("header");

  /*Ajout d'une class shadow-header dans la header si on scroll 
  sur la barre et que l'axe des abscisses devient superieur ou égal à 50px*/
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*======== AJOUT DE LA LIBRAIRIE SWIPER ======*/
const swiperPopular = new Swiper(".popular__swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 32,
  slidesPerView: "auto",
  centeredSlides: "auto",

  breakpoints: {
    1150: {
      spaceBetween: 80,
    },
  },
});

/*======== SCROLL UP =======*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
