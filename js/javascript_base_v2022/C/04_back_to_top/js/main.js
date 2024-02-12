// document.addEventListener('DOMContentLoaded', () => {
  // btt.classList.add('active')
  // })
  
const btt = document.querySelector('#go-top');

/*
스크롤양(scrollAmt)이 300보다 크다면 
btt에 클래스명 active 추가 
작다면 active 제거
*/

window.addEventListener('scroll' , () => {
  let scrollAmt = window.scrollY
  if (scrollAmt > 300) {
    btt.classList.add('active')
  }
  else btt.classList.remove('active')
})

btt.addEventListener('click', (e) => {
  e.preventDefault();
  // window.scrollTo(0,0)

  window.scrollTo({
    left:0,
    top:0,
    behavior:'smooth'

  })
});





/*
window.scrollTo(0,100) //가로축, 세로축

대상.
scrollTo(0,0) 스크롤을 생성;
scrollBy(0,20) 스크롤 생성

*/