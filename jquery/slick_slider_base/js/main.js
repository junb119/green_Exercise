$(function(){
	
	/* ---------- 기본 사용 ---------- */
	
	$(".basic_slide").bxSlider();
	

	/* ---------- 좌우 컨트롤 ---------- */
	$(".control_slide").bxSlider({
		pager : false,
		nextText : '<i class="fa-solid fa-arrow-right"></i>',
		prevText : '<i class="fa-solid fa-arrow-left"></i> '
	});
	
	$(".control_slide2").bxSlider({
		pager: false,
		prevSelector : '.controls .prev',
		nextSelector : '.controls .next'
	})
	let slide3 = $(".controls_slide3").bxSlider({
		pager: false,
		controls :false
	});
	$('.controls_3 .prev').click(function () {
		slide3.goToPrevSlide()
	})
	$('.controls_3 .next').click(function () {
		slide3.goToNextSlide()
	})
	/* ---------- 멀티플 슬라이드 ---------- */
	$('.multiple_slide').bxSlider({
		minSlides : 2,
		maxSlides : 3,
		slideWidth : 300,
		moveSlides : 1,
		pager : false,
		slideMargin : 20,
		speed : 200
	})

	/* ---------- 현재 슬라이드 구분하기 ---------- */
	$('.active_slide').bxSlider();
	
	/* ---------- 슬라이드 옵션 활용 이전,다음, 슬라이드 이동 ---------- */
	$('.active_slide2').bxSlider( {
		pager :false, 
		onSliderLoad : function(currentIndex) {
			console.log(currentIndex)
			$('.active_slide2 li').removeClass('active');
			$('.active_slide2 li').eq(currentIndex+1).addClass('active');
		},
		onSlideAfter : function ($slideElement,oldIndex) {
			// $('.active_slide2 li').eq(oldIndex+1).removeClass('active');
			$slideElement.addClass('active').siblings().removeClass('active')
		}
	});
	/* ---------- 옵션 활용 슬라이드 ---------- */
	$('.option_slide').bxSlider({
		speed : 500,
		mode : 'horizontal',
		randomStart : true,
		infiniteLoop : true,
		// easing : 'ease-out-bounce',
		auto :true,
		autoHover:true,
		autoControls:true
		

	})

	/* ---------- 자동 슬라이드 ---------- */


	/* ---------- 멀티플 자동 슬라이드 ---------- */


	/* ---------- 동영상 제어하기 ---------- */

	
	
//document ready jquery 


})