// ---------------------- Card Section Slider Start ------------------
const slides1 = document.querySelectorAll('.slide1');
const slides2 = document.querySelectorAll('.slide2');
const slides3 = document.querySelectorAll('.slide3');

var counter = 0;
var counter2 = 0;
var counter3 = 0;


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