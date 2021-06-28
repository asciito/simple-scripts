let slideshow = document.querySelector('#my-slider-1');

(function addSlider(element, sec) {
    const slides = element.querySelectorAll('.slide');
    let i        = 0;       // Posición del slide
    
    setInterval(() => {
        let curr = slides[i];
        let next = curr.nextElementSibling;

        if (! next || ! next.classList.contains('slide')) {
            i = 0;              // Reiniciamos la posición
            next = slides[i];   // Vuelvo a tomar el primer slide
        }

        ++i;
        let currClassList = curr.classList;
        let nextClassList = next.classList;

        currClassList.remove('show');
        nextClassList.add('show');
    }, sec * 1000);
})(slideshow, 4);
