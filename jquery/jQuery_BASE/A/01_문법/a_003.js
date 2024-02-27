
/*
$(선택자).css('속성명', '값'); //한번에 하나 속성
$(선택자).css({속성명: 값, 속성명, 값}); // 한번에 여러개 속성
*/

// $('h1').css('background-color', '#ccc')
$('h1').css({background:'#ccc', fontSize:'3em'})

/*
투명도 50% , 45도 회전
*/
const contentTT = $('h2')


contentTT.css({opacity : .5 , transform : 'rotate(45deg)', transformOrigin : '0 0' })
