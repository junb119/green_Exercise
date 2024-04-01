$(function(){

	
	var swiper = new Swiper(".mySwiper", {
		// navigation: {
		//   nextEl: ".swiper-button-next",
		//   prevEl: ".swiper-button-prev",
		// },
		direction:"vertical"
	});
	



	/* ---------- 기본 사용 ---------- */

		$(".basic_slide").bxSlider();

	/* ---------- 좌우 컨트롤 ---------- */
	
	$(".control_slide").bxSlider({
		pager:false,
		nextText :'<i class="fa-solid fa-arrow-right"></i>',
		prevText :'<i class="fa-solid fa-arrow-left"></i>'
	});
	$(".control_slide2").bxSlider({
		pager:false,
		prevSelector:'.controls .prev',
		nextSelector:'.controls .next'
	});

	let slide3 = $(".control_slide3").bxSlider({
		pager:false,
		controls:false
	});
	$('.controls3 .prev').click(function(){
		slide3.goToPrevSlide();
	});
	$('.controls3 .next').click(function(){
		slide3.goToNextSlide();
	});

	/* ---------- 멀티플 슬라이드 ---------- */
	$('.multiple_slide').bxSlider({
		minSlides:2,
		maxSlides:3,
		slideWidth:300,
		moveSlides:1,
		pager:false,
		slideMargin:20,
		speed:200
	})

	/* ---------- 현재 슬라이드 구분하기 ---------- */
	$('.active_slide').bxSlider();

	/* ---------- 슬라이드 옵션 활용 이전,다음, 슬라이드 이동 ---------- */

	$(".active_slide2").bxSlider({
		pager:false,
		onSliderLoad: function(currentIndex){
			console.log(currentIndex);
			$('.active_slide2 li').removeClass('active');
			$('.active_slide2 li').eq(1).addClass('active');
		},
		onSlideAfter:function($slideElement){		
			$slideElement.addClass('active').siblings().removeClass('active');
		}
	});

	/* ---------- 옵션 활용 슬라이드 ---------- */
	$('.option_slide').bxSlider({
		auto:true,
		autoHover:true,
		autoControls:true,
		mode:'horizontal',
		randomStart:true,
		infiniteLoop:true,
		easing:'cubic-bezier(0.76, 0, 0.24, 1)'
	});


	/* ---------- 자동 슬라이드 ---------- */


	/* ---------- 멀티플 자동 슬라이드 ---------- */
	$('.multiple_auto_slide').bxSlider({
		auto:true,
		autoHover:true,
		autoControls:true,
		minSlides:2,
		maxSlides:3,
		slideWidth:300,
		moveSlides:1,
		pager:false,
		slideMargin:20,
		speed:200
	})
	/* ---------- 동영상 제어하기 ---------- */
	$('.movie_slide').bxSlider({
		onSliderLoad: function(currentIndex){
			console.log(currentIndex);
			$('.movie_slide li').find('video').get(0).pause();
			$('.movie_slide li').eq(1).find('video').get(0).play()
		},
		onSlideAfter:function($slideElement){		
			$slideElement.find('video').get(0).play().siblings().find('video').get(0).pause();
		}
	});


	$('.tab_slide').bxSlider();
	$( "#tabs" ).tabs();
	

	
	
});//document ready jquery 