var osmMap = L.tileLayer.provider('OpenStreetMap.Mapnik',{
    attribution: 'OpenStreetMap'
});
var topoMap = L.tileLayer.provider('OpenTopoMap');
var esriMap = L.tileLayer.provider('Esri.WorldImagery');

var baseMaps = {
    "Open Street Map": osmMap,
    'Topology Map': topoMap,
    'World Satellite Imagery': esriMap
}

// var GeoServerIPPort = 'localhost:8080';
// var geoServerWorkSpace = 'Postgres';
var wardnames =  'Postgres:bbmp_wards';

var BBMP_Wards = L.Geoserver.wms (
    "http://localhost:8080/geoserver/Postgres/wms",
    {
        layers: wardnames,
        format: "image/png",
        transparent: true,
        version: "1.1.0",
        tiled: true,
    }
)

var wardnames1 =  'Postgres:vulnerable_flood_location';

var BBMP_Wards1 = L.Geoserver.wms (
    "http://localhost:8080/geoserver/Postgres/wms",
    {
        layers: wardnames1,
        format: "image/png",
        transparent: true,
        version: "1.1.0",
        tiled: true,
    }
)

var wasteColCent = 'Postgres:Bangalore_Waste_Collection_Centers';

var wasteColCent_layerConfig = L.Geoserver.wms (
    "http://localhost:8080/geoserver/Postgres/wms",
    {
        layers: wasteColCent,
        format: "image/png",
        transparent: true,
        version: "1.1.0",
        tiled: true,  
    }
)

var wasteProccUnit = 'Postgres:bangalore_wast_processing_unit';

var wasteProccUnit_layerConfig = L.Geoserver.wms (
    "http://localhost:8080/geoserver/Postgres/wms",
    {
        layers: wasteProccUnit,
        format: "image/png",
        transparent: true,
        version: "1.1.0",
        tiled: true,  
    }
)

var landfills = 'Postgres:Bangalore_landfills';

var landfills_layerConfig = L.Geoserver.wms (
    "http://localhost:8080/geoserver/Postgres/wms",
    {
        layers: landfills,
        format: "image/png",
        transparent: true,
        version: "1.1.0",
        tiled: true,  
    }
)

var overlaymaps = {
    "BBMP Wards": BBMP_Wards,
    "Flood Locations": BBMP_Wards1,
    "Waste Collection Centers": wasteColCent_layerConfig,
    "Waste Processing Unit": wasteProccUnit_layerConfig,
    "Land Fills": landfills_layerConfig
};

var map = L.map('map',{
    center:[12.9716, 77.5946],
    zoom: 11,
    layers:[esriMap, BBMP_Wards]
})

var mapLayers = L.control.layers(baseMaps, overlaymaps).addTo(map);

