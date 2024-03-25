$(function(){
let myBtn = $('#buttons1 .inner button');
let duration = 300;

//#buttons1 .inner button:nth-child(-n+4)

myBtn.filter(':nth-child(-n+4)').hover(
    function(){
        $(this).stop().animate({backgroundColor:'#ae5e9b', color:'#fff'}, duration);
    },
    function(){
        $(this).stop().animate({backgroundColor:'#fff', color:'#ebc000'}, duration);
    }
);
/* 5 ~ 8번째 button 올리면 보더두께 12px 글자색 #ae5e9b 0.3, 나가면 원래대로*/
/*

*/
myBtn.filter(':nth-child(n+5):nth-child(-n+8)').hover(
    function(){
        $(this).stop().animate({borderWidth:'12px', color:'#ae5e9b'}, duration);
    },
    function(){
        $(this).stop().animate({borderWidth:'0', color:'#ebc000'}, duration);
    }
);

/* 9~ 12  */
/*
ul .list   자식중에  A.find('.list')  a의 자식 요소중 .list를 선택
ul.list    자신중에  A.filter(b) a중에 클래스명.list가 있는 a

css 공백 있다면 find
css 공백 없다면 filter

li a     A.find('a')
li > a   A.find('> a)
li:first-child  li.filter(':first-child')

A.find('.list') == A.children('.list')

A.children('.list')
A.siblings('.list')  형제 자매들 .list만 선택
A.parent() 바로 위 부모
A.closest('div')  A요소의 가까운 부모중에 div 선택
*/
myBtn.filter(':nth-child(n+9)').hover(
    function(){
        //this.querySelector('.bg')....
        $(this).find('.bg').stop().animate({width:'100%'},duration);
    },
    function(){
        $(this).find('.bg').stop().animate({width:'0%'},duration);
    }
);


});//document ready