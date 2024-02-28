$(function (){

  let btt = $('#go-top')

  $(window).scroll(function() {
    console.log($(this).scrollTop())
    if ($(this).scrollTop() > 300) {
      console.log(btt)
      btt.addClass('active')
    } else {
      btt.removeClass('active')
    }       
  })
  btt.click(function(e) {
    e.preventDefault()
    $('html,body').animate({scrollTop:0} , 1500 ,'easeOutBounce',
    // jquery easing
    )
  })
  
})
