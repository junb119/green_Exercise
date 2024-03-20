const itemUl = $('.product_list');
const items = $('.product_list li');
const btns =  $('.btns button');
const filterSelect = $('#filter');
const sortBtns = $('.sorting button');

for(let sb of sortBtns){
  sb.addEventListener('click',(e)=>{
    let itemsArr = [...items];
    let targetList = itemsArr.filter(item=> {
      if(!item.getAttribute('style') || item.style.display === 'block'){
        return item;
      }
    });
    let direction = e.target.getAttribute('data-sort');
    mySorting(targetList,direction);
  });
}
function mySorting(arr, direction){
  
  if(direction === 'order:asc'){
    arr.sort(function(a,b){
      return a.getAttribute('data-order') - b.getAttribute('data-order');
    });
  } else if(direction === 'order:descending'){
    arr.sort(function(a,b){
      return b.getAttribute('data-order') - a.getAttribute('data-order');
    });
    
  }
  itemUl.innerHTML = '';
    for(let i = 0; i<arr.length; i++){
      itemUl.appendChild(arr[i]);
     }
}
/*
대상.sort(function(a,b){
  return a-b;
})
대상.sort(function(a,b){
  return b-a;
})
const ages = [32, 33, 16, 40];
let result = ages.filter(age=> age >= 18);

sortBtns을 클릭하면 할일
  현재 보이는 리스트를 변수명 targetList에 할당
  콘솔에 출력
*/
filterSelect.addEventListener('change',function(){
  let targetClass = this.value;
  myfilter(targetClass);
});

for(let btn of btns){
  btn.addEventListener('click',function(){
    let targetClass = this.getAttribute('data-filter');
    myfilter(targetClass);
  });
}

function myfilter(tc){
  itemUl.innerHTML ='';
  for(let i = 0; i<items.length; i++){
    itemUl.appendChild(items[i]);
   }

  if(tc === 'all'){
    for(let item of items){
      item.style.display = 'block';
    }
  }else{
    for(let item of items){
      item.style.display = 'none';
    }
    let target = document.querySelectorAll(tc);
    
    for(let item of target){
      item.style.display = 'block';
    }
  }
}

