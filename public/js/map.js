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

var bicicletario = new L.icon({
  iconUrl: '/img/leaflet/bicicletario.png',
  iconSize: [30, 30],
  iconAnchor: [30, 30],
  popupAnchor: [-3, -76],
  shadowUrl: '/img/leaflet/marker-shadow.png',
});

var taller = new L.icon({
  iconUrl: '/img/leaflet/taller.png',
  iconSize: [30, 30],
  iconAnchor: [30, 30],
  popupAnchor: [-3, -76],
  shadowUrl: '/img/leaflet/marker-shadow.png',
});

$.getJSON("/bicicletarios.geojson", function(data) {
  L.geoJson(data, {
    pointToLayer: function(feature, latlng){
      return L.marker(latlng, {icon: bicicletario});
    },
    onEachFeature: function(feature, layer){
      var bicicletarioPopup = "<h5>Bicicletario</h5>Cantidad: " + feature.properties.CANTIDAD +
          "<br>Ubicación bicis: " + feature.properties.UBIC_BICIC +
          "<br>Nombre de ubicación: " + feature.properties.NOMBRE_UBI +
          "<br>GID: " + feature.properties.GID;
      layer.bindPopup(bicicletarioPopup, {offset: new L.Point(-15, -25)});
    }
  }).addTo(map);
});

$.getJSON("/talleres.geojson", function(data) {
  L.geoJson(data, {
    pointToLayer: function(feature, latlng){
      return L.marker(latlng, {icon: taller});
    },
    onEachFeature: function(feature, layer){
      var bicicletarioPopup = "<h5>Taller</h5><br>" +
          "Nombre: " + feature.properties.NOMBRE;
      layer.bindPopup(bicicletarioPopup, {offset: new L.Point(-15, -25)});
    }
  }).addTo(map);
});
