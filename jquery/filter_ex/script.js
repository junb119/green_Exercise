const itemUl = document.querySelector('.product_list'); 
const items = document.querySelectorAll('.product_list li');
const btns = document.querySelectorAll('.btns button');
const filetrSelect = document.querySelector('#filter')
const sortBtns = document.querySelectorAll('.sorting button')

for (let sb of sortBtns) {
  sb.addEventListener('click', function (e) {
    let itemArr =[...items];
    let targetList = itemArr.filter(item=>{
      if (!item.getAttribute('style') || item.style.display === 'block'){
        return item
      }
    })
    // console.log(typeof targetList)
    let direction = e.target.getAttribute('data-sort')
    mySorting(targetList, direction)
  })
}

function mySorting(arr, direction) {
  
  if (direction = 'asc') {
    arr.sort(function (a,b) {
      return a.getAttribute('data-order') - b.getAttribute('data-order')
    })
  } else if (direction ==='desc') {
    arr.sort(function (a,b) {
      return b.getAttribute('data-order') - a.getAttribute('data-order')
    })
    
    // itemUl.innerHTML = arr
  }
  itemUl.innerHTML = '';
    for (let i=0; i<arr.length; i++) {
      itemUl.appendChild(arr[i])
    }
}


for (let btn of btns) {
  btn.addEventListener('click', function () {
    let targetClass = this.getAttribute('data-filter')
    myfilter(targetClass)
  
    
  })
}

filetrSelect.addEventListener('change', function () {
  let targetClass = this.value
  myfilter(targetClass)

})

function myfilter(tc)    {
  if (tc === '*') {
    for (let item of items) {
      item.style.display = 'block' 
    }
    return
  }

  for (let item of items) {
    item.style.display = 'none'
    // if (item.classList.contains('web')) item.style.display =''
  }
  let target= document.querySelectorAll(tc)
  for(let item of target) {
    item.style.display= 'block'
  } 
}