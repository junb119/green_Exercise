$(function () {
  let aside = $('.page-main > aside')
  let asideButton = aside.find('button')

  asideButton.click(function () {
    aside.toggleClass('open')
    if (aside.hasClass('open')) {
      aside.stop().animate({left :'-70px'},300, 'easeOutBack')
      asideButton.find('img').attr('src','img/btn_close.png')
    }
    else {
      aside.stop().animate({left :'-350px'},300, 'easeInBack')
      asideButton.find('img').attr('src','img/btn_open.png')
    }

    
  })


})
