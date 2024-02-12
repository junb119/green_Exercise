const imgs = document.querySelectorAll('.gallery img')

const lightbox = document.getElementById('lightbox-overlay');
const lightboxImage= document.getElementById('lightbox-image') ;




/*
imgs 클릭하면 할일
  변수명 bigImage에 클릭한 그 요소의 속성명 data-lightox의 값을 할당  후 console에서 확인
*/

for (let img of imgs) {
  img.addEventListener('click', (e) => {
    e.preventDefault()
    let bigImg = e.target.getAttribute('data-lightbox');
    console.log(bigImg);
    
    lightbox.classList.add('visible');
    lightboxImage.setAttribute('src', bigImg);
    
  ;})
};

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('visible');
});