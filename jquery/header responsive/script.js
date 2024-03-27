let mobileToggle = $('.mobileToggle')
let mainmenu = $('header nav > ul > li')

mobileToggle.click(function (){
  $('header').toggleClass('open')
})


/*
mainmenu를 클릭하면 할일
  다른 모든 서브메뉴는 접는다
  클릭된 그 요소의 하위 ul을 펼친다.
  클릭한 그 요소를 다시 클릭하면 접는다.


  이 기능은 600px 이하에서만 작동한다.
*/

mainmenu.click(function () {
  // $(this).slideUp()
  // $('nav > ul > li').slideUp()
  if ($(window).outerWidth() <= 600) {
    $(this).find('ul').slideToggle()
    $(this).siblings('li').find('ul').slideUp()
  }

  
})