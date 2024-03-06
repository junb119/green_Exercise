// $(function () {
// // .page-header-clone
// let $window = $(window),
//     $header = $('.page-header'),
//     $headerClone = $header.contents().clone(),
//     $headerCloneContainer = $('<div class="page-header-clone"></div>'),
//     $threshold = $header.offset().top + $header.outerHeight()
    
//     $headerCloneContainer.append($headerClone);
//     $headerCloneContainer.appendTo($('body'));

//     $window.scroll(function () {
//       $window.scrollTop() >= $threshold ? $headerCloneContainer.addClass('visible') : $headerCloneContainer.removeClass('visible')
//     })
//     // 대상.width() : content까지 너비
//     // 대상.height()
//     // 대상.innerWidth() padding까지의 너비
//     // 대상.innerheight() 
//     // 대상.outerWidth() border까지의 너비
//     // 대상.outerHeight()
//     // 대상.outerWidth(true) margin까지 너비
//     // 대상.outerHeight(true)

// });
window.addEventListener('DOMContentLoaded', () => {
  let $window = window,
      $header = document.querySelector('.page-header'),
      $headerClone = $header.children[0].cloneNode(true)
      $headerCloneContainer = document.createElement('div'),
      $threshold = $header.offsetTop + $header.offsetHeight

      $headerCloneContainer.appendChild($headerClone)
      // $headerCloneContainer.innerHTML= $headerClone
      $headerCloneContainer.classList.add('page-header-clone')  
      document.body.appendChild($headerCloneContainer)

      $window.addEventListener('scroll', ()=> {
        scrollY >= $threshold ? $headerCloneContainer.classList.add('visible') : $headerCloneContainer.classList.remove('visible')
      })


})


