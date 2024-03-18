const slideWrapper = document.querySelector('.slidewrapper');
const slideContainer = slideWrapper.querySelector('ul');
const slideCount = slideContainer.querySelectorAll('li').length;
let currentIdx = 0;
const prevBtn = slideWrapper.querySelector('.prev');
const nextBtn = slideWrapper.querySelector('.next');
let slideWidth = slideWrapper.offsetWidth;

slideContainer.style.width = `${slideWidth * slideCount}px`;

window.addEventListener('resize',()=>{
  
  if(document.body.offsetWidth <= 1272){
    slideWidth = slideWrapper.offsetWidth - 32;    
  } else{
    slideWidth = slideWrapper.offsetWidth;    
  }
  slideContainer.style.width = `${slideWidth * slideCount}px`;
});


const btt = document.querySelector('#btt');

window.addEventListener('scroll', ()=>{
  console.log(window.scrollY);
  if(window.scrollY > 300){
    btt.classList.add('active');
  }else{
    btt.classList.remove('active');
  }
});
btt.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({left:0, top:0, behavior:'smooth'});
});



//슬라이드 이동
function goToSlide(num){
  slideContainer.style.transform = `translateX(${slideWidth * -num}px)`;
  currentIdx = num;
}
//다음 버튼 클릭시 이동

nextBtn.addEventListener('click',()=>{
  if(currentIdx === slideCount - 1){
    goToSlide(0);
  }else{
    goToSlide(currentIdx+1);
  }  
});

prevBtn.addEventListener('click',()=>{
  if(currentIdx === 0){
    goToSlide(slideCount - 1);
  } else{
    goToSlide(currentIdx-1);
  }
});










