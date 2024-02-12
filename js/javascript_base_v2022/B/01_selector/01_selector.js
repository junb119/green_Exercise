/*
스타일변경
대상.style.css속성명 = 값

아이디명
document.getElementById('아이디명')

태그명
  document.getElementsByTagName, 유사배열

클래스명
  document.getElementsByClassName(클래스명), 유사배열

css선택자
  documnet.querySelector(css 선택자);
  documnet.querySelectorAll(css 선택자);
*/


document.getElementById('title').style.color='blue';

document.getElementById('list1').style.backgroundColor='silver';


// 아이디 list2 밑줄
document.getElementById('list2').style.textDecoration='underline';


let titles = document.getElementsByTagName('h2');
// for (let i=0; i<titles.length; i++) {
//   titles[i].style.color ='green';
// };
console.log(titles)

// forEach
let titleArr = [...titles]
titleArr.forEach( function (target) {
  target.style.color='green'
})

// for of
/*
  for(변수명 of 대상) {

  }
*/

for (let title of titles) {
  title.style.color='red'
}

let list = document.getElementsByClassName('list')

// for (let i=0; i<list.length; i++) {
//     list[i].style.listStyle='none'
 
// }

for (listValue of list) {
  listValue.style.listStyle='none'
}

document.querySelector('.list .red').style.color = 'red'

document.querySelector('#box div div').style.backgroundColor='silver'



let para = document.querySelectorAll('article p')

// for (let i=0; i<pColor.length; i++) {
//   para[i].style.color='blue'
// }

// for (let p of para) {
//   p.style.color='blue'
// }
// for (let i in para) {
//   para[i].style.color='blue'
// }

let i=0
while (i < para.length) {
  para[i].style.color='blue'
  i++;
}