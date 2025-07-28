var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BancodeCapacitores_1 = new ol.format.GeoJSON();
var features_BancodeCapacitores_1 = format_BancodeCapacitores_1.readFeatures(json_BancodeCapacitores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BancodeCapacitores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BancodeCapacitores_1.addFeatures(features_BancodeCapacitores_1);
var lyr_BancodeCapacitores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BancodeCapacitores_1, 
                style: style_BancodeCapacitores_1,
                popuplayertitle: 'Banco de Capacitores',
                interactive: true,
    title: 'Banco de Capacitores<br />\
    <img src="styles/legend/BancodeCapacitores_1_0.png" /> Activo<br />\
    <img src="styles/legend/BancodeCapacitores_1_1.png" /> Pendiente de Instalación<br />\
    <img src="styles/legend/BancodeCapacitores_1_2.png" /> Pendiente de Reparación<br />\
    <img src="styles/legend/BancodeCapacitores_1_3.png" /> <br />' });

lyr_ESRISatellite_0.setVisible(true);lyr_BancodeCapacitores_1.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_BancodeCapacitores_1];
lyr_BancodeCapacitores_1.set('fieldAliases', {'BC': 'Banco de Capacitores', 'Fp': 'Factor de Potencia', 'Estado': 'Estado Actual', 'Imagen': 'Imagen', 'Imag': 'Imag', });
lyr_BancodeCapacitores_1.set('fieldImages', {'BC': 'TextEdit', 'Fp': 'TextEdit', 'Estado': 'TextEdit', 'Imagen': 'ExternalResource', 'Imag': 'ExternalResource', });
lyr_BancodeCapacitores_1.set('fieldLabels', {'BC': 'header label - always visible', 'Fp': 'header label - always visible', 'Estado': 'header label - always visible', 'Imagen': 'header label - always visible', 'Imag': 'hidden field', });
lyr_BancodeCapacitores_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});