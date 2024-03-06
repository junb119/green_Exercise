let progressWrapper = $('.progressWrapper')
let progressWrapperOST = progressWrapper.offset().top
let progress = progressWrapper.find('.progress')
let excuted = false    

$(window).scroll(function () {
  if($(window).scrollTop() > progressWrapperOST-400) {
    if (!excuted){
      progress.each( function () {
        animateInit($(this))
      })
      excuted = true
    }
  }
})
    
function animateInit(target) {
  let rate = target.find('.rate')
  let progressbar = target.find('.progressbar')
  let rateNum = rate.attr('data-rate')

  progressbar.stop().animate({ width : rateNum + '%'}, {
    duration: 1500,
    easing: 'easeOutQuint',
    complete : function () {
      rate.css({color: 'green'})
    }
  })
  
  $({num : 0}).stop().animate({num : rateNum}, {
    progress : function () {
      let now = Math.floor(this.num) + '%'      
      rate.text(now)
    }
  })
}
    
