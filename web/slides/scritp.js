// All the slides
const slides = $('.slide');

// Buttons
const prev = $('#prev');
const next = $('#next');

let active = $('.slide.active');

console.log(slides);

prev.click(() => {
    let prevEl = active.prev();
    active.removeClass('active');

    if (prevEl.length) {
        active = prevEl.addClass('active');
    } else {
        active = slides.last().addClass('active');
    }
    
});

next.click(() => {
    let nextEl = active.next();
    active.removeClass('active');
    
    if (nextEl.length) {
        active = nextEl.addClass('active');
    } else {
        active = slides.first().addClass('active');
    }

    console.log(active);
});