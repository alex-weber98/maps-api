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
        options: {
          title: {
            display: true,
            text: 'Next 7 Days'
          }
        }
      });

      //ctx.addEventListener("beforeprint", beforePrintHandler());
      ctx.onbeforepirnt = beforePrintHandler(myChart);

}

function beforePrintHandler (Chart) {
  for (var id in Chart.instances) {
      Chart.instances[id].resize();
  }
}



function removeData(chart) {
    if(myChart != null){
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }

}

/*

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx,  {
        type: 'line',
        data: {
          labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
          datasets: [{ 
              data: [86,114,106,106,107,111,133,221,783,2478],
              label: "Min",
              borderColor: "#3e95cd",
              fill: false
            }, { 
              data: [282,350,411,502,635,809,947,1402,3700,5267],
              label: "Max",
              borderColor: "#8e5ea2",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Next 7 Days'
          }
        }
      });

*/
