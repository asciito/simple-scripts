let slideshow = document.querySelector('#my-slider-1');

(function addSlider(element, sec) {
    const slides = element.querySelectorAll('.slide');
    let i        = 0;       // position of the slide 
    
    setInterval(() => {
        let curr = slides[i];
        let next = curr.nextElementSibling;

        if (! next || ! next.classList.contains('slide')) {
            i = 0;              // reset the position
            next = slides[i];   // take the next slide
        }

        ++i;
        let currClassList = curr.classList;
        let nextClassList = next.classList;

        currClassList.remove('show');
        nextClassList.add('show');
    }, sec * 1000);
})(slideshow, 4);
