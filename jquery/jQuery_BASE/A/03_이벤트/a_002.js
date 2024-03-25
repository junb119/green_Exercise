$(function(){

  /*
    이벤트 적용하기
    대상.on('이벤트 종류', 할일);
    
    이벤트 종류
    mouseover, mouseout, click, scorll, resize, change, input, submit

    할일 = 함수 function(){ 실제할일.. }
  */
 /*
    $('h1').on('mouseover', function(){ 
      $('h1').css({backgroundColor:'#ccc'});
    });
    $('h1').on('mouseout', function(){ 
      $('h1').css({backgroundColor:''});
    });

$('h1').on('mouseover', function(){ 
  $('h1').css({backgroundColor:'#ccc'});
})
.on('mouseout', function(){ 
  $('h1').css({backgroundColor:''});
});


$('h1').on('mouseover', function(){ 
  $(this).css({backgroundColor:'#ccc'});
})
.on('mouseout', function(){ 
  $(this).css({backgroundColor:''});
});

$('h1').mouseover(function(){ 
  $(this).css({backgroundColor:'#ccc'});
})
.mouseout(function(){ 
  $(this).css({backgroundColor:''});
});
*/

$('h1').mouseover((e)=>{ 
  console.log(e);
  // e.target.style.color = 'blue';
  $(e.target).css({backgroundColor:'#ccc'});
})
.mouseout(()=>{ 
  //$(this).css({backgroundColor:''});
});

/*
h2, h3 {color:#ccc}

$('h2, h3').mouseover(function(){
  $(this).css({color:'blue'});
})
.mouseout(function(){
  $(this).css({color:'black'});
});
*/
/*
대상.hover(
  function(){},
  function(){}
)

$('h2, h3').hover(
  function(){
    $(this).css({color:'blue'});
  },
  function(){
    $(this).css({color:'black'});
  }
);
*/

$('h2, h3').hover(
  (e)=>{
    $(e.target).css({color:'blue'});
  },
  (e)=>{
    $(e.target).css({color:'black'});
  }
);
/*
버튼을 클릭하면 버튼의 배경색을 blue, 글자색을 white로 변경
*/
//$('button').on('click',function(){})
// $('button').click(function(){
//   $(this).css({backgroundColor:'blue', color:'white'});
// });
$('button').click((e)=>{
  $(e.target).css({backgroundColor:'blue', color:'white'});
});

/*
아이디 favorite_color의 값이 변경되면 그 값을 변수명 targetValue에 할당하고 그 색상으로 body의 배경색을 변경한다.
javascript로

document.querySelector('#favorite_color').addEventListener('change', (e)=>{
  let targetValue = e.target.value;
  document.body.style.backgroundColor = targetValue;
});
*/
$('#favorite_color').on('change',(e)=>{
  // let targetValue = e.target.value;
  let targetValue = $(e.target).val();
  console.log($(e.target));

  $('body').css({backgroundColor:targetValue});
});
/*
대상.focus();
border-color:blue;
outline:2px solid blue;
outline-color
*/
// $('input[type="text"]').focus();
$('input[type="text"]').focus(function(){
  $(this).css({outlineColor:'blue'});
});
$('input[type="text"]').blur(function(){
  $(this).css({borderColor:'silver'});
});
/*
window.addEventListener('scroll',function(){
  console.log(this.scrollY);
});
*/
$(window).scroll(function(e){
  // console.log(e.currentTarget.scrollY);
  console.log($(this).scrollTop());
});



});//document ready 할일