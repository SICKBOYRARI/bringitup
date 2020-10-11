export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
        this.scrollPos = 0;
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

    render() {
        try {
            this.hanson = document.querySelector('.hanson');
        } catch(e) {

        }

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

        this.showSlides(this.slideIndex);
    }
}