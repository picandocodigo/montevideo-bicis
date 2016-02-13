var map = L.map('map').setView([-34.88, -56.18], 12);

// Add OSM layer
var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
OpenStreetMap_Mapnik.addTo(map);

var shpfile = new L.Shapefile('/bicicircuitos.zip', {});
shpfile.addTo(map);
