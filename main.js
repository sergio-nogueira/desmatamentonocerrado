window.onload = init

function init(){

const container = document.getElementById('popup');
const content = document.getElementById('popup-content');
const closer = document.getElementById('popup-closer');

const overlay = new ol.Overlay({
  element: container,
  autoPan: {
    animation: {
      duration: 250,
    },
  },
});

closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

const view = new ol.View({
  center: [-50, -13.5],
  zoom: 5.8,
  projection: 'EPSG:4326',
  })
const map = new ol.Map({
  view: view,
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
      visible: true
    })
  ],
  overlays: [overlay],
  target: "js-map",
})

const PotCropLatFonte = new ol.source.TileWMS({
  ratio: 1,
  url: 'http://localhost:8080/geoserver/cerrado/wms',
  params: {'VERSION': '1.1.1',  
        "STYLES": '',
        "LAYERS": 'cerrado:PotCropLat',
        "exceptions": 'application/vnd.ogc.se_inimage',
  }
})

  // Dados espacializados por municipio

  const PotCropLat = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado%3APotCropLat',
      }),
      visible: false,
      title: 'PotCropLat'
  }) 

  const AgicCO = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado%3AAgicCO',
      }),
      visible: false,
      title: 'AgicCO'
  })

  const Restaur = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado%3ARestaur',
      }),
      visible: false,
      title: 'Restaur'
  })

  const RPQAAD = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado%3ARPQAAD',
      }),
      visible: false,
      title: 'RPQAAD'
  })

  const BIO = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado%3ABIO',
      }),
      visible: false,
      title: 'BIO'
  })

  const DSC = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado%3ADSC',
      }),
      visible: false,
      title: 'DSC'
  })

  const DVN = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado%3ADVN',
      }),
      visible: false,
      title: 'DVN'
  })

  const EDB = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado%3AEDB',
      }),
      visible: false,
      title: 'EDB'
  })

  const D30 = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado%3AD30',
      }),
      visible: false,
      title: 'D30'
  })
 

  const D16a20 = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado%3AD16a20',
      }),
      visible: true,
      title: 'D16a20'
  })

  const D2020 = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado:d2020',
      }),
      visible: false,
      title: 'd2020'
  })

  const DSCpix = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado:ce_dsca_gpm_2001_2019_median_100m',
      }),
      visible: false,
      title: 'ce_dsca_gpm_2001_2019_median_100m'
  })

  const DECpix = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado:declividade',
      }),
      visible: false,
      title: 'declividade'
  })

  const RPQAADpix = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado:RPQAADpix',
      }),
      visible: false,
      title: 'RPQAADpix'
  })

  const pastagem_prioridade = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado:pastagem_prioridade',
      }),
      visible: false,
      title: 'pastagem_prioridade'
  })

  const custo_de_oportunidade = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado:custo_de_oportunidade',
      }),
      visible: false,
      title: 'custo_de_oportunidade'
  })

  const bi_ce_areas_prioritarias = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado:bi_ce_areas_prioritarias',
      }),
      visible: false,
      title: 'bi_ce_areas_prioritarias'
  })


  const bi_ce_erodibilidade = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado:bi_ce_erodibilidade',
      }),
      visible: false,
      title: 'bi_ce_erodibilidade'
  })


  // Legend


  
  // Layer Group
  const baseLayerGroup = new ol.layer.Group({
    layers: [
      bi_ce_areas_prioritarias, bi_ce_erodibilidade, custo_de_oportunidade, pastagem_prioridade, D2020, RPQAADpix,DSCpix, DECpix, PotCropLat, AgicCO, Restaur, RPQAAD,
      BIO, DSC, DVN, EDB, D30, D16a20
    ]
  })
  map.addLayer(baseLayerGroup);

  // UF
  const bi_ce_uf_2021 = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado%3Abi_ce_uf_2021',
      })
  })
  map.addLayer(bi_ce_uf_2021);

  // Municipios
  const municipios = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'http://localhost:8080/geoserver/cerrado/wms?service=WMS&version=1.1.0&request=GetMap&layers=cerrado:municipios',
      })
  })
  map.addLayer(municipios);


  const baseLayerElements = document.querySelectorAll('.camadas > input[type=radio]')
  for(let baseLayerElement of baseLayerElements){
    baseLayerElement.addEventListener('change', function(){
      let baseLayerElementValue = this.value;
      legenda.innerHTML = `<p align='left'><b><font size=4>Legenda</b></font></center></p>
      <img src='http://localhost:8080/geoserver/cerrado/wms?Service=WMS&REQUEST=GetLegendGraphic&VERSION=1.1.0&FORMAT=image/png&WIDTH=25&HEIGHT=20&LAYER=cerrado:${baseLayerElementValue}'></img>`
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

// Feature Info

map.on('singleclick', function (evt) {
  const coordinate = evt.coordinate;
  const viewResolution = /** @type {number} */ (view.getResolution());
  const url = PotCropLatFonte.getFeatureInfoUrl(
    evt.coordinate,
    viewResolution,
    'EPSG:4326',
    {'INFO_FORMAT': 'application/json',
    'propertyName': 'NM_MUN,SIGLA,Restaur,PotCropLat,D16a20,D30,DSC,DVN,EDB,BIO,RPQAAD,AgicCO',
    'exclude_nodata_result': 'true'},
  );
  fetch(url)
  .then((resp) => resp.json())
  .then(function(resposta) {
    const var1 = resposta['features']
    const var2 = var1[0]
    const var3 = var2['properties']
    const municipio = var3['NM_MUN']
    const sigla = var3['SIGLA']
    const areadesmatada = var3['D16a20']
    const estareadesmatada = var3['D30']
    const risco = var3['RPQAAD']
    const diassecosconsecutivos = var3['DSC']
    const declividadevegnat = var3['DVN']
    const erodibilidade = var3['EDB']
    const biodiversidade = var3['BIO']
    const expansao = var3['PotCropLat']
    const custo = var3['AgicCO']
    const restauracao = var3['Restaur']

    dados.innerHTML = `<p align='left'><b><font size=4>${municipio} - ${sigla}</b></font></center><br></p>
                         <b>Área desmatada (2016-2020): </b>${areadesmatada} km²<br>
                         <b>Estimativa de área desmatada (2020-2030): </b>${estareadesmatada} km²<br>                              
                         <b>RPQAAD: </b>${risco} <br>
                         <b>Dias secos consecutivos: </b>${diassecosconsecutivos} dias<br>                 
                         <b>Declividade em vegetação nativa: </b>${declividadevegnat}%<br>
                         <b>Erodibilidade: </b>${erodibilidade}<br>  
                         <b>Biodiversidade: </b>${biodiversidade}<br>  
                         <b>Custo de oportunidade: </b>${custo}<br>
                         <b>Restauração: </b>${restauracao} ha<br>`
   })
});


const status = document.getElementById('status');


map.on('pointermove', function (e) {
  const coordinate = e.coordinate;
  const viewResolution = /** @type {number} */ (view.getResolution());
    const url = PotCropLatFonte.getFeatureInfoUrl(
    e.coordinate,
    viewResolution,
    'EPSG:4326',
    {'INFO_FORMAT': 'application/json',
    'propertyName': 'NM_MUN,SIGLA',
    'exclude_nodata_result': 'true'},
  );  
  
  fetch(url)
  .then((resp) => resp.json())
  .then(function(resposta) {
    const var1 = resposta['features']
    const var2 = var1[0]
    const var3 = var2['properties']
    const municipio = var3['NM_MUN']
    const sigla = var3['SIGLA']    
    content.innerHTML = `<font size="3"><p align="Left"><b>Municipio:</b> ${municipio}<br> <b>UF:</b> ${sigla}</p></font>`;
    overlay.setPosition(coordinate);
   })
  
});

}

