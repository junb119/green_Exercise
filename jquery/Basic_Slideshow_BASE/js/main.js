$(function () {
  let slides = $('.slideshow img')
  let slideCount = slides.length;
  let currentIdx = 0;

  slides.eq(0).fadeIn()

  setInterval(() => {
    let nextIdx = (currentIdx + 1 ) % slideCount
    slides.eq(currentIdx).fadeOut()
    slides.eq(nextIdx).fadeIn()
    currentIdx = nextIdx
  }, 4000);
  
 

});
