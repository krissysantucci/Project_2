//TRYING TO GET A SECOND GRAPH IN PAGE

Plotly.d3.json('http://127.0.0.1:5000/', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
var allStateNames2 = unpack(rows, 'State'),
        allYear = unpack(rows, 'Year'),
        allURates = unpack(rows, 'Unemployment'),
        allERates = unpack(rows, 'Employment'),
        listofStates2 = [],
        currentState2,
        currentURate = [],
        currentYear2 = [],
        currentERate = [];

    for (var i = 0; i < allStateNames2.length; i++ ){
        if (listofStates2.indexOf(allStateNames2[i]) === -1 ){
            listofStates2.push(allStateNames2[i]);
        }
    }

    function getStateData(chosenState2) {
        currentURate = [];
        currentERate = [];
        currentYear2 = [];
        for (var i = 0 ; i < allStateNames2.length ; i++){
            if ( allStateNames2[i] === chosenState2 ) {
                currentURate.push(allURates[i]);
                currentYear2.push(allYear[i]);
                currentERate.push(allERates[i]);
            }
        }
    };

    // Default State Data
    setBubblePlot('Alabama');

    function setBubblePlot(chosenState2) {
        getStateData(chosenState2);

        var trace3 = {
            name: 'Umemployed',
            x: currentYear2,
            y: currentURate,
            mode: 'lines+markers',
            marker: {
                size: 14,
                opacity: 0.5,
                colors: 'blue'
            }
        };
        var trace4 = {
            name: 'Employed',
            x: currentYear2,
            y: currentERate,
            mode: 'lines+markers',
            marker: {
                size: 14,
                opacity: 0.5,
                colors: 'green'
            }
        };


      var data2 = [trace3, trace4];

        var layout3 = {
            legend: 'left',
            title:'Unemployed vs. Employed by State',   
            height: 600,
            width: 980,

        };
        var layout4 = {
            legend: 'left',
            height: 600,
            width: 980,

        };


        Plotly.newPlot('bubbleplots', data2, layout3, layout4);
    };

    var innerContainer = document.querySelector('[data-num="0"')
        plotEl = innerContainer.querySelector('.plot'),
        stateSelector2 = innerContainer.querySelector('.statedata');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length;  i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(listofStates2, stateSelector2);

    function updateState(){
        setBubblePlot(stateSelector2.value);
    }

    stateSelector2.addEventListener('change', updateState, false);
});
