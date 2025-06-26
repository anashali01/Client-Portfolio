// ---------------------- Card Section Slider Start ------------------
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const slides2 = document.querySelectorAll('.slide2');
const slides3 = document.querySelectorAll('.slide3');
const slides4 = document.querySelectorAll('.slide4');
var counter = 0;
var counter2 = 0;
let counter3 = 0;
var counter4 = 0;

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
const Moreprev = () => {
    counter4--;
    if (counter4 < 0) {
        counter4 = slides4.length - 1; 
    }
    slideMore();
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
const Morenext = () =>{
    counter4++;
    if (counter4 >= slides4.length) {
        counter4 = 0; 
    }
    slideMore();
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
const slideMore = () => {
    slides4.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter4 * 100}%)`;
        }
    );
    indicators.forEach((indicator, index) => {
        if (index === counter4) {
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


// --- Touch/Drag to Slide for All Sliders ---

function addTouchSlider(wrapper, counterRef, slideFn, slidesLength) {
    let startX = 0;
    let endX = 0;
    let threshold = 50; // Minimum px to trigger slide

    wrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    wrapper.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
        // Prevent horizontal scroll while dragging slider
        if (Math.abs(endX - startX) > 10) {
            e.preventDefault();
        }
    }, { passive: false });

    wrapper.addEventListener('touchend', (e) => {
        let diff = endX - startX;
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe right (previous)
                window[counterRef]--;
                if (window[counterRef] < 0) window[counterRef] = slidesLength - 1;
            } else {
                // Swipe left (next)
                window[counterRef]++;
                if (window[counterRef] >= slidesLength) window[counterRef] = 0;
            }
            slideFn();
        }
        // Reset
        startX = 0;
        endX = 0;
    });
}

// Add touch/drag to all sliders
addTouchSlider(document.querySelector('.slides'), 'counter', slideImage, slides.length);
addTouchSlider(document.querySelector('.slides2'), 'counter2', slideCategory, slides2.length);
addTouchSlider(document.querySelector('.slides4'), 'counter4', slideMore, slides4.length);

// ---------------------- Card Section Slider End ------------------