const teachersSlider = new SliderCarousel({
  slider: '#teachersSlider',
  sliderLine: '.teachers-content',
  btnNext: '#teachersNext',
  btnPrev: '#teachersPrev',
  numbers: '.teachers-numbers',
});
teachersSlider.init();
const coursesSlider = new SliderCarousel({
  slider: '#courses-slider',
  sliderLine: '.courses-slider__line',
  btnNext: '#coursesNext',
  btnPrev: '#coursesPrev',
  numbers: '.courses-numbers',
});
coursesSlider.init();

