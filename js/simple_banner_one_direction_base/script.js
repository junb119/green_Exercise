const slideWrapper = document.querySelector('.slidewrapper');
const slideContainer = slideWrapper.querySelector('.slidecontainer');
const slides = slideWrapper.querySelectorAll('.slide');
const pager = slideWrapper.querySelector('.pager');
const slideCount = slides.length;
let currentIdx = 0;
let timer;
let pagerHtml = '';

// 페이저 생성
slides.forEach((slide,idx)=> {
  slide.style.top = `${idx * 100}%`;
  pagerHtml += `<a href="#">${idx}</a>`
})
console.log(pagerHtml)
pager.innerHTML = pagerHtml

const pagerBtn = pager.querySelectorAll('a');

pagerBtn.forEach((pager,idx)=>{
  pager.addEventListener('click',(e)=>{
    e.preventDefault()
    moveSlide(idx);
  })
})

function moveSlide(num) {
  if(currentIdx == num ) return
  let curruntSlide = slides[currentIdx];
  let nextSlide = slides[num];

  
  curruntSlide.animate([{top: '0%'},{top: '-100%'}] , {duration: 500, fill:'forwards'})
  nextSlide.animate([{top: '100%'},{top: '0%'}],{duration: 500,fill:'forwards'})
   
  
  currentIdx = num

  for (let pager of pagerBtn) {
    pager.classList.remove('active')
  }
  pagerBtn[currentIdx].classList.add('active')
}
pagerBtn[0].classList.add('active')


function autoSlide() {
  timer = setInterval(() => {
    let nextIdx = (currentIdx + 1) % slideCount
    moveSlide(nextIdx)
  }, 3000);
}

autoSlide()

slideWrapper.addEventListener('mouseenter', ()=> {
  clearInterval(timer);
})
slideWrapper.addEventListener('mouseleave', ()=> {
  autoSlide()
})