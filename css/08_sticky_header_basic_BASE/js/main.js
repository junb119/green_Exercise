const header = document.querySelector('.page-header')
const headerOST = header.offsetTop

window.addEventListener('scroll', ()=> {
  if (headerOST < scrollY) {
    header.classList.add('sticky')
  }
  else {
    header.classList.remove('sticky')
  }
});




