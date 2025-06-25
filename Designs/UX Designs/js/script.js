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
    handleSlide1Video();
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

// Initial call to handle video on page load
handleSlide1Video();

// ---------------------- Card Section Slider End ------------------