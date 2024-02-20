const perPage = 10;
const rows = document.querySelectorAll('#my-table tbody tr');
const rowCount = rows.length;
const pageCount = Math.ceil(rowCount / perPage);
const numbers =  document.querySelector('#numbers');
const prevBtn = document.querySelector('.pagination .fa-arrow-left')
const nextBtn = document.querySelector('.pagination .fa-arrow-right')
console.log(prevBtn)
const maxPageNum = 3;
let pageGroupIdx = 0; // 현재 페이지 그룹 번호



// 페이지네이션 생성하기
for (let i=0; i<pageCount; i++) {
  numbers.innerHTML += `<li><a href="">${i+1}</a></li>`
}
let pagenationList = numbers.querySelectorAll('li')
let numberBtn = numbers.querySelectorAll('a');
let pageGroupCount = Math.ceil(pagenationList.length / maxPageNum);

numberBtn.forEach((item, idx)=> {
  item.addEventListener('click', (e)=> {
    e.preventDefault()
    console.log('test')
    displayRow(idx)

  })
}) 
  

function displayRow(idx) {
  const rowsArr= [...rows]
  for (let row of rows) {
    row.style.display = 'none';
  }
  let start= idx * perPage;
  let end= start + perPage;
  let newRows = rowsArr.slice(start, end);
  for (let nw of newRows) {
    nw.style.display = '';
  }

  for (let nb of numberBtn) {
    nb.classList.remove('active')
  }
  numberBtn[idx].classList.add('active')

}
displayRow(0)

function displayPage(idx) {
  const pageArr= [...pagenationList]
  // 모든 li display none
  for (let pl of pagenationList) {
    pl.style.display = 'none';
  }
  let start= idx * maxPageNum;
  let end= start + maxPageNum;
  let newRows = pageArr.slice(start, end);
  for (let nw of newRows) {
    nw.style.display = '';
  }

  for (let nb of numberBtn) {
    nb.classList.remove('active')
  }
  numberBtn[idx*maxPageNum].classList.add('active')
  displayRow(idx*maxPageNum);

  if (pageGroupIdx===0) {
    prevBtn.style.display ='none'
  } else {
    prevBtn.style.display ='block'
  } 
  if (pageGroupIdx===pageGroupCount - 1) {
    nextBtn.style.display ='none'
  } else {
    nextBtn.style.display ='block'
  } 


}
displayPage(0)

nextBtn.addEventListener('click', ()=> {
  displayPage(++pageGroupIdx)
})

prevBtn.addEventListener('click', ()=> {
  displayPage(--pageGroupIdx)
})