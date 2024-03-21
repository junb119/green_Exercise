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

  //메뉴 클릭시 이동
  let menu = $('.slidemenu li');
  let sections = $('.panel');
  let sectionOST = [];
  let currentPos = 0;

  sections.each(function(){
    sectionOST.push($(this).offset().top);
  });
  //console.log(sectionOST);

  menu.click(function(){
    let idx = $(this).index();
    $('html, body').stop().animate({scrollTop:sectionOST[idx]+'px'},800,'easeInOutCubic');  
  });
  
  let excuted = false; //스위치 생성

  $('#section-wipes').on('mousewheel', function(event) {
    //console.log(event.deltaX, event.deltaY, event.deltaFactor);
    if(!excuted){
      excuted = true;
      if(event.deltaY  === -1 && currentPos < sectionOST.length - 1){ // event.deltaY -1 아래로
        //마지막이 아닐때만 
          $('html, body').stop().animate({scrollTop:sectionOST[currentPos+1]+'px'},800,'easeInOutCubic');         
      }else if(event.deltaY  === 1 && currentPos > 0){// event.deltaY 1 위로
        //처음이 아닐때만     
          $('html, body').stop().animate({scrollTop:sectionOST[currentPos-1]+'px'},800,'easeInOutCubic');       
      }
      setTimeout(()=>{
        excuted = false;
      },500);
    }
  });
  //윈도우에 스크롤발생시 currentPos 업데이트
  $(window).scroll(function(){
    let currentSCT = $(this).scrollTop();

    sectionOST.forEach((item,idx)=>{
      if(item <= currentSCT){
        currentPos = idx;
      }
    });
    //console.log(currentPos);
  });

});