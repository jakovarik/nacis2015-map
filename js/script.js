var map = L.map('map').setView([44.98044862724291, -93.26319694519043], 15);
          

		L.control.locate({
                      strings: {
                                 title: "Zoom to your current location"
                               }
               ,locateOptions: {
                                 maxZoom: 17
                               }
                     }).addTo(map);

//var baselayer = new L.StamenTileLayer("toner-lite");
var baselayer = new L.StamenTileLayer("terrain");
baselayer.addTo(map);


var confPin = L.MakiMarkers.icon({
    icon: "star",
    color: "#ff0000",
    size: "l"
});

var beerPin = L.MakiMarkers.icon({
    icon: "beer",
    color: "##23344c",
    size: "m"
});

var barPin = L.MakiMarkers.icon({
    icon: "bar",
    color: "##23344c",
    size: "m"
});

var restaurantPin = L.MakiMarkers.icon({
    icon: "restaurant",
    color: "##23344c",
    size: "m"
});

var coffeePin = L.MakiMarkers.icon({
    icon: "cafe",
    color: "##23344c",
    size: "m"
});

var tapLayer = new L.GeoJSON.AJAX("js/places.geojson",{
		    pointToLayer: function (feature, latlng) {
		    	
				 var html = '';
               if (feature.properties.web) {
                      html += '<h3><a href="'+ feature.properties.web + '">' + feature.properties.title + '</a></h3>';
                                           } 
               else {
                      html += '<h3>' + feature.properties.title + '</h3>';
                    }
               if (feature.properties.address) {
                      html += '<p>'+ feature.properties.address + '</p>';
                                               }
               if (feature.properties.scoop) {
                      html += '<p>'+ feature.properties.scoop + '</p>';
                                               }
      html += '<div class="put"></div>';
      var popup = new L.popup({closeButton:false}).setContent(html);

      var marker = new L.marker(latlng);
      if (feature.properties.poi_type === 'conf') {
          marker.setIcon(confPin); 
         }
      if (feature.properties.poi_type === 'beer') {
          marker.setIcon(confPin); 
         }
      if (feature.properties.poi_type === 'bar') {
          marker.setIcon(confPin); 
         }
      if (feature.properties.poi_type === 'restaurant') {
          marker.setIcon(confPin); 
         }
      if (feature.properties.poi_type === 'cafe') {
          marker.setIcon(confPin); 
         }

      //marker.setIcon(beerPin);          
		  marker.bindPopup(popup);
	   
		  return marker;		        
		    }
		});

tapLayer.addTo(map);

