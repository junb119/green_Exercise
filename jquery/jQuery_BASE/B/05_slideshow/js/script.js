let slideWrapper = $('.slide-wrapper'),
    slideContainer = slideWrapper.find('.slide-container'),
    slides = slideContainer.find('li'),
    pager = slideWrapper.find('.pager'),
    prevBtn = slideWrapper.find('#prev'),
    nextBtn = slideWrapper.find('#next'),
    currentIdx = 0,
    timer

  //  slideContainer 너비 지정
    let slideWidth = slideWrapper.outerWidth()
    slideContainer.css({width : slideWidth * slides.length + 'px'})

    slides.each((idx)=>{
      pager.append(`<a href="">${idx}</a>`)
    })


    // slideContainer.stop().animate({transform : `translateX(${-slideWidth}px)`})

    function moveSlide(num) {
      let moveAmount = slideWidth * -num
      slideContainer.stop().animate({transform : `translateX(${moveAmount}px)`})
      currentIdx = num

      updateSlide(currentIdx)
      
    }
  
    function updateSlide() {
      // 페이저 활성화
      let pagerTarget = pager.find('a')
      pagerTarget.removeClass('active')
      pagerTarget.eq(currentIdx).addClass('active')

      // 슬라이드 활성화
      slides.removeClass('active')
      slides.eq(currentIdx).addClass('active')

      // 
      if (currentIdx === slides.length - 1) {
        nextBtn.hide()
      } else if(currentIdx ===0 ){
        prevBtn.hide()
      } else {
        nextBtn.show()
        prevBtn.show()
      }
    }

    updateSlide()

    nextBtn.click(()=>{
        moveSlide(currentIdx+1)
    })
    prevBtn.click(()=>{
        moveSlide(currentIdx-1)
    })

    pager.find('a').click(function (e){
      e.preventDefault()
      let targetIdx = $(this).index()
      moveSlide(targetIdx)
    })
    
    // 자동 슬라이드

    function autoSlide() {
      timer = setInterval(() => {
        let nextIdx = (currentIdx + 1) % slides.length;
        moveSlide(nextIdx)
        // if(currentIdx === slides.length-1) {
        //   currentIdx = -1
        // }
      }, 3000);
    }
    autoSlide()
    slideWrapper.mouseenter(()=>{
      clearInterval(timer)
    })
    slideWrapper.mouseleave(()=>{
      autoSlide()
    })
    
