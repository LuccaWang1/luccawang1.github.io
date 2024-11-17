"use strict"; 

window.addEventListener('scroll', function() {
    const topArrowIcon = document.querySelector('#top-img-icon');
    const scrollThreshold = 150; // set scroll threshold to 100px

    if (window.scrollY > scrollThreshold) {
        topArrowIcon.classList.add('visible');
        topArrowIcon.classList.remove('hidden');
    } else {
        topArrowIcon.classList.add('hidden');
        topArrowIcon.classList.remove('visible');
    }
});