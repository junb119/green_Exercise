const itemUl = $('.product_list');
const items = itemUl.find('li');
const btns =  $('.btns button');
const filterSelect = $('#filter');
const sortBtns = $('.sorting button');

sortBtns.click(function (e) {
  let itemsArr = [...items];
  let targetList = itemsArr.filter(item=> {
      if(!$(item).attr('style') || $(item).css('display') === 'block'){
        return item;
      }
    });
    let direction = $(this).attr('data-sort');
    mySorting(targetList,direction);
})

function mySorting(arr, direction){
  
  if(direction === 'order:asc'){
    arr.sort(function(a,b){
      return $(a).attr('data-order') - $(b).attr('data-order');
    });
  } else if(direction === 'order:descending'){
    arr.sort(function(a,b){
      return $(b).attr('data-order') - $(a).attr('data-order');
    });
    
  }
  itemUl.html($(arr));
  
}

filterSelect.change(function(){
  let targetClass = $(this).val();
  myfilter(targetClass);
});


btns.click(function(){
  let targetClass = $(this).attr('data-filter');
  myfilter(targetClass);
});

function myfilter(tc){
  itemUl.html(items)
  
  if(tc === 'all'){
    items.show()
    // items.each(function() {
    //   $(this).css({display :'block'})
    // })
    
  }else{
    items.hide()
    // items.each(function() {
    //   $(this).css({display :'none'})
    // })
    let target = $(tc);
    
    target.show()

    // target.each(function () {
    //   $(this).css({display: 'block'})
    // })
    
  }
}

