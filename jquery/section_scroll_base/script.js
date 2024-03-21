$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: "200%" // this works just fine with duration 0 as well
      // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
      // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    }
  });

  // get all slides
  var slides = document.querySelectorAll("section.panel");

  // create scene for every slide
  for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i], {pushFollowers: false})
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }

  // 메뉴 클릭시 이동
  let menu = $('.slidemenu li');
  let section = $('.panel');
  let sectionOST = [];
  let currentPos = 0;

  section.each( function() {
    sectionOST.push($(this).offset().top)
    
  })
  
  menu.click(function (e) {
    e.preventDefault()
    // console.log(sectionOST[$(this).index()])
    let idx = $(this).index()
    $('html, body').stop().animate({scrollTop : sectionOST[idx]} , 800 ,'easeInOutCubic')
    
    console.log(currentPos)
  })
  let executed =false
  $('#section-wipes').on('mousewheel', function(event) {
    
    if (!executed) {
      executed = true
      if (event.deltaY === -1 && currentPos < sectionOST.length-1) {      
          $('html, body').stop().animate({scrollTop : sectionOST[currentPos + 1]} , 800 ,'easeInOutCubic')
      } else if (event.deltaY === 1 && currentPos > 0) {
        $('html, body').stop().animate({scrollTop : sectionOST[currentPos - 1]} , 800 ,'easeInOutCubic')
      }
      setTimeout(() => {
        executed = false
      }, 800);
    }
  });

  $(window).scroll(function() {
    let currentSCT = $(this).scrollTop()
    
    sectionOST.forEach((item, idx)=>{
      if (currentSCT >= item ) {
        currentPos = idx
        // $('html, body').stop().animate({scrollTop : sectionOST[currentPos]} , 800 ,'easeInOutCubic')
      }
    })
    console.log(currentPos)
  })

});