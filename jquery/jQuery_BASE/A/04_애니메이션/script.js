// const box = document.querySelector('.box')

// box.animate([
//   {left: 0},
//   {left: '200px'}
// ], {
//   duration: 400,
//   easing : 'cubic-bezier(0.34, 1.56, 0.64, 1)',
//   fill :'forwards'
//  })

 const box = $('.box');
 /*jquery 애니메이트 
 대상.animate({속성:값, 속성:값}, 시간, 이징, 종료되면 할일);
 */

// box.animate({left:'200px'}, 500 ,'linear', function() {
//   box.animate({left:'0', width:'50px'},200)
// })

box.animate({left:'200px'},{
  duration:500,
  easing:'linear',
  complete : ()=> {
    box.animate({left:'0', width:'50px'},200)
  }
})

$('h2').animate({fontSize:'100px'},{duration:2000,easing:'linear'})