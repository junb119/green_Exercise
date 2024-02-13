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
let timer;
let slideTrigger = true
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



// 슬라이드 중앙 배치
function slideLayout(sw,sm) {
  let newmoveAmt = sw + sm
  slideContainer.style.width = (sw * newslideCount) + sm * (newslideCount - 1) + 'px'

  slideContainer.style.transform = `translateX(${newmoveAmt * -slideCount}px)`  
  slideContainer.style.gap = `${sm}px`

  for (let slide of slides) {
    slide.style.width = `${sw}px`
  }
}
slideLayout(slideWidth,slideMargin)

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

prevBtn.addEventListener('click', ()=>debounce(()=>moveSlide(currentIdx-1) , 500))
nextBtn.addEventListener('click', ()=>debounce(()=>moveSlide(currentIdx+1) , 500))

// debounce 
function debounce(callback, time) {
  if (slideTrigger) {
    callback();
    slideTrigger = false;
    setTimeout(() => {
      slideTrigger = true;
    }, time);
  }
}
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') debounce(()=>moveSlide(currentIdx+1) , 500)
  else if (e.key === 'ArrowLeft') debounce(()=>moveSlide(currentIdx-1) , 500)
 
  // debounce(() => {
  //   if (e.key === 'ArrowRight') {
  //     moveSlide(currentIdx + 1);
  //   }
  //   if (e.key === 'ArrowLeft') {
  //     moveSlide(currentIdx - 1);
  //   }
  // }, 500)();
});





// function autoSlide() {
//   timer = setInterval(()=>{
//     moveSlide(currentIdx+1)
//   } ,1000)
// }
// autoSlide()




// slideContainer.addEventListener('mouseenter', () => {
//   clearInterval(timer)
// })
// slideContainer.addEventListener('mouseleave', () => {
//   autoSlide()
// })

let resizeEvent = new Event('resize');



window.addEventListener('resize', () => {
  let bodyWidth = document.body.offsetWidth;
  let warapperWidth = slideWrapper.offsetWidth;
  let newslideWidth;
  let newslideMargin = 20;
  if(bodyWidth <= 700) { // 3개
    newslideWidth = (warapperWidth - (newslideMargin * (slideToShow - 1 ))) / slideToShow
  } else {
    newslideWidth = slideWidth;
    newSlideMargin = slideMargin;
  }

  
  if(bodyWidth <= 600) {// 2개

  }
  
  if(bodyWidth <= 500) {

  }
  slideLayout(newslideWidth,newSlideMargin)
  
})

window.dispatchEvent(resizeEvent)