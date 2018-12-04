document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.banner__slide');
    var prev = document.querySelector('.banner__prev');
    var next = document.querySelector('.banner__next');
    var current = 0;
    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);

    var eventHandled = true;
    function prevSlide() {
        if(eventHandled){
            eventHandled = false;
            var currentSlide = slides[current];
            current--;
            if (current < 0) current = slides.length-1;
            var prevSlide = slides[current];
            var pos = 0;
            prevSlide.style.left = '-885px';
            prevSlide.classList.add('banner__slide--active');
            var id = setInterval(frame, 2);
            function frame() {
                if(pos < 886){
                    currentSlide.style.left = pos + 'px';
                    prevSlide.style.left = (pos - 885) + 'px';
                    pos+=15;
                } else {
                    clearInterval(id);
                    prevSlide.style.left = '0';
                    currentSlide.classList.remove('banner__slide--active');
                    eventHandled = true;
                }
            }
        }

    }

    function nextSlide() {
        if(eventHandled) {
            eventHandled = false;
            var currentSlide = slides[current];
            current++;
            if (current >= slides.length) current = 0;
            var nextSlide = slides[current];
            var pos = 0;
            nextSlide.style.left= '885px';
            nextSlide.classList.add('banner__slide--active');
            var id = setInterval(frame, 5);
            function frame() {
                if(pos < 886){
                    currentSlide.style.left = -pos + 'px';
                    nextSlide.style.left = 885 - pos + 'px';
                    pos+=15;
                } else {
                    clearInterval(id);
                    nextSlide.style.left = '0';
                    currentSlide.classList.remove('banner__slide--active');
                    eventHandled = true;
                }
            }
        }

    }
});