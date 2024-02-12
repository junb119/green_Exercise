/*
h1을 변수명 title할당
색상 blue
폰트사이즈 30px
*/

// const title = document.querySelector('h1');
// title.style.color = 'blue';
// title.style.fontSize = '30px';


/*
대상.addEventListener('이벤트종류', 할일);
이벤트 종류
  DOMContendLoaded // 브라우저가 html 구조를 모두 읽은 후
  mouseover, mouseout // 이벤트 연속 발생 가능성 O
  mouseenter, mouseleave // 이벤트 한번만 발생 
  click ,
  keypress 키를 누르는 동안 연속 발생
  keydown, 키를 누르면 한번 발생
  scroll
  change (input, checkbox, textarea) 폼양식의 값이 변경되었을 때
  input(input) 태그의 값이 변경되었을 때
  resize 브라우저의 너비가 변경 되었을 때

할일 함수 function() { 실제 할일 }
*/


// document.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('h1')
  title.addEventListener('click', function () {
    
    title.style.color= 'blue';
    title.style.fontSize = '30px';
  
  })
// })


/*
p 요소에 마우스 올리면 배경색 silver
p 요소에서 마우스 나가면 배경색 흰색
*/

const para = document.querySelectorAll('.container p');
// for (let i=0; i<para.length; i++ ) {
//   para[i].addEventListener('mouseover', function () {
//     para[i].style.backgroundColor = 'silver';
//   });
//   para[i].addEventListener('mouseout', function () {
//     para[i].style.backgroundColor = 'white';
//   });
// };


// para.forEach(function (item) {
//   item.addEventListener('mouseover', function () {
//     item.style.backgroundColor = 'silver';
//   })
//   item.addEventListener('mouseout', function () {
//     item.style.backgroundColor = 'white';
//   })
// }) 

// for (let p of para) {
//   p.addEventListener('mouseover', function () {
//     this.style.backgroundColor = 'silver';
//   })
//   p.addEventListener('mouseout', function () {
//     this.style.backgroundColor = 'white';
//   })
// }


const btn = document.querySelector('#submit') 

btn.addEventListener('click', function () {
  para[0].style.background ='silver'
})



// document.getElementsByTagName('body')[0].style.background ='silver'
// document.body.style.background ='silver'

const myColor = document.querySelector('#color')
myColor.addEventListener('change', function (e) {
  console.log(e)
  const selectedColor = e.target.value;
  document.body.style.background = selectedColor;
})
