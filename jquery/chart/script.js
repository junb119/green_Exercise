const lineChart = document.getElementById('line-chart');
new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '2023',
        data: [24, 19, 3, 5, 2, 3],
        borderWidth: 10,
      },
      {
        label: '2024',
        data: [23, 12, 14, 1, 4, 10],
        borderWidth: 5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
