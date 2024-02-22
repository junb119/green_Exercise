const slides = document.querySelectorAll('.slide')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const slideCount = slides.length;
let currentIdx = 0;

function showSlide(idx) {
  for (let slide of slides) {
    slide.classList.remove('active')
  }
  slides[idx].classList.add('active')

  currentIdx=idx  
}

showSlide(0)

prevBtn.addEventListener('click', ()=> {
  let prevIdx = (currentIdx -1 + slideCount ) % slideCount
  
  showSlide(prevIdx)
})
nextBtn.addEventListener('click', ()=> {
  let nextIdx = (currentIdx + 1) % slideCount
  
  showSlide(nextIdx)
})

function randomSlide() {
  timer = setInterval(()=> {
    let nextIdx = Math.floor(Math.random()*4)
    showSlide(nextIdx)
  }, 3000)
}

randomSlide()

