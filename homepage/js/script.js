const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}
const element = document.querySelectorAll(".badge__char");
const step = 360/element.length;

element.forEach((elem, i) => {
  elem.style.setProperty('--char-rotate', (i * step) + 'deg');
})

const foo = (360 / 7);

for (i = 0; i <= 7; i++) {
  console.log((i * foo) + 'deg');
}