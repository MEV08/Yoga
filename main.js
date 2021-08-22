
const teachersSlider = new SliderCarousel({
    main: '.teachers-slider__wrapper',
    wrap: '.teachers-content',
    prev: '#teachersPrev',
    next: '#teachersNext',
    slidesToShow: 5,
    infinity: false
});
teachersSlider.init();