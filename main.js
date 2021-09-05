
const teachersSlider = new SliderCarousel({
    main: '.teachers-slider__wrapper',
    wrap: '.teachers-content',
    prev: '#teachersPrev',
    next: '#teachersNext',
    slidesToShow: 5,
    infinity: true
});
teachersSlider.init();
let offset = 0;
const sliderLine = document.querySelector('.courses-slider-line');
const coursesPrev = document.querySelector('#coursesPrev');
const coursesNext = document.querySelector('#coursesNext');
const itemWidth = document.querySelector('.courses-slider__item').offsetWidth;
const numbers = document.querySelector('.courses-numbers');
const itemsQuantity = sliderLine.children;

coursesPrev.addEventListener('click', () => {
    offset = offset - itemWidth;
    if(offset < 0) {
        offset = itemWidth * 2;
    }
    sliderLine.style.left = -offset + 'px';
}) 

coursesNext.addEventListener('click', () => {
    offset = offset + itemWidth;
    if (offset > itemWidth * 2) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
numbers.innerHTML = `1 / ${itemsQuantity.length}`;