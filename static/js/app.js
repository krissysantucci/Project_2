//python -m http.server

// Fetch the JSON data and to retrieve name
// function initiate() {

var url = 'http://127.0.0.1:5000/'

d3.json(url, function(response) {
        
    console.log(response);
});

// d3.json(url).then(function(response) {

//         console.log(response);
// });

// initiate();

// function optionChanged(){
    
//     var dropdownMenu = d3.select("#selDataset");
//     var dataset = dropdownMenu.property("value");


//     d3.json("static/js/samples.json").then(data => {
        
        // filteredData = data.samples.filter(dataSample => {
             //return dataSample.data.
//         })

//         sampleData = filteredData[0]
        
//         filteredMeta = data.metadata.filter(meta => {
//             return meta.id == dataset
//         })

//         metaData = filteredMeta[0]

//         console.log(sampleData)
//         console.log(metaData)

//         buildBarChart(sampleData)
//         buildBubbleChart(sampleData)
//         buildDemoInfo(metaData)

//     });
// }

// function buildBarChart(sampleData) {

//     var topTen_SampleValues = sampleData.sample_values.slice(0,10).map(d => d).reverse()
//     var topTen_OtuIds = sampleData.otu_ids.slice(0,10).map(d => "OTU " + d).reverse()
//     var topTen_OtuLabels = sampleData.otu_labels.slice(0,10)

//     var trace = {
//         x: topTen_SampleValues,
//         y: topTen_OtuIds,
//         text: topTen_OtuLabels,
//         marker: {
//             color: 'rgb(158,202,225)',
//             line: {
//                 color:'rgb(8,48,107)',
//                 width: 1.5}

//               },
//         type: "bar",
//         orientation: "h"
//     }

//     var data = [trace]

//     var layout = {
//         title: "Top 10 OTU",
//         margin: {
//             l: 80,
//             r: 80,
//             t: 80,
//             b: 80
//         }
//     }

//     Plotly.newPlot("bar", data, layout)

// }

// function buildBubbleChart(sampleData) {


//     var trace = {
//         x: sampleData.otu_ids,
//         y: sampleData.sample_values,
//         showlegend: false,
//         mode: "markers",
//         marker: {
//             size: sampleData.sample_values,
//             color: sampleData.otu_ids,
//             opacity: 0.8,
//             type: 'scatter'
//         },
//         text: sampleData.otu_labels

//     };

//     var data = [trace]

//     var layout = {
//         xaxis:{title: "OTU ID"},
//         height: 700,
//         width: 1000
//     };

//     Plotly.newPlot("bubble", data, layout)

// }

// function buildDemoInfo(metaData){
    
//     demoBuild = d3.select("#sample-metadata")
//     demoBuild.html("")

//     Object.entries(metaData).forEach(d =>{
//         demoBuild.append("h5").text(d[0].toUpperCase() + ": " + d[1] + "\n")
//     })

//
