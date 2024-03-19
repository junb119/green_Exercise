// Initialize Swiper

const swiper1 = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  direction:"horizontal",

  pagination :{
    el : '.swiper-pagination',
    clickable: true
  }
});
const swiper2 = new Swiper(".mySwiper2", {
  
  // navigation: {
  //   nextEl: ".mySwiper2 .next",
  //   prevEl: ".mySwiper2 .prev",
  // },
  direction:"horizontal",
  pagination :{
    el : '.swiper-pagination',
    clickable: true
  },
  on: {
    init: function () {
      $('.mySwiper2 .total').text(this.slides.length)
    },
  },
});

$('.mySwiper2 .next').click(function () {
  swiper2.slideNext()	
})
$('.mySwiper2 .prev').click(function () {
  swiper2.slidePrev()	
})

swiper2.on('slideChange', function () {
  $('.mySwiper2 .current').text(swiper2.realIndex+1) 
});


const swiper3 = new Swiper('.rswiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
})