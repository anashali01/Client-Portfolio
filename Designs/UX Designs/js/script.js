// ---------------------- Card Section Slider Start ------------------
const slides1 = document.querySelectorAll('.slide1');

var counter = 0;


slides1.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)




function RedPrev() {
    counter--;
    if (counter < 0) {
        counter = slides1.length - 1;
    }
    slideRed();
}
function RedNext() {
    counter++;
    if (counter >= slides1.length) {
        counter = 0;
    }
    slideRed();
}
function slideRed() {
    slides1.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    );
}

// ---------------------- Card Section Slider End ------------------