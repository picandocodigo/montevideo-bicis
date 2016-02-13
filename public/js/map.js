var map = L.map('map').setView([-34.88, -56.18], 12);

// Add OSM layer
var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
OpenStreetMap_Mapnik.addTo(map);

$.getJSON("/bicicircuitos.geojson", function(data) {
  L.geoJson(data, {
    style:  function(feature){
      switch(feature.properties.TIPO_BICIC){
      case 'Bicisenda' : return {color: "#0f0"};
      case 'Ciclovia' : return { color: "#00f"};
      case 'Calle 30' : return { color: "#f00"};
      }
    }
  }).addTo(map);
});
