/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.
*/

// 아이디 tabs-1를 보이도록
// document.getElementById('tabs-1').style.display = 'block';


// tab-content내 div 안보이도록
const tabMenu = document.querySelectorAll('.tab-menu a')
const tabContent = document.querySelectorAll('#tab-content > div')

// document.querySelector('#tabs-1').style.display = 'block';

/* tabMenu를 클릭하면 할일
  모든 tabContent를 보이지 않도록 한다.

속성의 값을 반환
대상.getAttribute('속성명)
  */


// a tag 속성명 
// for (let menu of tabMenu){
//   menu.addEventListener('click', function (e) {
//     e.preventDefault(); // 기본 기능 막기
//     let target = this.getAttribute('href');

//     //모든 tabContent를 보이지 않도록 한다.
//     for (tc of tabContent) {
//       tc.style.display = 'none';
//     }
//     document.querySelector(target).style.display = 'block';
//   })
// }

// tabContent[0].style.display='block'


/* 클래스명 추가 제거
대상.classList.add('클래스명')
대상.classList.remove('클래스명')
*/
/*
tabMenu를 클릭하면 모든 tabcontent가 보이지 않도록
*/


// for (let menu of tabMenu) {
//   menu.addEventListener('click',  (e) => {
//     e.preventDefault()
    
//     for (let m of tabMenu){
//       m.classList.remove('active')
//     }
//     e.target.classList.add('active')


//     let target = e.target.getAttribute('href')
//     for (tc of tabContent) {
//       tc.classList.remove('active')
//     }
//     document.querySelector(target).classList.add('active')
    
//   })
  
// }
const highlight = document.querySelector('.highlight')

tabMenu.forEach((item , index) => {
  item.addEventListener('click', (e)=> {
    e.preventDefault();
    let newLeft = item.offsetLeft;
    let newWidth = item.offsetWidth;
    console.log(newLeft, newWidth)
    highlight.style.left =`${newLeft}px`;
    highlight.style.width =`${newWidth}px`;
    for (let m of tabMenu){
      m.classList.remove('active');
    }
    e.target.classList.add('active');

    for (let tc of tabContent) {
      tc.classList.remove('active');
    }
    tabContent[index].classList.add('active'); 
  })
});



// let tabMenu = document.querySelectorAll('.tab-menu li')

// let tabContent = document.querySelectorAll('#tab-content div')

// for (let i=0; i<tabMenu.length; i++){
//   tabMenu[i].addEventListener('click', ()=> {

//   })
// }



/*
요소의 너비 offsetWidth
요소의 위치 offsetLeft
  가까운 부모중이 포지션 값이 기본값이 아닌 요소를 기준으로
*/