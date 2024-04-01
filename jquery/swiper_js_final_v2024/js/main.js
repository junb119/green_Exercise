// Initialize Swiper

const swiper1 = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  direction:"horizontal",

  pagination: {
    el: '.swiper-pagination',
    clickable:true
  }
});
const swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  direction:"horizontal",

  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  on: {
    init: function () {
      $('.total').text(this.slides.length);
    },
  },
});
$('.mySwiper2 .prev').click(function(){
  swiper2.slidePrev()
});
$('.mySwiper2 .next').click(function(){
  swiper2.slideNext()
});

swiper2.on('slideChange', function () {
  $('.current').text(swiper2.realIndex + 1);
});


var swiper3 = new Swiper(".rswiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});