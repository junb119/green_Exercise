$('.tab-wrapper').tabs({
  show: { effect: "fade", duration: 800 },
  hide: { effect: "fade", duration: 300 }
});

// let tabmenu = $('.tab-menu a');  
// let tabcontent = $('#tab-content > div');
/*
tabmenu를 클릭하면 할일
  모든 tabmenu에서 active 제거,
  클릭한 그 요소에 active 추가

class
대상.addClass('클래스명')
대상.removeClass('클래스명')
대상.hasClass('클래스명')  true, false
*/

// 1. 아이디값으로 구현
/*
tabmenu.click(function(e){
  e.preventDefault();
  tabmenu.removeClass('active');
  $(this).addClass('active');

  let targetId = $(this).attr('href');

  tabcontent.hide();
  $(targetId).show();  //#tabs-2
});
tabcontent.eq(0).show(); //equivanlent
*/

// 2. index번호로 구현
/*
jQuery에서 index를 번호 확인하기
대상.index()

tabmenu를 클릭하면 할일
  변수명 targetIdx에 클릭한 그 요소의 index를 할당(저장);


대상.parent();  //바로 윗 부모
대상.find('.list');  //자식요소   header .list
대상.filter('.list');  //   header.list
대상.filter(':last-child');  //   header:last-child
대상.children('div');  //자식요소
대상.closest('div'); //가까운 부모중에
대상.siblings() //
대상.siblings('div') //
대상.siblings('.active') //
대상.prev() // 바로 전 요소
대상.next() // 바로 다음 요소
*/
/*
tabmenu.click(function(e){
  e.preventDefault();
  tabmenu.removeClass('active');
  $(this).addClass('active');

  let targetIdx = $(this).parent().index();
  tabcontent.hide();
  tabcontent.eq(targetIdx).show();
});
tabcontent.eq(0).show();
*/