const slides0 = document.querySelector('.slides0');
const slide0 = document.querySelectorAll('.slides0 li');
let currentIdx0 = 0;
const slideCount0 = slide0.length;
const prev0 = document.querySelector('.prev_button');
const next0 = document.querySelector('.next_button');
const slideWidth0 = 202;
const slideMargin0 = 30;

slides0.style.width = (slideWidth0 + slideMargin0) * slideCount0 + 'px';

function moveSlide0(num0) {
    slides0.style.left = -num0 * 232 + 'px';
    currentIdx0 = num0;
}

next0.addEventListener('click', function () {
    if (currentIdx0 !== 0) moveSlide0(currentIdx0 - 1);
});

prev0.addEventListener('click', function () {
    if (currentIdx0 !== slideCount0 - 1) {
        moveSlide0(currentIdx0 + 1);
    }
})