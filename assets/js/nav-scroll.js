"use strict"; 

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const viewportHeight = window.innerHeight;

    if (window.scrollY > viewportHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});