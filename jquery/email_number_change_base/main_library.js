$(function () {
  let selectDomain = $('.select_domain'),
      inputEmail = $('.email_domain'),
      minus = $('#minus'),
      plus =$('#plus'),
      unitprice = $('.unitprice'),
      count = $('.count'),
      total = $('.total');
      number =$('.number')
  
      number.number(true)

      plus.click(function (e) {
        e.preventDefault()
        count.text(parseInt(count.text()) + 1)
        let formatedUnitPrice = unitprice.text().replace(',','')
        let totalPrice = Number(formatedUnitPrice * count.text())
        total.text(totalPrice)
        total.number(true)
        
      })
      minus.click(function (e) {
        e.preventDefault()
        let formatedUnitPrice = unitprice.text().replace(',','')
        if (count.text() >=2 ) {
          count.text(parseInt(count.text()) - 1)
          let totalPrice = Number(formatedUnitPrice * count.text())
          total.text( totalPrice )
          total.number(true)
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