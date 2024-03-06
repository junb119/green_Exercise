let progress = $('.progress'),
    progressbar = progress.find('.progressbar'),
    rate = progress.find('.rate'),
    rateNum = rate.attr('data-rate');


// progressbar.stop().animate({width : rateNum + '%'}, 2000 ,'easeOutQuint' , ()=>{
//   rate.css({color: '#fff'})
// })
progressbar.stop().animate({width : rateNum + '%'}, { duration : 1500, easing: 'easeOutQuint', complete : ()=>{
  rate.css({color: '#fff'})
}, progress : function () {

}})


$({num:0}).animate({num:rateNum},{
  duration: 1500,
  progress : function () {
    let now = Math.floor(this.num) + '%';
    rate.text(now)
  }

})
// let timer = setInterval(()=>{
//   rate.text(parseInt(rate.text())+1) 

//   if (Number(rate.text()) >= Number(rateNum)) {
//     clearInterval(timer)
//   }

// },10)