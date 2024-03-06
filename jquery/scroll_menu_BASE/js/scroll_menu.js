$(function(){
  //변수지정
  let menu = $('#top_menu li')
  let content = $('#contents > section')
  
  //메뉴 클릭 이동
  menu.click(function (e) {
    e.preventDefault()
    // menu.removeClass('on')
    // $(this).addClass('on')

    //스크롤 이동 반영하기  
    
    let targetSectionOst = content.eq($(this).index()).offset().top
    console.log(targetSectionOst)
    $('html,body').stop().animate({scrollTop:targetSectionOst} , 1000 ,'easeOutQuint',
    )
  })
  
  $(window).scroll(() => {
    let sct = $(window).scrollTop()
    
    content.each(function (idx, item) {
      if ($(this).offset().top <= sct) {
        menu.removeClass('on')
        menu.eq(idx).addClass('on')
      } 
    })

    
  })
});