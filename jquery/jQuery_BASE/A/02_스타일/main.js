// $(document).ready(function () {
$(function() {
  console.log($('.list')) // Jquery 집합 객체
  $('.list').css({background:'#ccc'})

  $('#box divs div').css({background: '#ccc'})
  $('p:nth-of-type(2)').css({background:'#ccc'})
})
