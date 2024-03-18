const qnaList = document.querySelectorAll('.qna_list li');

for(let ql of qnaList){
  ql.addEventListener('click',(e)=>{
    for(let li of qnaList){
      li.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
  });
}