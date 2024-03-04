$(function (){

let buttons = $('#buttons1 button');

buttons.filter(':nth-child(-n+4)').mouseover(function () {$(this).stop().animate({backgroundColor: '#ae5e9b', color: '#fff'},300)}).mouseout(function () {
  $(this).stop().animate({backgroundColor: '#fff', color: '##ebc000'},300)
})
buttons.filter(':nth-child(n+5):nth-child(-n+8)')
  .mouseover(function () {
    $(this).stop().animate({borderWidth: '12px', color: '#ae5e9b'},300 , 'easeOutSine')
  })
  .mouseout(function () {
    $(this).stop().animate({borderWidth: '0px', color: '##ebc000'},300,'easeOutSine')
})
      

  buttons.filter(':nth-last-of-type(-n+4)')
    .mouseover(function () {
      $(this).find('.bg').stop().animate({
        width: '100%'},300,'easeOutQuad')})
    .mouseout(function () {
    $(this).find('.bg').stop().animate({
      width: '0'},300,'easeOutQuad')
  })

  // $('.inner button:nth-last-of-type(-n+4)').hover(function () {
  //   $(this).css({background: '#ae5e9b', color: '#fff', transition : '.3s'})}, function () {
  //     $(this).css({background: '#fff', color: '#ebc000'})} )

})

