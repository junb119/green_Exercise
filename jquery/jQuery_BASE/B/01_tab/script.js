$('.tab-wrapper').tabs({
  show: { effect: "fade", duration: 800 },
  hide: { effect: "fade", duration: 800 }
}
)

// let tabmenu = $('.tab-menu a')
// let tabcontent = $('#tab-content >  div')

// tabmenu.click(function (e) {
//   e.preventDefault()
//   tabmenu.removeClass('active')
//   $(this).addClass('active')
/*
대상.addClass('클래스명')  
대상.removeClass('클래스명')  
대상.hasClass('클래스명')   true, false


/*
/*아이디 값으로 구현
// $('#tabs-1').css({display:'block'})

// 대상 속성 가져오기, 변경하기
// 대상.attr('속성명'), 대상.attr('속성명', '새 값'
let targetId = $(this).attr('href')
tabcontent.hide()
// $(targetId).css({display:'block'})
$(targetId).show()
})

tabcontent.eq(0).show() // equivanlent
*/

// 2. index 번호로 구현
// jquery에서 index를 번호 확인하기
// 대상.index()

// 대상.parent() 윗 부모
// 대상.children('div') , 대상.find('> div') : 대상 자식 요소
// 대상.filter('.list') = header.list  : 자신 중에
// 대상.closest('div') 가까운 부모
// 대상.siblings() : 형제 모두
// 대상.siblings('div') : 형제 중 'div'
// 대상.prev() : 대상 전 요소
// 대상.next() : 대상 다음 요소

// tabmenu.click( function (e) {
//   e.preventDefault()
//   tabmenu.removeClass('active')
//   $(this).addClass('active')
  
//   let targetIdx = $(this).parent().index()
//   tabcontent.hide();
//   tabcontent.eq(targetIdx).show()
// })
// tabcontent.eq(0).show()