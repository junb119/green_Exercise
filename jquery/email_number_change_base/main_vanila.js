$(function () {
  let selectDomain = $('.select_domain'),
      inputEmail = $('.email_domain'),
      number =$('.number')
      minus = $('#minus'),
      plus =$('#plus'),
      unitprice = $('.unitprice'),
      count = $('.count'),
      total = $('.total');

      

      number.each(function (){
        let newUnitprice= Number($(this).text()).toLocaleString()
        $(this).text(newUnitprice)
      })
      
      
      
      



      plus.click(function (e) {
        e.preventDefault()
        count.text(parseInt(count.text()) + 1)
        let formatedUnitPrice = unitprice.text().replace(',','')
        let totalPrice = Number(formatedUnitPrice * count.text())
        total.text(totalPrice.toLocaleString())
        
      })
      minus.click(function (e) {
        e.preventDefault()
        let formatedUnitPrice = unitprice.text().replace(',','')
        if (count.text() >=2 ) {
          count.text(parseInt(count.text()) - 1)
          let totalPrice = Number(formatedUnitPrice * count.text())
          total.text( totalPrice.toLocaleString() )
        }
        
      })
      
      selectDomain.change(function () {
        let $value = $(this).val()

        if ($value === '직접입력') {
          inputEmail.val('')
          inputEmail.focus()
          // inputEmail.removeAttr('readonly')
          inputEmail.prop('readonly', false)

        } else {
          inputEmail.val($value)
          // inputEmail.attr('readonly','readonly')
          inputEmail.prop('readonly', true)
        }        
      })


})