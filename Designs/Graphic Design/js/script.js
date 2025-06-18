// ---------------------- Card Section Slider Start ------------------
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const slides2 = document.querySelectorAll('.slide2');
var counter = 0;
var counter2 = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)
slides2.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)


const Goprev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1; 
    }
    slideImage();
}
const Prev = () => {
    counter2--;
    if (counter2 < 0) {
        counter2 = slides2.length - 1; 
    }
    slideCategory();
}
const Gonext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0; 
    }
    slideImage();
}
const Next = () => {
    counter2++;
    if (counter2 >= slides2.length) {
        counter2 = 0; 
    }
    slideCategory();
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    );
    indicators.forEach((indicator, index) => {
        if (index === counter) {
            indicator.classList.add('indi-active');
        } else {
            indicator.classList.remove('indi-active');
        }
    });
}
const slideCategory = () => {
    slides2.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter2 * 100}%)`;
        }
    );

}

// ---------------------- Card Section Slider End ------------------