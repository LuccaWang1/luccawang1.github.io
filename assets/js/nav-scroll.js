"use strict"; 

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;

    if (window.scrollY > navbarHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});