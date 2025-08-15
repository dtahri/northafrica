var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_Maroc_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Maroc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Maroc_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-2361732.645807, 1752902.472873, 72355.086415, 4497505.047098]
                            })
                        });var lyr_Clusters_Cyrille_et_al_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clusters_Cyrille_et_al",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clusters_Cyrille_et_al_1.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-2101722.924619, 2224097.778221, -678320.621706, 3514568.222933]
                            })
                        });var lyr_Mauritanie_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mauritanie",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Mauritanie_2.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-2273025.964275, 1311217.558895, -447727.638476, 3285356.542115]
                            })
                        });var lyr_Tunisie_2_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Tunisie_2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Tunisie_2_3.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [796415.407879, 3716548.106445, 1346552.831959, 4542243.779567]
                            })
                        });var lyr_Tunisie_1_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Tunisie_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Tunisie_1_4.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [832588.551643, 3713563.707085, 1423239.235161, 4585579.396172]
                            })
                        });var format_Ecoregions_Dinerstein_5 = new ol.format.GeoJSON();
var features_Ecoregions_Dinerstein_5 = format_Ecoregions_Dinerstein_5.readFeatures(json_Ecoregions_Dinerstein_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecoregions_Dinerstein_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ecoregions_Dinerstein_5.addFeatures(features_Ecoregions_Dinerstein_5);var lyr_Ecoregions_Dinerstein_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ecoregions_Dinerstein_5, 
                style: style_Ecoregions_Dinerstein_5,
                title: '<img src="styles/legend/Ecoregions_Dinerstein_5.png" /> Ecoregions_Dinerstein'
            });var format_Districts_Alg_2024_6 = new ol.format.GeoJSON();
var features_Districts_Alg_2024_6 = format_Districts_Alg_2024_6.readFeatures(json_Districts_Alg_2024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districts_Alg_2024_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Districts_Alg_2024_6.addFeatures(features_Districts_Alg_2024_6);var lyr_Districts_Alg_2024_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Districts_Alg_2024_6, 
                style: style_Districts_Alg_2024_6,
                title: '<img src="styles/legend/Districts_Alg_2024_6.png" /> Districts_Alg_2024'
            });var format_Sous_divisions_N_Af_7 = new ol.format.GeoJSON();
var features_Sous_divisions_N_Af_7 = format_Sous_divisions_N_Af_7.readFeatures(json_Sous_divisions_N_Af_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sous_divisions_N_Af_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Sous_divisions_N_Af_7.addFeatures(features_Sous_divisions_N_Af_7);var lyr_Sous_divisions_N_Af_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sous_divisions_N_Af_7, 
                style: style_Sous_divisions_N_Af_7,
                title: '<img src="styles/legend/Sous_divisions_N_Af_7.png" /> Sous_divisions_N_Af'
            });var format_Divisions_N_Af_8 = new ol.format.GeoJSON();
var features_Divisions_N_Af_8 = format_Divisions_N_Af_8.readFeatures(json_Divisions_N_Af_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Divisions_N_Af_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Divisions_N_Af_8.addFeatures(features_Divisions_N_Af_8);var lyr_Divisions_N_Af_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Divisions_N_Af_8, 
                style: style_Divisions_N_Af_8,
                title: '<img src="styles/legend/Divisions_N_Af_8.png" /> Divisions_N_Af'
            });

lyr_Maroc_0.setVisible(true);lyr_Clusters_Cyrille_et_al_1.setVisible(true);lyr_Mauritanie_2.setVisible(true);lyr_Tunisie_2_3.setVisible(true);lyr_Tunisie_1_4.setVisible(true);lyr_Ecoregions_Dinerstein_5.setVisible(true);lyr_Districts_Alg_2024_6.setVisible(true);lyr_Sous_divisions_N_Af_7.setVisible(true);lyr_Divisions_N_Af_8.setVisible(true);
var layersList = [baseLayer,lyr_Maroc_0,lyr_Clusters_Cyrille_et_al_1,lyr_Mauritanie_2,lyr_Tunisie_2_3,lyr_Tunisie_1_4,lyr_Ecoregions_Dinerstein_5,lyr_Districts_Alg_2024_6,lyr_Sous_divisions_N_Af_7,lyr_Divisions_N_Af_8];
lyr_Ecoregions_Dinerstein_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ECO_NAME': 'ECO_NAME', 'BIOME_NUM': 'BIOME_NUM', 'BIOME_NAME': 'BIOME_NAME', 'REALM': 'REALM', 'ECO_BIOME_': 'ECO_BIOME_', 'NNH': 'NNH', 'ECO_ID': 'ECO_ID', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'NNH_NAME': 'NNH_NAME', 'COLOR': 'COLOR', 'COLOR_BIO': 'COLOR_BIO', 'COLOR_NNH': 'COLOR_NNH', 'LICENSE': 'LICENSE', });
lyr_Districts_Alg_2024_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_polygo': 'FID_polygo', 'FID_All': 'FID_All', 'Id': 'Id', 'Secteurs': 'Secteurs', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Area': 'Area', });
lyr_Sous_divisions_N_Af_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_A_supp': 'FID_A_supp', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Divisions_N_Af_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_A_supp': 'FID_A_supp', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Ecoregions_Dinerstein_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'ECO_NAME': 'TextEdit', 'BIOME_NUM': 'TextEdit', 'BIOME_NAME': 'TextEdit', 'REALM': 'TextEdit', 'ECO_BIOME_': 'TextEdit', 'NNH': 'TextEdit', 'ECO_ID': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'NNH_NAME': 'TextEdit', 'COLOR': 'TextEdit', 'COLOR_BIO': 'TextEdit', 'COLOR_NNH': 'TextEdit', 'LICENSE': 'TextEdit', });
lyr_Districts_Alg_2024_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_polygo': 'TextEdit', 'FID_All': 'TextEdit', 'Id': 'TextEdit', 'Secteurs': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area': 'TextEdit', });
lyr_Sous_divisions_N_Af_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_A_supp': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Divisions_N_Af_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_A_supp': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Ecoregions_Dinerstein_5.set('fieldLabels', {'OBJECTID': 'no label', 'ECO_NAME': 'no label', 'BIOME_NUM': 'no label', 'BIOME_NAME': 'no label', 'REALM': 'no label', 'ECO_BIOME_': 'no label', 'NNH': 'no label', 'ECO_ID': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'NNH_NAME': 'no label', 'COLOR': 'no label', 'COLOR_BIO': 'no label', 'COLOR_NNH': 'no label', 'LICENSE': 'no label', });
lyr_Districts_Alg_2024_6.set('fieldLabels', {'OBJECTID': 'no label', 'FID_polygo': 'no label', 'FID_All': 'no label', 'Id': 'no label', 'Secteurs': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Area': 'no label', });
lyr_Sous_divisions_N_Af_7.set('fieldLabels', {'OBJECTID': 'no label', 'FID_A_supp': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Divisions_N_Af_8.set('fieldLabels', {'OBJECTID': 'no label', 'FID_A_supp': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Divisions_N_Af_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});