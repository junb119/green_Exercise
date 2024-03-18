let effect_3d = $('.effect_3d');

effect_3d.each(function(){
  let text = $(this).text();
  let html = `
      <span class="parent">
      <span>
        ${text}
        <span class="abs">${text}</span>
      </span>
    </span>
  `;
  $(this).html(html);
});
/*
effect_3d들 마다 할일
   변수명 text에 그요소의 내용을 텍스트로 할당
   변수명 html에 그요소에 넣어줄 태그를 생성
   그 요소의 내용을 변수명 html로 교체
*/