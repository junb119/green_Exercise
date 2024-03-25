let targetSection = document.querySelector('.parent')
let sectionStart = targetSection.offsetTop;
let sectionHeight = targetSection.offsetHeight;
let scrollPastSection = sectionStart + sectionHeight
console.log(sectionStart, sectionHeight)
window.addEventListener('scroll', ()=> {
  let scrollTop = scrollY
  
  console.log('scroll', scrollTop, 'sps', scrollPastSection)
  if (scrollTop >= scrollPastSection){
    console.log('complete')
  }
  let scrollFraction = 0;

  if(scrollTop >= sectionStart) {
    scrollFraction = (scrollTop - sectionStart) / sectionHeight 
  }

  if ( scrollTop >= scrollPastSection) {
    scrollFraction = 1
  }
  let value= scrollFraction * 100
  document.documentElement.style.setProperty('--crop',`${value}%`)
  
  
  

})