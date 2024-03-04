$(function () {
  let duration = 300;
  let images= $('#images p')

  images.filter(':first-child')
    .mouseover(function() {
      $(this).find('strong, span').stop().animate({opacity:1},duration )
      
    })
    .mouseout(function () {
      $(this).find('strong,span').stop().animate({opacity:0},duration)

    })

  images.filter(':nth-child(2)')
    .mouseover(function() {
      $(this).find('strong').stop().animate({opacity:1 , left:0},duration )
      $(this).find('span').stop().animate({opacity:1},duration )
      
    })
    .mouseout(function () {
      $(this).find('strong').stop().animate({opacity:0 , left:'-200%'},duration )
      $(this).find('span').stop().animate({opacity:0},duration )
    })

  images.filter(':nth-child(3)')
    .mouseover(function() {
      $(this).find('strong').stop().animate({opacity:1 , bottom:0},duration )
      $(this).find('span').stop().animate({opacity:1},duration )
      $(this).find('img').stop().animate({opacity:1, top: '-20px'},duration * 1.5 )
    })
    .mouseout(function () {
      $(this).find('strong').stop().animate({bottom:'-80px'},duration )
      $(this).find('span').stop().animate({opacity:0},duration )
      $(this).find('img').stop().animate({top: 0},duration )

    })


}

)