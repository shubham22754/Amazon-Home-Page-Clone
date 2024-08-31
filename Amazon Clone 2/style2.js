// Hot Deals Slider
const hotPrevButton = document.getElementById('hot_deal_btn_prev');
const hotNextButton = document.getElementById('hot_deal_btn_next');
const hotProductList = document.getElementById('hot_deals_product_list');

let hotCurrentTranslateX = 0;
const hotItemWidth = 270; // Adjusted for min-width + padding + margin

hotPrevButton.addEventListener('click', () => {
    if (hotCurrentTranslateX < 0) {
        hotCurrentTranslateX += hotItemWidth;
        hotProductList.style.transform = `translateX(${hotCurrentTranslateX}px)`;
    }
});

hotNextButton.addEventListener('click', () => {
    const hotMaxTranslateX = -(hotProductList.scrollWidth - hotProductList.clientWidth);
    if (hotCurrentTranslateX > hotMaxTranslateX) {
        hotCurrentTranslateX -= hotItemWidth;
        hotProductList.style.transform = `translateX(${hotCurrentTranslateX}px)`;
    }
});

// Automatic Slide Show for Slides
const slides = document.querySelector('.slides');
const slideImages = slides.querySelectorAll('img');
const totalSlides = slideImages.length;
let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}
// Change slide every 3 seconds
setInterval(showNextSlide, 3000);

// Today's Deals Slider
const todayPrevButton = document.getElementById('today_deal_btn_prev');
const todayNextButton = document.getElementById('today_deal_btn_next');
const todayProductList = document.getElementById('today_deals_product_list');

let todayCurrentTranslateX = 0;
const todayItemWidth = 270; // Adjusted for min-width + padding + margin

todayPrevButton.addEventListener('click', () => {
    if (todayCurrentTranslateX < 0) {
        todayCurrentTranslateX += todayItemWidth;
        todayProductList.style.transform = `translateX(${todayCurrentTranslateX}px)`;
    }
});

todayNextButton.addEventListener('click', () => {
    const todayMaxTranslateX = -(todayProductList.scrollWidth - todayProductList.clientWidth);
    if (todayCurrentTranslateX > todayMaxTranslateX) {
        todayCurrentTranslateX -= todayItemWidth;
        todayProductList.style.transform = `translateX(${todayCurrentTranslateX}px)`;
    }
});
