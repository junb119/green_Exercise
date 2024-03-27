function activateFullpage() {
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
}

//methods
// $.fn.fullpage.setAllowScrolling(false);


$(window).resize(() => {
	let windowWidth = $(window).outerWidth()
	if (windowWidth <= 768) {
		fullpage_api.destroy('all');
	}
	else {
		activateFullpage()
	}
})

$mainmenu.mouseover(function() {
	if(($window).width() >768) {
		$(this).find('ul)'.slideDown())
	}
})


activateFullpage()

// function reActivate(){
// 	new fullpage('#fullpage', {
// 		anchors: ['page1', 'page2', 'page3', 'page4'],
// 		sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
// 	});  
// 	}
	
// 	reActivate()
	
// 	//adding the actions to the buttons
// 	$(document).on('click', '#destroy', function(){
// 		//default is 700. 
// 		fullpage_api.destroy('all');
// 	});
// 	$(document).on('click', '#rebuild', function(){
// 		//default is 700. 
// 		reActivate()
// 	});
	