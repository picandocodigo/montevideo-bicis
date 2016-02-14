var map = L.map('map').setView([-34.908, -56.184], 15);

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
  shadowUrl: '/img/leaflet/icons-shadow.png',
  className: 'bicicletario'
});

var taller = new L.icon({
  iconUrl: '/img/leaflet/taller.png',
  iconSize: [30, 30],
  iconAnchor: [30, 30],
  popupAnchor: [-3, -76],
  shadowUrl: '/img/leaflet/icons-shadow.png',
  className: 'taller'
});

var movete = new L.icon({
  iconUrl: '/img/leaflet/movete.png',
  iconSize: [30,30],
  iconAnchor: [30, 30],
  popupAnchor: [0, -76],
  shadowUrl: '/img/leaflet/icons-shadow.png',
  className: 'movete'
});


$.getJSON("/bicicletarios.geojson", function(data) {
  L.geoJson(data, {
    pointToLayer: function(feature, latlng){
      return L.marker(latlng, {icon: bicicletario});
    },
    onEachFeature: function(feature, layer){
      var bicicletarioPopup = "<h5>Bicicletario</h5>Cantidad: " + feature.properties.CANTIDAD +
          "<br>Ubicación bicis: " + feature.properties.UBIC_BICIC +
          "<br>Nombre de ubicación: " + feature.properties.NOMBRE_UBI;
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

$.getJSON("/estaciones.geojson", function(data) {
  L.geoJson(data, {
    pointToLayer: function(feature, latlng){
      return L.marker(latlng, {icon: movete});
    },
    onEachFeature: function(feature, layer){
      var bicicletarioPopup = "<h5>Estación \"Movete\"</h5><br>" +
          "Cantidad: " + feature.properties.CANTIDAD;
      layer.bindPopup(bicicletarioPopup, {offset: new L.Point(-15, -25)});
    }
  }).addTo(map);
});

L.easyButton('<img src="/img/leaflet/btn-bicicletario.png">', function(btn, map){
  $('.bicicletario').each(function(index, value){
    $(this).toggle();
  });
}).addTo(map);

L.easyButton('<img src="/img/leaflet/btn-taller.png">', function(btn, map){
  $('.taller').each(function(index, value){
    $(this).toggle();
  });
}).addTo(map);

L.easyButton('<img src="/img/leaflet/btn-movete.png">', function(btn, map){
  $('.movete').each(function(index, value){
    $(this).toggle();
  });
}).addTo(map);
