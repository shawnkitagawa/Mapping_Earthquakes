// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a acenter and zoom level.


let map = L.map("mapid").setView([36.1733, -120.1794], 5);
// Coordinates for each point to be used in the polyline.
let line = [
    [37.615223, -122.389977],
    [30.1974292,-97.6663058],
    [43.67771760000001, -79.62481969999999],
    [40.641766,-73.780968]
  ];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color:"blue",
    opacity: 0.5,
    weight: 4,
    dashArray: "10 10"
}).addTo(map);

//  Add a marker to the map for Los Angeles, California.
/*L.circle([34.0522, -118.2437],
    {
        radius: 100
    }).addTo(map);
    */
   /*
    L.circleMarker([34.0522, -118.2437],
        {
            radius: 300,
            color: "black",
            fillColor: "#ffffa1"
        }).addTo(map);
        */
  // Loop through the cities array and create one marker for each city.
  /*
  let cityData = cities;
  cityData.forEach(function(city)
  {
    console.log(city);
    L.circleMarker(city.location,
        {
            radius: city.population/100000,
            color:"orange"
        })
    .bindPopup("<h2>" + city.city + ", "  + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
    .addTo(map);

  
  });

  */
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer(' https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
