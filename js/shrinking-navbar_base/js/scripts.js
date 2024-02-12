const header = document.querySelector('#main-header');
const defaultLogo =  'images/logo.svg'
const smallLogo =  'images/logo-shrink.svg'
const logo = header.querySelector('#logo')



/*
스크롤이 생기면 header에 shrink 추가
스크롤양 0이면 header에서 shrink 제거
*/

window.addEventListener('scroll', () => {
  if (scrollY > 0) {
    if (!header.classList.contains('shrink')) {
      header.classList.add('shrink')  
      switchImg(smallLogo)
    }
    
  }
  else {
    header.classList.remove('shrink')
    switchImg(defaultLogo)
  }
})

function switchImg(newImg) {
  logo.classList.add('hide');
  setTimeout(() => {
    logo.setAttribute('src', newImg)
    logo.classList.remove('hide');  
  }, 300)
  
}