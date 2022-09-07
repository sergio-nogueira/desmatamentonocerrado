window.onload = init

function init(){

  const map = new ol.Map({
    view: new ol.View({
      center: [-52, -13],
      zoom: 6,
      projection: 'EPSG:4326'
      }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: "js-map"
  })
}