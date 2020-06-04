var myChart;


/*
var sun = new Image();
sun.src = 'https://i.imgur.com/yDYW1I7.png';

var cloud = new Image();
cloud.src = 'https://i.imgur.com/DIbr9q1.png';

Chart.pluginService.register({
  afterUpdate: function(chart) {
      chart.config.data.datasets[0]._meta[0].data[7]._model.pointStyle = sun;
      chart.config.data.datasets[1]._meta[0].data[2]._model.pointStyle = cloud;
  }
});
*/


var sun = new Image();
sun.src = 'https://i.imgur.com/yDYW1I7.png';

var cloud = new Image();
cloud.src = 'https://i.imgur.com/DIbr9q1.png';

Chart.pluginService.register({
  afterUpdate: function(chart) {
      chart.options.legend.labels[0] = sun;
      //chart.config.data.datasets[1]._meta[0].data[2]._model.pointStyle = cloud;
  }
});


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
      position: 'top',
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
              labelString: ''
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


