const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMenuMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);


function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
};

function toogleMenuMenu () {

    const isAsideClosed = aside.classList.contains('inactive');


    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside () {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

     aside.classList.toggle('inactive');
}