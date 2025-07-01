// ---------------------- Card Section Slider Start ------------------
const slides1 = document.querySelectorAll('.slide1');
const slides2 = document.querySelectorAll('.slide2');
const slides3 = document.querySelectorAll('.slide3');
const slides4 = document.querySelectorAll('.slide4');

var counter = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;


slides1.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)
slides2.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)
slides3.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)
slides4.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
);



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
    handleSlide1Video();
}

function NuanPrev() {
    counter2--;
    if (counter2 < 0) {
        counter2 = slides2.length - 1;
    }
    slideNuan();
}
function NuanNext() {
    counter2++;
    if (counter2 >= slides2.length) {
        counter2 = 0;
    }
    slideNuan();
}
function slideNuan() {
    slides2.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter2 * 100}%)`;
        }
    );
    handleSlide2Video();
}

function CampusPrev() {
    counter3--;
    if (counter3 < 0) {
        counter3 = slides3.length - 1;
    }
    slideCampus();
}
function CampusNext() {
    counter3++;
    if (counter3 >= slides3.length) {
        counter3 = 0;
    }
    slideCampus();
}
function slideCampus() {
    slides3.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter3 * 100}%)`;
        }
    );
    handleSlide3Video();
}

const WebPrev = () => {
    counter4--;
    if (counter4 < 0) {
        counter4 = slides4.length - 1; 
    }
    slideWeb();
}
const WebNext = () =>{
    counter4++;
    if (counter4 >= slides4.length-1) {
        counter4 = 0; 
    }
    slideWeb();
}
const slideWeb = () => {
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

// --- Autoplay video in slide1 only when visible ---
function handleSlide1Video() {
    const slides1 = document.querySelectorAll('.slide1');
    slides1.forEach((slide, idx) => {
        const video = slide.querySelector('video');
        if (video) {
            if (idx === counter) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }
    });
}
function handleSlide2Video() {
    const slides2 = document.querySelectorAll('.slide2');
    slides2.forEach((slide, idx) => {
        const video = slide.querySelector('video');
        if (video) {
            if (idx === counter2) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }
    });
}
function handleSlide3Video() {
    const slides3 = document.querySelectorAll('.slide3');
    slides3.forEach((slide, idx) => {
        const video = slide.querySelector('video');
        if (video) {
            if (idx === counter3) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }
    });
}

// Initial call to handle video on page load
handleSlide1Video();
handleSlide2Video();
handleSlide3Video();

// ---------------------- Card Section Slider End ------------------

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
addTouchSlider(document.querySelector('.slides4'), 'counter4', slideWeb, slides4.length);