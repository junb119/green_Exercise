async function getWeather() {
  const response = await fetch("https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=jNu%2FUDr0Q2KYQ9rDGnLJqo4ahkjIQrHpn9wOnGbNXkmLqSFCj5rE6fYoLKFF1ELf5Yr4JDkQeCisuwGmsVfbOw%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20240226&base_time=0630&nx=55&ny=127");
  const jsonData = await response.json();
  
  const orgData = jsonData.response.body.items.item;

  const result = orgData.filter((item)=> item.category == 'T1H');
  let trHTML = '';
  console.log(result);

  for(let rs of result){
    trHTML += `<tr>
                <td>${rs.baseDate}</td>
                <td>${rs.fcstTime}</td>
                <td>${rs.fcstValue}</td>
              </tr>`;
  }
  console.log(trHTML);
  document.querySelector('table tbody').innerHTML = trHTML;
}
getWeather();