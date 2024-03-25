let img = $('.gallery img'),
    lightbox = $('#lightbox-overlay'),
    lightboxImg = $('#lightbox-image');

img.click(function(e){
  e.preventDefault();
  let targetImgUrl = $(this).attr('data-lightbox');
  
  lightboxImg.attr('src',targetImgUrl);
  lightbox.addClass('visible');
});
lightbox.click(function(){
  lightbox.removeClass('visible');
});

/*
img을 클릭하면 할일
  변수명 targetImgUrl에 클릭한 그 요소의 속성중 data-lightbox의 값을 할당
  
  lightboxImg src의 값을 targetImgUrl로 변경
  lightbox를 보이도록
*/


