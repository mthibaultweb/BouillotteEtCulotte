let header = document.querySelector('.navbar');
let navbarBrand = document.querySelector('.navbar-brand');

function logo() {
    if (window.scrollY == 0) {
        let navbarToggler = document.querySelector('.navbar-toggler');
        console.log(navbarToggler.ariaExpanded);
        if (navbarToggler.ariaExpanded) {
            navbarBrand.classList.toggle('solid');
            console.log("woek");
        }
    }
}

window.addEventListener('scroll', function() {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
    navbarBrand.classList.toggle('solid', windowPosition);
})