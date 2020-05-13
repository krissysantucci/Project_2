
// Fetch the JSON data and to retrieve name
// function initiate() {
	const newArray = []

		var url = 'http://127.0.0.1:5000/'
	     d3.json(url, response => {
		  response.forEach(element => {
			  if(element.Year === '2020')
			  newArray.push(element)
			  
		  });
	
		  console.log(newArray)

// Create a map object
var myMap = L.map("map", {
	center: [37.09, -95.71],
	zoom: 5
  });

 // Define variables for tile layers
// 	var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
// 		attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
// 		maxZoom: 18,
// 		id: "mapbox.streets",
// 		accessToken: API_KEY
// 	});

  var outdoors = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.outdoors',
        accessToken: API_KEY
	}).addTo(myMap);

// 	var grayscale = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//         attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',
//         maxZoom: 18,
//         id: 'mapbox.light',
//         accessToken: API_KEY
// 	});
	
	// var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
	// 	attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
	// 	maxZoom: 18,
	// 	id: "mapbox.dark",
	// 	accessToken: API_KEY
	//   }).addTo(myMap);

  
var capitals = [
	{
		coordinates: [32.361538, -86.279118],
		abbr: "AL",
		name: "Alabama",
    	capital: "Montgomery"	
	},
	{
		coordinates: [58.301935, -134.419740],
		abbr: "AK",
		name: "Alaska",
		capital: "Juneau"	
	},
	{
		coordinates: [33.448457, -112.073844],
		abbr: "AZ",
		name: "Arizona",
		capital: "Phoenix",		
	},
	{
		coordinates: [34.736009, -92.331122],
		abbr: "AR",
		name: "Arkansas",
		capital: "Little Rock",		
	},
	{
		coordinates: [38.555605,-121.468926 ],
		abbr: "CA",
		name: "California",
		capital: "Sacramento",		
	},
	{
		coordinates: [39.7391667, -104.984167],
		abbr: "CO",
		name: "Colorado",
		capital: "Denver",		
	},
	{
		coordinates: [41.767, -72.677],
		abbr: "CT",
		name: "Connecticut",
		capital: "Hartford",
	},
	{
		coordinates:[39.161921, -75.526755],
		abbr: "DE",
		name: "Delaware",
		capital: "Dover",		
	},
	{
		coordinates:[30.4518, -84.27277],
		abbr: "FL",
		name: "Florida",
		capital: "Tallahassee",	
	},
	{
		coordinates:[33.76, -84.39],
		abbr: "GA",
		name: "Georgia",
		capital: "Atlanta",		
	},
	{
		coordinates: [21.30895, -157.826182],
		abbr: "HI",
		name: "Hawaii",
		capital: "Honolulu",	
	},
	{
		coordinates: [43.613739, -116237651],
		abbr: "ID",
		name: "Idaho",
		capital: "Boise",
	},
	{
		coordinates:[39.783250, -89.650373],
		abbr: "IL",
		name: "Illinois",
		capital: "Springfield",
	},
	{
		coordinates: [39.790942, -89.147685],
		abbr: "IN",
		name: "Indiana",
		capital: "Indianapolis",	
	},
	{
		coordinates: [41.590939, -93.620866],
		abbr: "IA",
		name: "Iowa",
		capital: "Des Moines",	
	},
	{
		coordinates: [39.04, -95.69],
		abbr: "KS",
		name: "Kansas",
		capital: "Topeka",	
	},
	{
		coordinates: [38.197274, -84.86311],
		abbr: "KY",
		name: "Kentucky",
		capital: "Frankfort",		
	},
	{
		coordinates:[30.45809, -91.140229],
		abbr: "LA",
		name: "Louisiana",
		capital: "Baton Rouge",	
	},
	{
		coordinates:[44.323535, -69.765261],
		abbr: "ME",
		name: "Maine",
		capital: "Augusta",	
	},
	{
		coordinates:[38.972945, -76.501157],
		abbr: "MD",
		name: "Maryland",
		capital: "Annapolis",	
	},
	{
		coordinates:[42.2352, -71.0275],
		abbr: "MA",
		name: "Massachusetts",
		capital: "Boston",		
	},
	{
		coordinates:[42.7335, -84.5467],
		abbr: "MI",
		name: "Michigan",
		capital: "Lansing",	
	},
	{
		coordinates:[44.95, -93.094],
		abbr: "MN",
		name: "Minnesota",
		capital: "Saint Paul",
	},
	{
		coordinates:[32.320, -90.207],
		abbr: "MS",
		name: "Mississippi",
		capital: "Jackson",	
	},
	{
		coordinates:[38.572954, -92.189283],
		abbr: "MO",
		name: "Missouri",
		capital: "Jefferson City",
	},
	{
		coordinates:[46.595805, -112.027031],
		abbr: "MT",
		name: "Montana",
		capital: "Helana",
	},
	{
		coordinates: [40.809868, -96.675345],
		abbr: "NE",
		name: "Nebraska",
		capital: "Lincoln",	
	},
	{
		coordinates:[39.160949, -119.753877],
		abbr: "NV",
		name: "Nevada",
		capital: "Carson City",
	},
	{
		coordinates:[43.220093, -71549127],
		abbr: "NH",
		name: "New Hampshire",
		capital: "Concord",
	},
	{
		coordinates:[40.221741, -74.753138],
		abbr: "NJ",
		name: "New Jersey",
		capital: "Trenton",
	},
	{
		coordinates:[35.667231, -105.964575],
		abbr: "NM",
		name: "New Mexico",
		capital: "Santa Fe",
	},
	{
		coordinates:[42.659829, -73.781339],
		abbr: "NY",
		name: "New York",
		capital: "Albany",
	},
	{
		coordinates:[35.771, -78.638],
		abbr: "NC",
		name: "North Carolina",
		capital: "Raleigh",
	},
	{
		coordinates:[48.813343, -100.779004],
		abbr: "ND",
		name: "North Dakota",
		capital: "Bismarck",
	},
	{
		coordinates: [39.962245, -83.000647],
		abbr: "OH",
		name: "Ohio",
		capital: "Columbus",
	},
	{
		coordinates:[35.482309, -97.534994],
		abbr: "OK",
		name: "Oklahoma",
		capital: "Oklahoma City",
	},
	{
		coordinates:[44.931109, -123.029159],
		abbr: "OR",
		name: "Oregon",
		capital: "Salem",
	},
	{
		coordinates:[40.269789, -76.895613],
		abbr: "PA",
		name: "Pennsylvania",
		capital: "Harrisburg",
	},
	{
		coordinates:[41.82355, -71.422132],
		abbr: "RI",
		name: "Rhode Island",
		capital: "Providence",
	},
	{
		coordinates:[34.000, -81.035],
		abbr: "SC",
		name: "South Carolina",
		capital: "Columbia",
	},
	{
		coordinates:[44.367966, -100.336378],
		abbr: "SD",
		name: "South Dakota",
		capital: "Pierre",
	},
	{
		coordinates:[36.165, -86.784],
		abbr: "TN",
		name: "Tennessee",
		capital: "Nashville",
	},
	{
		coordinates:[30.266667, -97.75],
		abbr: "TX",
		name: "Texas",
		capital: "Austin",
	},
	{
		coordinates:[40.7547, -111.892622],
		abbr: "UT",
		name: "Utah",
		capital: "Salt Lake City",
	},
	{
		coordinates:[44.2639, -72.57194],
		abbr: "VT",
		name: "Vermont",
		capital: "Montpelier",
	},
	{
		coordinates:[37.54, -77.46],
		abbr: "VA",
		name: "Virginia",
		capital: "Richmond",
	},
	{
		coordinates:[47.042418, -122.893077],
		abbr: "WA",
		name: "Washington",
		capital: "Olympia",
	},
	{
		coordinates:[38.349497, -81.633294],
		abbr: "WV",
		name: "West Virginia",
		capital: "Charleston",
	},
	{
		coordinates:[43.074722, -89.384444],
		abbr: "WI",
		name: "Wisconsin",
		capital: "Madison",
	},
	{
		coordinates:[41.145548, -104.802042],
		abbr: "WY",
		name: "Wyoming",
		capital: "Cheyenne",
	}
]


  // Add code to create a marker for each city below and add it to the map

 
  for (var i=0; i < capitals.length; i++) {
	 var pins = capitals[i];
		L.marker(pins.coordinates)
		.bindPopup("<h1> State: " + pins.name+ "</h1><h1> Capital: " +pins.capital + "<h1> Current Unemployment Rate: " + newArray[i]["Unemployment Rate"].toFixed(2) + "% </h1>")
		.addTo(myMap);
	};
		 })
