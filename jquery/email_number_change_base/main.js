$(function(){
  let selectDomain = $('.select_domain'),
      inputEmail =$('.email_domain'),
      number = $('.number'),
      minus = $('#minus'),
      plus = $('#plus'),
      unitprice = $('.unitprice'),
      count = $('.count'),
      total = $('.total');


    let newUnitprice = Number(unitprice.text()).toLocaleString();
    console.log(newUnitprice);
    unitprice.text(newUnitprice);




  plus.click(function(e){
    e.preventDefault();
    let newCount = parseInt(count.text()) + 1;
    let formatedUnitPrice = unitprice.text().replace(',','');
    count.text(newCount);
    let totalPrice = newCount*formatedUnitPrice;
    total.text(totalPrice.toLocaleString());
  });
  minus.click(function(e){
    e.preventDefault();
    if(parseInt(count.text()) >= 2){
      let newCount = parseInt(count.text()) - 1;
      let formatedUnitPrice = unitprice.text().replace(',','');
      count.text(newCount);
      let totalPrice = newCount*formatedUnitPrice;
      total.text(totalPrice.toLocaleString());
    }
  });








  selectDomain.change(function(){
    if($(this).val() === '직접입력'){
      inputEmail.val('');
      // inputEmail.removeAttr('readonly');
      inputEmail.prop( "readonly", false);
      inputEmail.focus();
    } else{
      inputEmail.val($(this).val());
    }
  });


});
