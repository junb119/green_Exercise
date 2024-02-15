const perPage = 10;
const rows = document.querySelectorAll('#my-table tbody tr');
const rowCount = rows.length;
const pageCount = Math.ceil(rowCount / perPage);
const numbers =  document.querySelector('#numbers');


// 페이지네이션 생성하기
for (let i=0; i<pageCount; i++) {
  numbers.innerHTML += `<li><a href="">${i+1}</a></li>`
}

