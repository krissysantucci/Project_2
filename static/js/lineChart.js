//Used Google Charts
const yearlist = ['2010', '2011','2012','2013', '2014', '2015', '2016', '2017', '2018', '2019','2020',]
const averageArr = []
var arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length

		var url = 'http://127.0.0.1:5000/'
	     d3.json(url, response => {
        for (i=0; i < yearlist.length; i++) {
         var newArray = []
        response.forEach(element => {
			  if(element.Year === yearlist[i])
			  newArray.push(element["Unemployment Rate"]);
      
        
		  });
        US = arrAvg(newArray)
        averageArr.push(US)        
      
    };
    console.log(averageArr)
  });

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Unemployment Rate %'],
          ['2010',  averageArr[0]],
          ['2011',  averageArr[1]],
          ['2012',  averageArr[2]],
          ['2013',  averageArr[3]],
          ['2014',  averageArr[4]],
          ['2015',  averageArr[5]],
          ['2016',  averageArr[6]],
          ['2017',  averageArr[7]],
          ['2018',  averageArr[8]],
          ['2019',  averageArr[9]],
          ['2020',  averageArr[10]]
        ]);

        var options = {
          title: 'United States Unemployment Rate %',
          legend: { position: 'bottom' },
          curveType: 'function',
          lineWidth: 2,
          pointSize: 10, 
          colors: ['#669966']
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options)};
