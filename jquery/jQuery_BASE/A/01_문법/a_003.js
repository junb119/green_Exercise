//h1의 배경색 #ccc

/*
$(선택자).css('속성명', '값');  //하나의 속성만 변경가능
$(선택자).css({속성명:값, 속성:값}); //여러개의 속성을 변경가능

h1{
  background-color:#ccc;
  font-size:3em;
  opacity:0.5;
  transform:rotate(45deg);
  transform-origin: 0 0;
}

*/


// $('h1').css('background-color','#ccc');

$('h1').css({backgroundColor:'#ccc', fontSize:'3em'});

/*
투명도 50%, 45도 회전
*/
const contentTT = $('h2');

// contentTT.css({
//   opacity:0.5,
//   transform:'rotate(45deg)',
//   transformOrigin:'0 0'
// });

//메서드체인
contentTT.css({opacity:0.5}).css({transform:'rotate(45deg)'}).css({transformOrigin:'0 0'});