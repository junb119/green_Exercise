// let text = document.querySelector('h1').innerText
// let html = document.querySelector('h1').innerHTML

// console.log(typeof text)
// console.log(typeof html)
// document.querySelector('h2').innerHTML = html

//변수
let text = $('h1').text();
let html = $('h1').html();
console.log(text)
console.log(html)
// $('h2').text(html)
// $('h2').html(html)

let slideWrapper = $('.slidewrapper'),
    slides = slideWrapper.find('.slide'),
    slideCount = slides.length,
    currentIdx = 0,
    pager = slideWrapper.find('.pager'),
    timer,
    pagerHTML = '';

//페이저 생성
slides.each( function (idx, item)  {
  pagerHTML += `<a href="">${idx + 1}</a>`
  // $(item).css( {left : `${idx * 100}%`} )
  $(this).css( {left : `${idx * 100}%`} )
  }
)
pager.html(pagerHTML)


//페이저 클릭
let pagerBtn = pager.find('a')
pagerBtn.click(function(e) {
  e.preventDefault()
  moveSlide($(this).index())
})

// pagerBtn.each(function (idx) {
//   pagerBtn.eq(idx).click(function () {
//     moveSlide(idx)
//   })
// })
  

//슬라이드 이동 함수
function moveSlide(num) {
  let currentSlide = slides.eq(currentIdx)
  let nextSlide = slides.eq(num)

  currentSlide.css({left : '0'}).animate({left : '-100%'} )
  nextSlide.css({left : '100%'}).animate({left : '0'})

  currentIdx = num

  // 페이저 활성화
  // pagerBtn.removeClass('active')
  // pagerBtn.eq(num).addClass('active')

  pagerBtn.eq(currentIdx).addClass('active')
  pagerBtn.eq(currentIdx).siblings().removeClass('active')
  
}
pagerBtn.eq(0).addClass('active')


//자동슬라이드
//3초마다 다음슬라이드로 이동

function autoslide() {
  timer = setInterval(() => {
    let nextIdx = (currentIdx + 1) % slideCount
    moveSlide(nextIdx)
  }, 3000);

}
autoslide()

// slideWrapper.mouseenter(function () {
//   clearInterval(timer)
// }).mouseleave(function () {
//   autoslide()
// })

slideWrapper.hover(function () {
  clearInterval(timer)
}, function () {
  autoslide()
})