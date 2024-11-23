// why this code: better control of up arrow element smooth scroll across browsers

"use strict";

document.querySelector('#top-img-icon').addEventListener('click', function(e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}