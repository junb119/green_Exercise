$(function(){
    /*
      이벤트 적용하기
      대상.on('이벤트 종류', 할일);
    */

    // $('h1').on('mouseenter' , function (){
    //   $('h1').css({background:'#ccc'})
    // })
    // $('h1').on('mouseleave' , function (){
    //   $('h1').css({background:''})
    // })


    // $('h1').on('mouseenter' , function (){
    //   $('h1').css({background:'#ccc'})
    // }).on('mouseleave' , function (){
    //   $('h1').css({background:''})
    // })

    // $('h1').on('mouseenter' , function (){
    //   this.css({background:'#ccc'})
    // }).on('mouseleave' , function (){
    //   this.css({background:''})
    // })
    
    // $('h1').mouseover(function (){
    //   $(this).css({background:'#ccc'})
    // }).mouseout(function (){
    //   $(this).css({background:''})
    // })

    $('h1').mouseover( (e)=>{
      console.log(typeof e.target)
      $(e.target).css({background:'#ccc'})
    }).mouseout((e) => {
      $(e.target).css({background:''})
    })
    
    // $('h2, h3').mouseover(function() {
    //   $(this).css({color:'blue'})
    // })
    // .mouseout(function() {
    //   $(this).css({color:'black'})
    // });

    /*
    대상.hover(할일, 할일)
    */
    // $('h2, h3').hover(function() {
    //   $(this).css({color:'blue'})
    // } ,function() {
    //   $(this).css({color:'black'})
    // } )

    $('h2, h3').hover((e) => {
      $(e.target).css({color:'blue'})
    } ,(e) => {
      $(e.target).css({color:'black'})
    } )
    
    // function
    $('button').click(function () {
      $(this).css({background: 'blue' ,color: 'white'})
    })
    // ()=>{}
    $('button').click((e) => {
      $(e.target).css({background: 'blue' ,color: 'white'})
    })


    // $('#favorite_color').change((e)=> {
    //   let targetValue = $(e.target.value);
    //   console.log(targetValue)
    // })

    // let fc = document.querySelector('#favorite_color')
    // fc.addEventListener('change', (e)=> {
    //   let targetValue = e.target.value
    //   document.body.style.background = targetValue
    // })

    $('#favorite_color').change((e)=> {
      // let targetValue  = e.target.value
      console.log(e.target)
      console.log($(e.target))
      let targetValue  = $(e.target).val()
      $('body').css({background: targetValue})
    })


    $('input[type="text"]').focus(function() {
      $(this).css({outlineColor:'blue'})
    })
    $('input[type="text"]').blur(function() {
      $(this).css({borderColor:'silver'})
    })


//     window.addEventListener('scroll', function ()  {
//       console.log(this.screenY)
// })

    $(window).scroll(function () {
      console.log($(this).scrollTop())
    })
});//document ready 할일

