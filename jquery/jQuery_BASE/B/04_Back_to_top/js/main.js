$(function(){

  let btt = $('#go-top');
  
  $(window).scroll(function(){
    console.log($(window).scrollTop());
    if($(window).scrollTop() > 300){
      btt.addClass('active');
    }else{
      btt.removeClass('active');
    }
  });
  btt.click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0}, 1500, 'easeOutBounce');
  });

});