let targetNum = document.querySelector('.num')
let limitNum = targetNum.getAttribute('data-num')
let num = 0;
// targetNum.innerText = 1;

/*
0.001초마다 할일
*/
/*
일정시간마다 할일
let timer = setInterval(할일, 시간);

일정시간마다 할일 멈추기
clearInterval(대상이름)
*/

let timer = setInterval(()=> {
  num++
  targetNum.innerText = num
  if(Number(limitNum) === num ) clearInterval(timer)
}, 1) 




const counters = document.querySelectorAll('.counters > div')

// for (let i=0; i<counters.length; i++) {
//   counting(i);
// }

// function counting(idx) {
//   let dataNum = counters[idx].getAttribute('data-num')
//   let count = 0;
  
//   let timer3 = setInterval(()=>{
//     counters[idx].innerText = ++count
//     if(count === Number(dataNum) ) clearInterval(timer3)
//   },10)
// }

for (let counter of counters) {
  let dataNum = counter.getAttribute('data-num')
  let count = 0;
  
  let timer3 = setInterval(()=>{
    counter.innerText = ++count
    if(count === Number(dataNum) ) clearInterval(timer3)
  },10)
}


let statsParent = document.querySelector('.stats')
let stats = statsParent.querySelectorAll('.stat')

let excuted = false
window.addEventListener('scroll', () => {
    if (scrollY >= statsParent.offsetTop - 500) {
      // if (!statsParent.classList.contains('active')) {
      if (!excuted){
      for (let stat of stats) {
        let dataNum = stat.getAttribute('data-num')
        let count = 0;
        
        let timer3 = setInterval(()=>{
          stat.innerText = ++count
          if(count === Number(dataNum) ) clearInterval(timer3)
        },10)
      }
      excuted =true;
      // statsParent.classList.add('active')
    }
  }
  
})



