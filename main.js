
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

