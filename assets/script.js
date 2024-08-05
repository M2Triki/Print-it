const slides = [
    { "image": "slide1.jpg", "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>" },
    { "image": "slide2.jpg", "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
    { "image": "slide3.jpg", "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>" },
    { "image": "slide4.png", "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>" }
];

let currentSlide = 0;

const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('dot_selected');
    }
    dotsContainer.appendChild(dot);
});

function updateSlide(index) {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;
    updateDots(index);
}

function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        if (idx === index) {
            dot.classList.add('dot_selected');
        } 
        else {
            dot.classList.remove('dot_selected');
        }
    });
}

arrowLeft.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide = currentSlide - 1;
    } 
    else {
        currentSlide = slides.length - 1;
    }
    updateSlide(currentSlide);
});

arrowRight.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide = currentSlide + 1;
    } 
    else {
        currentSlide = 0;
    }
    updateSlide(currentSlide);
});

updateSlide(currentSlide);
