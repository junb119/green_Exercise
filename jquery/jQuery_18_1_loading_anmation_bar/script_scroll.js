let progress = $('.progress'),
    progressOST = progress.offset().top,
    progressbar = progress.find('.progressbar'),
    rate = progress.find('.rate'),
    rateNum = rate.attr('data-rate');
    $window = $(window)
    excuted = false

    $window.scroll(
      function () {
      if ($window.scrollTop() > progressOST - 400) {
        if (!excuted) {
          animateInit()
          excuted = true
        }
      }
    })

    function animateInit() {progressbar.stop().animate({width: 60 + '%'},
    {
      duration : 1500,
      easing: 'easeOutQuint',
      complete : function () {
        rate.css({color: 'white'})
      }
    })
    $({num:0}).animate({num:rateNum},{
      duration: 1500,
      progress : function () {
        let now = Math.floor(this.num) + '%';
        rate.text(now)
      }
    })}