// why this code: better control of up arrow element smooth scroll across browsers

"use strict";

document.querySelector('#bottom-img-icon').addEventListener('click', function(e) {
    e.preventDefault(); // good practice to have, so will keep, but don't necessarily need here just bc there's no default behavior for the icon (link a link)

    window.scrollTo({
        // documnet.body.scrollHeight takes the biggest pixel amount, and has the scroll go to the point, so the bottom of the webpage
        top: document.body.scrollHeight,
        behavior: 'smooth'
    })
});