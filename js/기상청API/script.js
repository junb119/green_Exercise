async function getWeather() {
  const response = await fetch("https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=1kHDnHU8%2BIx5r2QsFWrtHNwla9%2Bi2YHWrApkg1TGBVqEnO9A6Uo0pHa1APlZ2GuFFMgWOnvyzFOC3%2BK8TZ5BmQ%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20240226&base_time=0630&nx=55&ny=127");
  const jsonData = await response.json();
  console.log(jsonData);
  let arr = jsonData.response.body.items.item


 let newArr= arr.filter( (item)=> {
    return item['category'] === 'T1H'
  })

  console.log(newArr)
/*
catergory 값이  T1H와 일치하는 데이터를 변수명 filteredData 할당
*/


}

getWeather();