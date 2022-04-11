let header = document.querySelector('.navbar');
let navbarBrand = document.querySelector('.navbar-brand');
let body = document.querySelector('body');


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
        console.log("active");
    } else {
        body.classList.remove('scroll-active');
        console.log("not");
    }
})