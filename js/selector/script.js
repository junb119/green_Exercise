const heading2 = document.querySelector('body > h2');
const section1TT = document.querySelector('.section1 article');
const section2TT = document.querySelector('.section2 article');

heading2.previousElementSibling.style.background = '#ccc'
heading2.nextElementSibling.style.background = '#ddd'


section1TT.parentNode.style.background = '#ebebeb'
section2TT.parentElement.style.background = '#ebebeb'
console.log(typeof(section1TT.parentElement))
console.log(typeof(section2TT.parentNode))

const section3 = document.querySelector('.section3' )
// 대상.childNode
// 대상.children

console.log(section3.childNodes)
console.log(section3.children)


const submenu = document.querySelector('.submenu')

console.log(submenu.closest('.menu').firstElementChild)