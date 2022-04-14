let header = document.querySelector('.navbar');
let navbarBrand = document.querySelector('.navbar-brand');
let body = document.querySelector('body');
let logoSite = document.querySelector('#logo-site');

function logo() {
    if (window.scrollY == 0) {
        let navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler.ariaExpanded) {
            navbarBrand.classList.toggle('solid');
        }
    }
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        body.classList.add('scroll-active');
        logoSite.setAttribute('src', '/assets/images/logo-reduit.svg');
    } else {
        body.classList.remove('scroll-active');
        logoSite.setAttribute('src', '/assets/images/logo-bouillotteetculotte.svg');
    }
})