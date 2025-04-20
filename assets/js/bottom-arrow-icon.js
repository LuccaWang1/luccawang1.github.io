"use strict"; 

window.addEventListener('scroll', function() {
    const bottomArrowIcon = this.document.querySelector('#bottom-img-icon');
    const scrollThreshold = 150; // set scroll threshold to 150px

    if (window.scrollY > scrollThreshold) {
        bottomArrowIcon.classList.add('visible');
        bottomArrowIcon.classList.remove('hidden');
    } else {
        bottomArrowIcon.classList.add('hidden');
        bottomArrowIcon.classList.remove('visible');
    }
});