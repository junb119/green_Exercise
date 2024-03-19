$(function(){

  $('.slider').slick();

  $('.control').slick();

  $('.control2').slick({
    prevArrow:'.control-slide2 .prev',
    nextArrow:'.control-slide2 .next',
  });

  let control3 = $('.control3').slick({
    arrows:false
  });

  $('.control-slide3 .prev').click(function(){
    control3.slick('slickPrev');
  });
  $('.control-slide3 .next').click(function(){
    control3.slick('slickNext');
  });

  $('.multiple-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $('.active-slider').slick({
  })

  $('.option-slider').slick({})
  $('.option span').click(function () {
    $('.option-slider').slick('slickGoTo', $(this).index())
  })
  
  $('.auto-slider').slick({
    autoplay: true,
  })
  
  $('.video-slider').slick({

  })
  
  $('.video-slider').slick('slickGoTo', 0)
  
  $('.video-slider').on('afterChange', function(slick , currentSlide) {
    $('.video-slider .slick-slide video').get(0).pause()
    $('.video-slider .slick-active video').get(0).play()

    // .slick-active .slick-slide

  })

  $('.tab-slider').slick({})
  $( "#tabs" ).tabs();

  $('.multiple-slider2').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
          
  variable-slider.slick({
    
  })
});
