// 변수지정
const menu = document.querySelectorAll('#top_menu li');
const section = document.querySelectorAll('#contents > section') ;

// 메뉴 클릭 이동
/*
menu 클릭하면 할 일
변수명 targetId에 클릭한 그 요소의 속성명 href의 값 할당
변수명 targetSection에 변수명 targetId를 활용하면 타겟섹션을 할당
변수명 targetOST에 targetSection이 상단에서 떨어진 거리를 할당
콘솔에 targetOST값 확인
*/


/* 스크롤 이동 반영하기
윈도우에 스크롤이 생기면
  section들ㄷ마다 할일
*/
window.addEventListener('scroll', () => {
  let targetIdx
  section.forEach((item, idx) => {
    if (scrollY >= item.offsetTop) {
      targetIdx = idx;
    }
    
  })
  console.log(targetIdx)
  for (let mm of menu) {
    mm.classList.remove('active')
  }
  menu[targetIdx].classList.add('active')
})



for (let m of menu) {
  m.addEventListener('click', (e) => {
    e.preventDefault()
    let targetId = m.querySelector('a').getAttribute('href');
    let targetSection = document.querySelector(targetId);
    let targetOST = targetSection.offsetTop;
    
    scrollTo({
      left:0,
      top:targetOST,
      behavior:'smooth'

    })
    
    // 클릭한 메뉴가 검은색으로 나타나도록
    

    // for(let sibling of m.parentElement.parentElement.children) {
    //   console.log(sibling, m.parentElement)
    //   if (sibling !== m.parentElement) {
    //     sibling.classList.remove('active')
    //   } else {

    //   }
    // }
    

    
  })
}



// 스크롤 이동 반영하기  
  

