// $(document).ready(function(){

// });

$(function(){
/*
클래스명 list의 배경색을 #ccc
$(css선택자).css({속성:값, 속성:값});

p:nth-of-type(2)
*/
console.log($('h1'));//jQuery 집합객체
console.log($('.list'));//jQuery 집합객체

$('.list').css({backgroundColor:'#ccc'});

$('#box div div').css({backgroundColor:'#ccc'});
$('p:nth-of-type(2)').css({backgroundColor:'#ccc'});


});