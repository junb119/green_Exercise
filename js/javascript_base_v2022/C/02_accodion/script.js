/*
변수명 panelQuestion에 클래스명 .panel-question 할당
panelQuestion을 클릭하면 할일
  모든 panelQeustion에서 active 제거
  클릭된 그 panelQuestion에 active 추가
*/

const panelQuestion = document.querySelectorAll('.panel-question');
const panelBody = document.querySelectorAll('.panel-body');
const panelBodyHeight = [];
const panelCloseBtn = document.querySelector('#btn-collapse');

function closeAll() {
  for (let pb of panelBody) {
    pb.style.height = 0
    pb.style.padding = 0
  }
}
panelCloseBtn.addEventListener('click', ()=> {
  closeAll()
})

for (let pb of panelBody) {
  panelBodyHeight.push(pb.offsetHeight)
  pb.style.height = 0;
}

panelQuestion.forEach ( (pq, idx) => {
  pq.addEventListener('click', ()=> {
    closeAll()
    panelBody[idx].style.height = `${panelBodyHeight[idx]}px`
    panelBody[idx].style.padding = '15px'
    // pq.classList.add('active')  
    
  })

}) 

console.log(panelQuestion[2].offsetHeight)