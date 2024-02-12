// 변수 지정
let slideUl = document.querySelector('.slide-container');
let slide = document.querySelectorAll('.slide-container li');
let slideCount = slide.length;
let currentIdx = 0;
let timer;

slide[0].classList.add('active');

// 자동 슬라이드 
function autoSlide(){
  timer = setInterval(()=>{
    // let nextIdx = currentIdx + 1;
    // if(nextIdx == 5){nextIdx = 0};
  
    let nextIdx = (currentIdx + 1) % slideCount;
  
    slide[currentIdx].classList.remove('active');
    slide[nextIdx].classList.add('active');
  
    currentIdx = nextIdx;
  
  }, 3000);
}

autoSlide();

slideUl.addEventListener('mouseenter',()=>{
  clearInterval(timer);
});
slideUl.addEventListener('mouseleave',()=>{
  autoSlide();
});


