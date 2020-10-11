import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }
        try{
            this.hanson.style.display = 'none';

            if (n === 3) {
                setTimeout(() => {
                    this.hanson.style.display = 'block';
                    this.hanson.classList.add('animated', 'slideInUp');
                }, 3000);
            } else {
                this.hanson.style.display = 'none';
                this.hanson.classList.remove('animated', 'slideInUp');
            }
        } catch(e){

        }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
                this.slides[this.slideIndex -1].classList.add('animated', 'slideInDown');
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
                this.slides[this.slideIndex -1].classList.add('animated', 'slideInDown');
            });
        });

        document.querySelectorAll('.prevmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1);
                this.slides[this.slideIndex -1].classList.add('animated', 'slideInRight');
            });
        });

        document.querySelectorAll('.nextmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
                this.slides[this.slideIndex -1].classList.add('animated', 'slideInLeft');
            });
        });
    }

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch(e) {

            }

            this.showSlides(this.slideIndex);
            this.bindTriggers();
        }
    }
}