const imageList = document.querySelector('.image-list');
const btns = document.querySelectorAll('.view-options button');
const imageListItems = imageList.querySelectorAll('li');
const rangeInput = document.querySelector('.zoom input');
const captions = document.querySelectorAll('.image-list p:first-child')
const searchInput = document.querySelector('.search-wrapper input')
const searchResult= document.querySelector('.counter span')
const active = "active";
const listView = "list-view"
const gridView = "grid-view"
const dNone = "d-none"

let captionArray = [];
let counter = 1;

for (let caption of captions) {
  captionArray.push({
    id:counter++ , 
    text: caption.textContent 
  
  })
}


// event : input: 바뀔때마다 바뀜 change: 바꾸고 난 후 바뀜
rangeInput.addEventListener('input',(e)=> { 
  document.documentElement.style.setProperty('--minRangeValue', `${e.target.value}px`)
})

for (let btn of btns) {  
  btn.addEventListener('click', (e)=> {
    console.log(e.currentTarget)
    const parent = e.currentTarget.parentElement
    document.querySelector('.view-options .active').classList.remove(active)
    parent.classList.add(active)



    if (parent.classList.contains('show-list')) {
      imageList.classList.remove(gridView)
      imageList.classList.add(listView)

      parent.previousElementSibling.previousElementSibling.classList.add(dNone)  
    } else {
      parent.previousElementSibling.classList.remove(dNone)  
      imageList.classList.remove(listView)
      imageList.classList.add(gridView)
    }
  })
  
}


searchInput.addEventListener('input',(e)=> {
  for (let item of imageListItems){
    item.classList.add(dNone);
  }

  const filterdArray = captionArray.filter(caption=>caption.text.toLowerCase().includes(e.target.value.toLowerCase()) )

  console.log(filterdArray)

  if (filterdArray.length>0) {
    for (let fa of filterdArray) {
      imageListItems[fa.id-1].classList.remove(dNone)
    }


  } else {

  }

  

})