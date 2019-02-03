const burger = document.querySelectorAll('.burger');

burger[0].addEventListener('click', () => {
    const menu = document.querySelectorAll('.menu');
    const links = document.querySelectorAll('.links');
   
    if (menu[0].style.opacity == '0') {
        menu[0].style.opacity = '';
        menu[1].style.transform = '';
        menu[1].style.background = '';
        menu[2].style.transform = '';
        menu[2].style.background = '';
        menu[3].style.opacity = '';
        links[0].classList.remove('active');
        document.body.style.overflow = '';
    } else {
        menu[0].style.opacity = '0';
        menu[1].style.transform = 'rotate(45deg)';
        menu[1].style.background = '#fff';
        menu[2].style.transform = 'rotate(-45deg)';
        menu[2].style.background = '#fff';
        menu[3].style.opacity = '0';
        links[0].classList.add('active');
        document.body.style.overflow = 'hidden';
    }
});

const slider = document.querySelector('.slider');
const slides = Array.from(slider.children);
const leftButton = document.querySelector('.btn_left');
const rightButton = document.querySelector('.btn_right');
const dotsKeeper = document.querySelector('.dots');
const dots = Array.from(dotsKeeper.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, i) => { slide.style.left = slideWidth * i + 'px'; }

const moveSlide = (currentSlide, targetSlide) => {
    slider.style.transform = 'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('active_slide');
    targetSlide.classList.add('active_slide');
};

const moveDots = (currentDot, targetDot) => {
    currentDot.classList.remove('active_slide');
    targetDot.classList.add('active_slide');
};

slides.forEach(setSlidePosition);

leftButton.addEventListener('click', () => {
    const currentSlide = slider.querySelector('.active_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsKeeper.querySelector('.active_slide');
    const previousDot = currentDot.previousElementSibling;
    
    moveSlide(currentSlide, prevSlide);
    moveDots(currentDot, previousDot);
});

rightButton.addEventListener('click', () => {
    const currentSlide = slider.querySelector('.active_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsKeeper.querySelector('.active_slide');
    const nextDot = currentDot.nextElementSibling;

    moveSlide(currentSlide, nextSlide);
    moveDots(currentDot, nextDot);
});

dotsKeeper.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = slider.querySelector('.active_slide');
    const currentDot = dotsKeeper.querySelector('.active_slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveSlide(currentSlide, targetSlide);
    moveDots(currentDot, targetDot);
});