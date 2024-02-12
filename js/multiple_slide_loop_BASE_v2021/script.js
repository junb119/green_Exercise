const slideWrapper = document.querySelector('.slide_wrapper');
const slideContainer = slideWrapper.querySelector('.slides');
let slides = slideContainer.querySelectorAll('li');
let currentIdx = 0;
let slideCount = slides.length;
const slideWidth = 200;
const slideMargin = 30;
const slideToShow = 3;
const prevBtn = slideWrapper.querySelector('.prev');
const nextBtn = slideWrapper.querySelector('.next');
const moveAmt = slideWidth +slideMargin
// 복사본 생성

// 뒤로 생성
for (let slide of slides) {
  let slideClone = slide.cloneNode(true)
  slideContainer.appendChild(slideClone)
}

// 앞으로 생성
for (let i=slides.length-1; i>=0; i--) {
  let slideClone = slides[i].cloneNode(true);
  slideContainer.prepend(slideClone)
}

// slideContainer의 너비 지정
slides = slideContainer.querySelectorAll('li');
let newslideCount = slides.length;

slideContainer.style.width = (slideWidth * newslideCount) + slideMargin * (newslideCount - 1) + 'px'

// 슬라이드 중앙 배치

slideContainer.style.transform = `translateX(${(slideWidth + slideMargin ) * -slideCount}px)`

// 이동함수
function moveSlide(idx) {
  slideContainer.style.left = (idx * -(moveAmt))+'px'
  currentIdx = idx
  
  if (currentIdx === -slideCount || currentIdx === slideCount) {
    setTimeout(() => {
      slideContainer.classList.remove('animated')
      slideContainer.style.left = 0
      // slideContainer.style.transition = 'left .3s'
    }, 500);
    setTimeout(() => {
      slideContainer.classList.add('animated')
      
    }, 550);
    currentIdx = 0;
  }
  console.log(currentIdx)
}


// prevBtn.addEventListener('click',()=>{
//    moveSlide(currentIdx-1)
// })
// nextBtn.addEventListener('click',()=>{
//   moveSlide(currentIdx+1)
// })

prevBtn.addEventListener('click', debounce( function () {moveSlide(currentIdx-1)} , 500))



// debounce 
function debounce(callback, time) {
  let slideTrigger = true;
  console.log(slideTrigger)
  return () => {
    if (slideTrigger) {
      callback();
      slideTrigger = false;
      setTimeout(() => {
        slideTrigger = true;
      }, time);
    }
    console.log(slideTrigger)
  }

}
