'use strict';
// Teachers-slider
class SliderCarousel{
    constructor({
        main, 
        wrap,
        next, 
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 2,
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow)
        };
    }
    init() {
        this.addClass();
        this.addStyle();
        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
    }
    addClass() {
        this.main.classList.add('slider');
        this.wrap.classList.add('slider__wrap');
        for (const item of this.slides) {
            item.classList.add('slider__item');
        }
    }
    addStyle() {
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
            .slider {
                overflow: hidden !important;
            }
            .slider__wrap {
                display: flex !important;
                transition: transform .3s !important;
                will-change: transform !important;
            }
            .slider__item {
                flex: 0 0 ${this.options.widthSlide}% !important;
                border: 1px solid green !important;
            }
        `;
        document.head.appendChild(style);
    } 
    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }
    prevSlider() {
        if (this.options.infinity || this.options.position > 0 ) {
            --this.options.position;
            console.log(this.options.position);
            if (this.options.position < 0) {
                this.options.position = this.slides.length - this.slidesToShow
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
        }
        
    }
    nextSlider() {
        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
            ++this.options.position;
            console.log(this.options.position);
            if (this.options.position > this.slides.length - this.slidesToShow) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
        }
        
    }
    addArrow() {

    }
} 