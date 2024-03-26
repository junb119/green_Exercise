$('#fullpage').fullpage({
  //options here
  autoScrolling:true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'footer'],
  menu: '#myMenu',
  afterLoad: function(origin, destination, direction, trigger){
		var origin = this;

    $('.section h2').removeClass('animate__lightSpeedInRight')
    console.log($(destination.item).find('h2').addClass('animate__lightSpeedInRight'))

		// //색인 사용
		// if(origin.index == 2){
		// 	alert("Section 3 ended loading");
		// }

		// //앵커링크 사용
		// if(origin.anchor == 'secondSlide'){
		// 	alert("Section 2 ended loading");
		// }
	}

});

//methods
// $.fn.fullpage.setAllowScrolling(false);