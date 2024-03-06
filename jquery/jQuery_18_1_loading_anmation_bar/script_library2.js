let progress = $('.progress'),
    progressbar = progress.find('.progressbar'),
    rate = progress.find('.rate'),
    rateNum = rate.attr('data-rate');


// progressbar.stop().animate({width : rateNum + '%'}, 2000 ,'easeOutQuint' , ()=>{
//   rate.css({color: '#fff'})
// })
progressbar.stop().animate({width : rateNum + '%'}, { duration : 1500, easing: 'easeOutQuint', 
complete : ()=>{rate.css({color: '#fff'})},
 progress : function () {

}})

var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
$(rate).animateNumber(
  {
    number: rateNum,
    numberStep: percent_number_step
  },
  {
    easing: 'easeOutQuint',
    duration: 1500
  }
);
