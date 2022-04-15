let header = document.querySelector('.navbar');
let navbarBrand = document.querySelector('.navbar-brand');
let body = document.querySelector('body');
let logoSite = document.querySelector('#logo-site');

function menu() {
    if (window.scrollY == 0) {
        let navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler.ariaExpanded) {
            body.classList.toggle('menu-open');
        }
    }
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        body.classList.add('scrolled');
        logoSite.setAttribute('src', '/assets/images/logo-reduit.svg');
    } else {
        body.classList.remove('scrolled');
        logoSite.setAttribute('src', '/assets/images/logo-bouillotteetculotte.svg');
    }
})