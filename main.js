const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMenuMenu);

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
};

function toogleMenuMenu () {
    mobileMenu.classList.toggle('inactive');

}