// 변수 지정
let sliderWrapper = document.querySelector('.slide-wrapper'),
 sliderContainer = sliderWrapper.querySelector('.slide-container'),
 slides = sliderContainer.querySelectorAll('li'),
 slideCount = slides.length,
 currentIdx = 0,
 timer,
 pager = sliderWrapper.querySelector('.pager'),
 
 pagerHTML =''
 prevBtn = sliderWrapper.querySelector('#prev'),
 nextBtn = sliderWrapper.querySelector('#next');
// 슬라이드가 있으면 가로로 배열하기, 페이저 생성하기
// for (let i=0; i<slideCount; i++) {
//   slides[i].style.left = `${i*100}%`
// }

// forEach
slides.forEach( (item, index) => {
  item.style.left = `${index*100}%`
  pagerHTML += `<a href="">${index+1}</a>`
}) 

pager.innerHTML = pagerHTML
let pagerBtn = pager.querySelectorAll('a')


/*
A.innerHTML = B; //A에 b를 TAG로 생성
let c = A.innerHTML // A안의 TAG를 C에 저장
*/


// 슬라이드 이동 함수(이동, 페이저 업데이트, 슬라이드 활성화)

function goToSlide(idx) {
  /*
  idx 0 = ul의 left 0% slideContainer.style.left = 0%
  idx 1 = ul의 left 0% slideContainer.style.left = -100%
  idx 2 = ul의 left 0% slideContainer.style.left = -200%
  */
  
  sliderContainer.style.left = `${idx*-100}%`
  currentIdx = idx

  /*슬라이드가 마지막 next에 disabled클래스 추가*/

  if (currentIdx === slideCount-1) {
    nextBtn.classList.add('disabled')
  } 
  else if (currentIdx === 0) {
    prevBtn.classList.add('disabled')
  }

  else {
    prevBtn.classList.remove('disabled')
    nextBtn.classList.remove('disabled')
  }

  // pager 업데이트

  // pagerBtn.forEach( item => {
  //   item.classList.remove('active')
  // })

  for (let btn of pagerBtn) {
    btn.classList.remove('active')
  }

  pagerBtn[currentIdx].classList.add('active')
  
  // 모든 슬라이드에서 active를 제거하고, 현재 슬라이드에 active 추가

  for (let slide of slides) {
    slide.classList.remove('active')
  }
  slides[currentIdx].classList.add('active')
  
}
/* 다음 버튼을 클릭하면 할일
slides를 돌며 slides 인덱스 +1을 currentIdx에 할당
goToSlide(currentIdx)
*/
nextBtn.addEventListener('click', () => {
  goToSlide(currentIdx+1)

})
// 이전 버튼을 클릭하면 할일
prevBtn.addEventListener('click', () => {
  goToSlide(currentIdx-1)

})
goToSlide(0);


// 좌우 버튼 클릭으로 슬라이드 이동시키기



// 페이저로 슬라이드 이동하기
pagerBtn.forEach( (item, idx) => { 
  item.addEventListener('click', (e)=> {
    e.preventDefault()
    goToSlide(idx)
  })

})



// 자동 슬라이드 
function autoSlide() {
timer = setInterval(()=>{
  let nextIdx = (currentIdx + 1) % slideCount
  
  goToSlide(nextIdx)

},1000)
}
//clearInterval(이름)

sliderWrapper.addEventListener('mouseenter', () => {
  clearInterval(timer)
})
sliderWrapper.addEventListener('mouseleave', () => {
  autoSlide()
})

autoSlide()