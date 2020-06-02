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
        options: options1
        /*
        options: {
          title: {
            display: true,
            text: 'Next 7 Days'
          }
        }
        */
      });

      //ctx.addEventListener("beforeprint", beforePrintHandler());
      //ctx.onresize = beforePrintHandler(myChart);

}


var option = {
  maintainAspectRatio: false,
  responsive: false,

  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
};


var options1 = {
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
/*
function beforePrintHandler (Chart) {
  for (var id in Chart.instances) {
      Chart.instances[id].resize();
  }
}
*/


function removeData(chart) {
    if(myChart != null){
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }

}



