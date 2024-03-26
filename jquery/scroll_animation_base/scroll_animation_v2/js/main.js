let target = $('.animate__animated');

$(window).scroll(function () {
  let sct = $(this).scrollTop()
  let windowHeight = $(window).height()
  let target = $('.animate__animated')
  
  target.each(function () {
    let attr = $(this).attr('data-effect')
    let targetPos = $(this).offset().top
    
    if (sct >= targetPos - windowHeight / 2) {
      $(this).addClass(attr)
    }
  })
})
