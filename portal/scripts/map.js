const center_x = 117.3;
const center_y = 172.8;
const scale_x = 0.02072;
const scale_y = 0.0205;

CUSTOM_CRS = L.extend({}, L.CRS.Simple, {
    projection: L.Projection.LonLat,
    scale: function(zoom) {

        return Math.pow(2, zoom);
    },
    zoom: function(sc) {

        return Math.log(sc) / 0.6931471805599453;
    },
	distance: function(pos1, pos2) {
        var x_difference = pos2.lng - pos1.lng;
        var y_difference = pos2.lat - pos1.lat;
        return Math.sqrt(x_difference * x_difference + y_difference * y_difference);
    },
	transformation: new L.Transformation(scale_x, center_x, -scale_y, center_y),
    infinite: true
});

var SateliteStyle = L.tileLayer('mapStyles/styleSatelite/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 8,noWrap: true,continuousWorld: false,attribution: 'Aurum Energy Inc.',id: 'SateliteStyle map',}),
	AtlasStyle	= L.tileLayer('mapStyles/styleAtlas/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 5,noWrap: true,continuousWorld: false,attribution: 'Aurum Energy Inc.',id: 'styleAtlas map',}),
	GridStyle	= L.tileLayer('mapStyles/styleGrid/{z}/{x}/{y}.png', {minZoom: 0,maxZoom: 5,noWrap: true,continuousWorld: false,attribution: 'Aurum Energy Inc.',id: 'styleGrid map',});

var ExampleGroup = L.layerGroup();

var Icons = {
	"Example" :ExampleGroup,
};

var mymap = L.map('map', {
    crs: CUSTOM_CRS,
    minZoom: 1,
    maxZoom: 5,
    Zoom: 5,
    maxNativeZoom: 5,
    preferCanvas: true,
    layers: [AtlasStyle],
    center: [0, 0],
    zoom: 3,
});

var layersControl = L.control.layers({"Atlas": AtlasStyle}, Icons).addTo(mymap);


function customIcon(icon){
	return L.icon({
		iconUrl: `blips/${icon}.png`,
		iconSize:     [40, 40],
		iconAnchor:   [20, 30]
	});
}

var X  = 1;
var Y = 0;

L.marker([-1086.92, 437.577],{ icon: customIcon(23) }).addTo(mymap).bindPopup("Aurum Energy HQ");
L.marker([1491, 2728],{ icon: customIcon(23) }).addTo(mymap).bindPopup("Aurum Energy Refinery");
L.marker([-2661.637,-230.78197],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 1`);
L.marker([-2567.7268,24.74902],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 2`);
L.marker([-2488.1226,1129.0765],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 3`);
L.marker([-1929.2739,751.07227],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 4`);
L.marker([-1599.3118,562.97687],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 5`);
L.marker([-1214.5693,-10.696768],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 6`);
L.marker([149.02354,682.2151],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 7`);
L.marker([1133.8795,-389.71457],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 8`);
L.marker([1528.5247,2826.698],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 9`);
L.marker([1472.3701,2465.6025],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 10`);
L.marker([1586.5664,2443.8745],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 11`);
L.marker([1716.1791,2290.7256],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 12`);
L.marker([1945.3605,2134.6548],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 13`);
L.marker([2331.1594,2100.6619],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 14`);
L.marker([2961.372,2276.408],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 15`);
L.marker([3683.2358,2050.6982],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 16`);
L.marker([5061.0693,2584.8188],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 17`);
L.marker([5572.1577,447.8722],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 18`);
L.marker([4851.242,-1002.4998],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 19`);
L.marker([5594.091,-746.6902],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 20`);
L.marker([6021.4614,-290.44897],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 21`);
L.marker([6405.3213,231.4966],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 22`);
L.marker([6381.9644,1346.2533],{ icon: customIcon(13) }).addTo(mymap).bindPopup(`Substation 23`);