// why this code: better control of up arrow element smooth scroll across browsers

"use strict";

document.querySelector('#bottom-img-icon').addEventListener('click', function(e) {
    e.preventDefault(); // good practice to have, so will keep, but don't necessarily need here just bc there's no default behavior for the icon (link a link)

    window.scrollTo({
        // change the line directly below
        top: 0,
        behavior: 'smooth'
    })
});