var map = L.map('map').setView([-34.908, -56.184], 15);

// Add OSM layer
var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
OpenStreetMap_Mapnik.addTo(map);

function loadJSON(path){
  return new Promise(function(resolve, reject){
    var obj = new XMLHttpRequest();
    obj.open("GET", path, true);
    obj.setRequestHeader("Accept", "application/json");

    obj.onload = function(){
      if(this.status === 200){
        resolve(JSON.parse(obj.response));
      } else {
        reject({
          status: this.status,
          statusText: obj.statusText
        });
        if(this.status === 401){
          location.reload(true)
        }
      }
    }

    obj.onerror = function(){
      reject({
        status: this.status,
        statusText: obj.statusText
      });
    }
    obj.send();
  })
}


loadJSON("/bicicircuitos.geojson").then( function(data) {
  L.geoJson(data, {
    style:  function(feature){
      // De datos anteriores se asume:
      // 1 - bicisenda
      // 2 - calles 30km
      // 3 - ciclovías
      switch(feature.properties.TIPO){
      case 1 : return {color: "#0f0"};
      case 2 : return { color: "#f00"};
      case 3 : return { color: "#00f"};
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

loadJSON("/bicicletarios.geojson").then( function(data) {
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

L.easyButton('<img src="/img/leaflet/btn-bicicletario.png">', function(btn, map){
  document.querySelectorAll('.bicicletario').forEach(function(button){
    toggle(button);
  });
}).addTo(map);

function toggle(elem){
  if(elem.style.display =='' || elem.style.display == 'block'){
    elem.style.display = 'none';
  }else {
    elem.style.display = 'block';
  }
}
