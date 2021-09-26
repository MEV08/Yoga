class SliderCarousel {
    constructor({
        slider,
        sliderLine,
        btnPrev,
        btnNext,
        numbers,
        activeSlideIndex = 1,
    }) {
        this.slider = document.querySelector(slider);
        this.sliderLine = document.querySelector(sliderLine);
        this.slides = document.querySelector(sliderLine).children;
        this.btnPrev = document.querySelector(btnPrev);
        this.btnNext = document.querySelector(btnNext);
        this.numbers = document.querySelector(numbers);
        this.activeSlideIndex = activeSlideIndex;
        this.maxSlideIndex = this.slides.length - 1;
        this.itemWidth = this.slides[0].offsetWidth;
    }
    init() {
        this.clickSlide();
        this.btnPrev.addEventListener('click', () => {
            this.prevSlide();
        });
        this.btnNext.addEventListener('click', () => {
            this.nextSlide();
        });
        this.sliderLine.style.left = - (this.activeSlideIndex * this.itemWidth) + 'px';
        Array.from(this.slides)[this.activeSlideIndex].classList.add('active');
        this.numbers.innerHTML = `${this.activeSlideIndex + 1} / ${this.maxSlideIndex + 1}`;
    }
    prevSlide() {
        this.changeSlide('prev');
    }
    nextSlide() {
        this.changeSlide('next');
    }
    changeSlide(direction) {
        if (direction === 'prev') {
            this.clearActiveClasses();
            this.activeSlideIndex--;
            if (this.activeSlideIndex < 0) {
                this.activeSlideIndex = this.maxSlideIndex;
            }
            Array.from(this.slides)[this.activeSlideIndex].classList.add('active');
            this.sliderLine.style.left = -(this.activeSlideIndex * this.itemWidth) + 'px';
        } else if (direction === 'next') {
            this.clearActiveClasses();
            this.activeSlideIndex++;
            if (this.activeSlideIndex > this.maxSlideIndex) {
                this.activeSlideIndex = 0;
            }
            Array.from(this.slides)[this.activeSlideIndex].classList.add('active');
            this.sliderLine.style.left = - (this.activeSlideIndex * this.itemWidth) + 'px';
        }
        this.numbers.innerHTML = `${this.activeSlideIndex + 1} / ${this.maxSlideIndex + 1}`;
    }
    clearActiveClasses() {
        Array.from(this.slides).forEach((slide) => {
            slide.classList.remove('active');
        })
    }
    clickSlide() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].addEventListener('click', () => {
                this.activeSlideIndex = i;
                this.clearActiveClasses();
                Array.from(this.slides)[i].classList.add('active');
                this.numbers.innerHTML = `${this.activeSlideIndex + 1} / ${this.maxSlideIndex + 1}`;
                this.sliderLine.style.left = - (this.activeSlideIndex * this.itemWidth) + 'px';
            })
        }
    }
}