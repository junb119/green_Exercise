let video = document.querySelector('video');
console.log(typeof video)
let playBtn = document.querySelector('#vplay');
let stopBtn = document.querySelector('#vpause')

playBtn.addEventListener('click', ()=>{
  video.play();
});
stopBtn.addEventListener('click', ()=>{
  video.pause();
  video.currentTime= 0;
});