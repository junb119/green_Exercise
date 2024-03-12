$(function(){
  let notepad = $('.notepads')
  let line = $('.lines')
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300 ) {
      notepad.addClass('active')
      line.addClass('active')
    } else {
      notepad.removeClass('active')
      line.removeClass('active')
    }
  })
	
});


