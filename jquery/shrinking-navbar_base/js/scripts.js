/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/

let $window = $(window),
    $logo = $('#logo')
    $header = $('header'),
    $switch = false
$window.scroll(function () {
  if($window.scrollTop() > 0 ){
    // if (!$header.hasClass('active')) {

    if(!$switch) {
      $header.addClass('active')
      changeLogo('images/logo-shrink.svg')
      $switch = true
    }
    // }
  
  } else {
    $header.removeClass('active')   
    changeLogo('images/logo.svg')
    $switch = false
  }
})

function changeLogo(newPath){
    $logo.fadeOut(300, function () {
      $logo.attr('src', newPath)
      $logo.fadeIn(300)
    })
}

/*


* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/

