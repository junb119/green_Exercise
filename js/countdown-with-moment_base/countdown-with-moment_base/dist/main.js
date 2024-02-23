moment.locale();        
let duedate = document.querySelector('.card-title span').getAttribute('data-date')
let targetDate = moment(duedate) // 디데이
duedate = document.querySelector('.card-title span').innerText = targetDate.format('LLLL')

// let duedays = targetDate.diff(now, 'days')
// let dueHours = targetDate.diff(now, 'hours')
// let dueMinutes = targetDate.diff(now, 'minutes')
// let dueSeconds = targetDate.diff(now, 'seconds')

const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes =  document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')


let now = moment()
let timeLeft = moment.duration(targetDate.diff(now))
let duedays = targetDate.diff(now,'days')
let dueHours = timeLeft._data.hours
let dueMinutes = timeLeft._data.minutes
let dueSeconds = timeLeft._data.seconds
console.log(targetDate.diff(now))
// a
console.log(timeLeft)
console.log(duedays,dueHours,dueMinutes,dueSeconds)

setInterval(() => {
  let now = moment()
let timeLeft = moment.duration(targetDate.diff(now))
let duedays = targetDate.diff(now,'days')
let dueHours = timeLeft._data.hours
let dueMinutes = timeLeft._data.minutes
let dueSeconds = timeLeft._data.seconds
console.log(duedays,dueHours,dueMinutes,dueSeconds)

days.innerText =  numberFormat(duedays)
hours.innerText =  numberFormat(dueHours)
minutes.innerText = numberFormat(dueMinutes) 
seconds.innerText =  numberFormat(dueSeconds)
}, 1000);

function numberFormat(num) {
  let convertedNum = num;

  if (num < 10 ) {
    convertedNum = `0${num}`
  }
  return convertedNum
}