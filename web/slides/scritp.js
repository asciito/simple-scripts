// All the slides
const slides = $('.slides .slide');

// Active one
let active   = $('.slide.active');

// Buttons
const prev = $('#prev');
const next = $('#next');

// Current active position
let curr = getCurrentSlideIndex(); // Reduce the set of matched elements


// Event for the button PREV
prev.click(() => {
    active.removeClass('active');

    if (curr > 0) {
        curr -= 1;
    } else {
        curr = 3;
    }
    
    active = $(slides[curr]).addClass('active');
});


// Event for the button NEXT
next.click(() => {
    active.removeClass('active');

    if (curr < 3) {
        curr += 1;
    } else {
        curr = 0;
    }
    
    active = $(slides[curr]).addClass('active');
});


// Get the current slide
function getCurrentSlideIndex() {
    let filtered = Array.from(slides.filter('.active'));

    // We just need one active class in our elements
    if (filtered.length > 1) {
        filtered.slice(1).forEach(el => $(el).removeClass('active'));
    }

    return $(filtered[0]).index();
}