const tbody = document.querySelector('tbody')

async function getWeather(date) {
  const response = await fetch(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=1kHDnHU8%2BIx5r2QsFWrtHNwla9%2Bi2YHWrApkg1TGBVqEnO9A6Uo0pHa1APlZ2GuFFMgWOnvyzFOC3%2BK8TZ5BmQ%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_date=${date}&base_time=0500&nx=55&ny=127`);
  
  const jsonData = await response.json();
  const orgData = jsonData.response.body.items.item
  console.log(orgData);
  const filteredArray = orgData.filter(item=>item['category'] == 'TMP');
  console.log(filteredArray);

  let dataHTML = '';
  for (let arr of filteredArray ) {
    dataHTML += `<tr>
                  <td>${arr.fcstDate}</td>
                  <td>${arr.fcstTime}</td>
                  <td>${arr.fcstValue}</td>
                </tr>`;
  }
  tbody.innerHTML = dataHTML;
  

}

let newdate = new Date()
console.log(new Date().getFullYear())
console.log(new Date().getMonth() + 1)
console.log(new Date().getDate())

// let minDate = new Date().setDate(newdate.getDate()-1)

let minDate = `${newdate.getMonth() + 1}/${newdate.getDate()-1}/${newdate.getFullYear()}`
let maxDate = `${newdate.getMonth() + 1}/${newdate.getDate()}/${newdate.getFullYear()}`

var datepicker = new Datepicker('#datepicker', {
  min: minDate,
  max: maxDate
});

let dateInput = document.querySelector('#datepicker')
document.querySelector('form').addEventListener('submit',  (e)=> {
  e.preventDefault()
  console.log(dateInput.value)
  let dateArr = dateInput.value.replace(/\s/g , '').slice(0,-1).split('.')
  
  let date = dateArr[1]
  if (date.length < 2) {
    date = `0${date}`

  }
  let targetDate = `${dateArr[0]}${date}${dateArr[2]}`
  console.log(targetDate)
  
  
  
  
  getWeather(targetDate);
})

