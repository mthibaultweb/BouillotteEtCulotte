let header = document.querySelector('.navbar');
let navbarBrand = document.querySelector('.navbar-brand');
let homepage = document.querySelector('body.homepage');

if (homepage)

function logo() {
    if (window.scrollY == 0) {
        let navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler.ariaExpanded) {
            navbarBrand.classList.toggle('solid');
        }
    }
}

window.addEventListener('scroll', function() {
    let windowPosition = window.scrollY > 0;
    if (homepage) {
        navbarBrand.classList.toggle('solid');
    }
    header.classList.toggle('scrolling-active', windowPosition);
    navbarBrand.classList.toggle('solid', windowPosition);
})