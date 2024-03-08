let video = $('video');
let videoBtn = $('.btns');

videoBtn.on('click', function () {
  $(this).toggleClass('active')
  let videoPlayPause = video.get(0)

  $(this).hasClass('active') ? videoPlayPause.play() : videoPause()
  
  function videoPause() {
    videoPlayPause.pause()
    videoPlayPause.currentTime = 0;
  }
  
})




// let playBtn = $('#vplay');
// let stopBtn = $('#vpause')

// playBtn.click(()=>{
//   video.get(0).play()
// })

// stopBtn.click(()=>{
//   video.get(0).pause()
//   video.get(0).currentTime = 0
// })