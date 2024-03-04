$(function () {
  let buttons = $('#buttons2 button');
  let duration =  300;

  // jquery foreach
  // 대상.each(function(idx, element))
  buttons.each(function(idx) {
    let newTop = (-40 + 40 * idx) + 'px'
    $(this).css({top : newTop})
  })
  .mouseover(function () {
    $(this).stop().animate({backgroundColor : 'yellow', color:'#000'}, duration)
    $(this).find('img:first-child').stop().animate({opacity : 0}, duration)
    $(this).find('img:nth-child(2)').stop().animate({opacity : 1}, duration)
  })
  .mouseout(function () {
    $(this).stop().animate({backgroundColor : '#fff',color:'#01b169'}, duration)
    $(this).find('img:first-child').stop().animate({opacity : 1}, duration)
    $(this).find('img:nth-child(2)').stop().animate({opacity : 0}, duration)
  })
})

