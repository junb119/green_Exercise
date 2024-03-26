let target = $('.animation');

$(window).scroll(function() {
  let scrollAmt = ($(this).scrollTop())
  
  target.each(function()  {
    if (scrollAmt >= $(this).offset().top - ( $(window).height() / 2) ) {
      $(this).addClass('active')
    }
  })

    
    
})