$('.qna_list').accordion();

/*
const question = $('.question');
const answer = $('.answer');

question.click(function(){
  //question.removeClass('active');
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  // answer.slideUp();
  // $(this).next().slideDown();
  $(this).next().slideToggle();
  $(this).next().siblings('.answer').slideUp();
});
*/



/*
대상.slideDown()
대상.slideUp()
대상.slideToggle()


question클릭하면 할일
  // 모든 question에서 active 제거
  클릭한 그 요소에 active 추가
  클릭한 그 요소의 형제자매에서 active 제거

  모든 answer는 접고, 클릭한 그 요소의 다음요소를 펼친다
*/