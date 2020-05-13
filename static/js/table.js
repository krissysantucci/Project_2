//USED PLOTLY FOR CHART

Plotly.d3.json('http://127.0.0.1:5000/', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var allStateNames = unpack(rows, 'State'),
        allYear = unpack(rows, 'Year'),
        allRates = unpack(rows, 'Unemployment Rate'),
        listofStates = [],
        currentState,
        currentRate = [],
        currentYear = [];
        

    for (var i = 0; i < allStateNames.length; i++ ){
        if (listofStates.indexOf(allStateNames[i]) === -1 ){
            listofStates.push(allStateNames[i]);
        }
    }

    function getStateData(chosenState) {
        currentRate = [];
        currentYear = [];
        for (var i = 0 ; i < allStateNames.length ; i++){
            if ( allStateNames[i] === chosenState ) {
                currentRate.push(allRates[i]);
                currentYear.push(allYear[i]);
                
            }
        }
    };

    // Default State Data
    setBubblePlot('Alabama');

    function setBubblePlot(chosenState) {
        getStateData(chosenState);

        var trace = {
            name: 'Umemployment Rate',
            x: currentYear,
            y: currentRate,
            mode: 'lines+markers',
            marker: {
                size: 14,
                opacity: 0.5,
                colors: 'blue'
            }
        };
        

      var data = [trace];

        var layout = {
            legend: 'left',
            title:'Umemployment Rate by State',   
            height: 600,
            width: 980,

        };



        Plotly.newPlot('bubbleplots', data, layout);
    };

    var innerContainer = document.querySelector('[data-num="0"'),
        plotEl = innerContainer.querySelector('.plot'),
        stateSelector = innerContainer.querySelector('.statedata');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length;  i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(listofStates, stateSelector);

    function updateState(){
        setBubblePlot(stateSelector.value);
    }

    stateSelector.addEventListener('change', updateState, false);
});


