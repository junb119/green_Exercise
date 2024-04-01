let sun = new Image();
sun.src = 'https://assets.codepen.io/485050/sun.png';

let snow = new Image();
snow.src = 'https://assets.codepen.io/485050/snow.png';

const lineChart = document.getElementById('line-chart');

const barChart = document.getElementById('bar-chart');
const pieChart = document.getElementById('pie-chart');
const pieChartDark = document.getElementById('pie-chart-dark');
new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '2023',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
      {
        label: '2024',
        data: [4, 12, null, 7, 10, 5],
        borderWidth: 2,
        // hoverBorderWidth:5,
        // borderColor: 'rgba(0,0,0,0.5)',
        // backgroundColor:'yellow',
        // radius:4,
        // hoverRadius:10,
        // pointBorderColor:'black',
        // pointStyle:sun,
        // showLine:true,
        spanGaps: true,
        // stepped:true
      },
    ],
  },
  options: {
    scales: {
      y: {
        // beginAtZero: true
        stacked: true,
      },
    },
    maintainAspectRatio: false,
  },
});
const data2023 = {
  label: '2023',
  data: [4, 12, 8, 7, 10, 5],
  borderWidth: 2,
};
const data2024 = {
  label: '2024',
  data: [12, 19, 3, 5, 2, 3],
  borderWidth: 2,
  backgroundColor: [
    'rgba(242,166,54,.5)',
    'rgba(39,79,76,.5)',
    'rgba(40,161,130,.5)',
    'rgba(206,29,22,.5)',
    'rgba(242,166,54,.5)',
    'rgba(39,79,76,.5)',
  ],
  borderColor: [
    'rgba(242,166,54,1)',
    'rgba(39,79,76,1)',
    'rgba(40,161,130,1)',
    'rgba(206,29,22,1)',
    'rgba(242,166,54,1)',
    'rgba(39,79,76,1)',
  ],
};

new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [data2023, data2024],
  },
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        // beginAtZero: true
        // stacked:true
        stacked: true,
      },
      x: {
        stacked: true,
      },
    },

    maintainAspectRatio: false,
  },
});
new Chart(pieChartDark, {
  type: 'doughnut',
  data: {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '2024',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
      },
    ],
  },
  options: {
    cutout: '30%',
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          },
          color: '#fff',
        },
      },
    },
  },
});
new Chart(pieChart, {
  type: 'pie',
  data: {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [data2024],
  },
  options: {
    maintainAspectRatio: false,
  },
});

Chart.defaults.font.style = 'italic';
