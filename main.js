window.onload = init

function init(){

  const map = new ol.Map({
    view: new ol.View({
      center: [-50, -13],
      zoom: 5.6,
      projection: 'EPSG:4326',
      }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true
      })
    ],
    target: "js-map",
  })

  // Dados espacializados por municipio
  const PotCropLat = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://ec2-34-201-126-65.compute-1.amazonaws.com:8080/geoserver/tese/wms?service=WMS&version=1.1.0&request=GetMap&layers=tese%3APotCropLat',
      }),
      visible: true,
      title: 'PotCropLat'
  })

  const AgicCO = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://ec2-34-201-126-65.compute-1.amazonaws.com:8080/geoserver/tese/wms?service=WMS&version=1.1.0&request=GetMap&layers=tese%3AAgicCO',
      }),
      visible: false,
      title: 'AgicCO'
  })

  const Restaur = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://ec2-34-201-126-65.compute-1.amazonaws.com:8080/geoserver/tese/wms?service=WMS&version=1.1.0&request=GetMap&layers=tese%3ARestaur',
      }),
      visible: false,
      title: 'Restaur'
  })

  const RPQAAD = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://ec2-34-201-126-65.compute-1.amazonaws.com:8080/geoserver/tese/wms?service=WMS&version=1.1.0&request=GetMap&layers=tese%3ARPQAAD',
      }),
      visible: false,
      title: 'RPQAAD'
  })

  const BIO = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://ec2-34-201-126-65.compute-1.amazonaws.com:8080/geoserver/tese/wms?service=WMS&version=1.1.0&request=GetMap&layers=tese%3ABIO',
      }),
      visible: false,
      title: 'BIO'
  })

  const DSC = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://ec2-34-201-126-65.compute-1.amazonaws.com:8080/geoserver/tese/wms?service=WMS&version=1.1.0&request=GetMap&layers=tese%3ADSC',
      }),
      visible: false,
      title: 'DSC'
  })

  const DVN = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://ec2-34-201-126-65.compute-1.amazonaws.com:8080/geoserver/tese/wms?service=WMS&version=1.1.0&request=GetMap&layers=tese%3ADVN',
      }),
      visible: false,
      title: 'DVN'
  })

  const EDB = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://ec2-34-201-126-65.compute-1.amazonaws.com:8080/geoserver/tese/wms?service=WMS&version=1.1.0&request=GetMap&layers=tese%3AEDB',
      }),
      visible: false,
      title: 'EDB'
  })

  const D30 = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://ec2-34-201-126-65.compute-1.amazonaws.com:8080/geoserver/tese/wms?service=WMS&version=1.1.0&request=GetMap&layers=tese%3AD30',
      }),
      visible: false,
      title: 'D30'
  })

  const D16a20 = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://ec2-34-201-126-65.compute-1.amazonaws.com:8080/geoserver/tese/wms?service=WMS&version=1.1.0&request=GetMap&layers=tese%3AD16a20',
      }),
      visible: false,
      title: 'D16a20'
  })
  
  // Layer Group
  const baseLayerGroup = new ol.layer.Group({
    layers: [
      PotCropLat, AgicCO, Restaur, RPQAAD,
      BIO, DSC, DVN, EDB, D30, D16a20
    ]
  })
  map.addLayer(baseLayerGroup);

  // UF
  const bi_ce_uf_2021 = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://ec2-34-201-126-65.compute-1.amazonaws.com:8080/geoserver/tese/wms?service=WMS&version=1.1.0&request=GetMap&layers=tese%3Abi_ce_uf_2021',
      })
  })
  map.addLayer(bi_ce_uf_2021);

  const baseLayerElements = document.querySelectorAll('.sidebar > input[type=radio]')
  for(let baseLayerElement of baseLayerElements){
    baseLayerElement.addEventListener('change', function(){
      let baseLayerElementValue = this.value;
      baseLayerGroup.getLayers().forEach(function(element, index, array){
        let baseLayerName = element.get('title');
        element.setVisible(baseLayerName === baseLayerElementValue)
      })
    })
  }

    // TileDebug
    const tileDebugLayer = new ol.layer.Tile({
      source: new ol.source.TileDebug(),
      visible: true,
      title: 'TileDebugLayer'
    })

  //Map Controls

  const scaleLineControl = new ol.control.ScaleLine({
    units: 'metric',
    minWidth: 200,
    bar: true,
    steps: 4,
    text: false
  })
  map.addControl(scaleLineControl);




}