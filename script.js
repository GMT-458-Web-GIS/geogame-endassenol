console.log("Game started...");

// OpenLayers haritasını oluştur
var map = new ol.Map({
  target: 'map', // index.html'deki id
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([0, 0]), // Dünya ortası
    zoom: 2
  })
});
