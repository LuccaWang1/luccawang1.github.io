"use strict"; 

window.addEventListener('scroll', function() {
    const bottomArrowIcon = this.document.querySelector('#bottom-img-icon');
    const hideArrowDistanceFromBottom = 75; // hide this bottom "down" arrow this many pixels from the bottom (75)

    const currentScroll = this.window.scrollY;
    const viewportBottom = this.window.innerHeight + currentScroll;
    const documentBottom = this.document.body.scrollHeight;

    // have the down arrow always be visible (bottomArrowIcon.classList.add('visible')), until 75px (hideArrowDistanceFromBottom) from the bottom (documentBottom)

    if (viewportBottom < documentBottom - hideArrowDistanceFromBottom) {
        bottomArrowIcon.classList.add('visible');
        bottomArrowIcon.classList.remove('hidden');
    } else {
        bottomArrowIcon.classList.add('hidden');
        bottomArrowIcon.classList.remove('visible');
    }
});
