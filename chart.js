var myChart;

function UpdateChart(chartId, labels, dataMin, dataMax){
    
    var ctx = document.getElementById(chartId).getContext('2d');
   
    if (myChart) {
      myChart.destroy();
    }
    myChart = new Chart(ctx,  {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{ 
              data: dataMin,
              label: "Min",
              borderColor: "#3e95cd",
              fill: false
            }, { 
              data: dataMax,
              label: "Max",
              borderColor: "#8e5ea2",
              fill: false
            }
          ]
        },
        options: option

      });
}



var option = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
      position: 'top'
  },
  title: {
      position: 'bottom',
      display: true,
      text:'7 days '
  },
  tooltips: {
      mode: 'index',
      intersect: false,
  },
  hover: {
      mode: 'nearest',
      intersect: true
  },
  scales: {
      xAxes: [{
          display: true,
          scaleLabel: {
              display: true,
              labelString: 'Day'
          }
      }],
      yAxes: [{
          display: true,
          scaleLabel: {
              display: true,
              labelString: '°C'
          }
      }]
  }
};
