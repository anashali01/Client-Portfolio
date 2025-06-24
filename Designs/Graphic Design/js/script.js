// ---------------------- Card Section Slider Start ------------------
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const slides2 = document.querySelectorAll('.slide2');
const slides3 = document.querySelectorAll('.slide3');
const slides4 = document.querySelectorAll('.slide4');
var counter = 0;
var counter2 = 0;
let counter3 = 0;
let counter4 = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)
slides2.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
);
slides3.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
);
slides4.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
);


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
function EcoPrev() {
    counter3--;
    if (counter3 < 0) {
        counter3 = slides3.length - 1;
    }
    slideEco();
}
function EcoNext() {
    counter3++;
    if (counter3 >= slides3.length) {
        counter3 = 0;
    }
    slideEco();
}
function slideEco() {
    slides3.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter3 * 100}%)`;
        }
    );
}

function MorePrev() {
    counter4--;
    if (counter4 < 0) {
        counter4 = slides4.length - 1;
    }
    slideMore();
}
function MoreNext() {
    counter4++;
    if (counter4 >= slides4.length) {
        counter4 = 0;
    }
    slideMore();
}
function slideMore() {
    slides4.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter4 * 100}%)`;
        }
    );
}

// ---------------------- Card Section Slider End ------------------