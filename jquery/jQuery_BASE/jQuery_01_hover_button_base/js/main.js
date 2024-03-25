$(function(){

  let buttons = $('#buttons1 button');

  buttons.filter(':nth-child(-n+4)').mouseover(function(){
    $(this).stop().animate({backgroundColor:'#ae5e9b', color:'#fff'}, 300);
  })
  .mouseout(function(){
    $(this).stop().animate({backgroundColor:'#fff', color:'#ebc000'}, 300);
  });

  buttons.filter(':nth-child(n + 5):nth-child(-n + 8)').mouseover(function(){
    $(this).stop().animate({borderWidth:'12px', color:'#ae5e9b'}, 300, 'easeOutSine');
  })
  .mouseout(function(){
    $(this).stop().animate({borderWidth:'0px', color:'#ebc000'}, 300, 'easeOutSine');
  });

  buttons.filter(':nth-child(n + 9)').mouseover(function(){
    $(this).find('.bg').stop().animate({width:'100%'}, 300,'easeOutQuad');
  })
  .mouseout(function(){
    $(this).find('.bg').stop().animate({width:'0'}, 300, 'easeOutQuad');
  });

  /* 
    9~12번째 버튼에 마우스를 올리면, 0.3s, easeOutSine
    a.find('.b')   a .b button .bg
    a.filter('.b')   a.b   
      
    */



});