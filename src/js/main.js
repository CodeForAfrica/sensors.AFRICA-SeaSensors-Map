import blastData from './blastData';

mapboxgl.accessToken = process.env.MapboxAccessToken;
var map = new mapboxgl.Map({
 container: 'map',
 style: 'mapbox://styles/codeforafrica/cju18pxjf12yj1gp7qhdmgicd',
 center: [39.299, -5.368],
 zoom: 7.66
});

//Karim:  Degree precision
// This allows to identify unique coordinates
// Note: Using a precision of 3,
//       This scale is said to unambiguously recognize a neighborhood or street
//       It works in our case
function applyPrecision(coordinates) {
 return coordinates.map(c => Number(c.toFixed(3)));
}

// Get unique coordinates to use for mapping
const set = new Set(
 blastData.features.map(f => applyPrecision(f.geometry.coordinates).join(','))
);
const coordinates = [...set].map(c => c.split(',').map(cstr => Number(cstr)));
function circlesSource(centers, radiusInKm, points = 64) {
 const features = centers.map(center => {
  const coords = {
   latitude: center[1],
   longitude: center[0]
  };
  const km = radiusInKm;

  const ret = [];
  const distanceX = km / (111.32 * Math.cos((coords.latitude * Math.PI) / 180));
  const distanceY = km / 110.574;

  var theta, x, y;
  for (var i = 0; i < points; i++) {
   theta = (i / points) * (2 * Math.PI);
   x = distanceX * Math.cos(theta);
   y = distanceY * Math.sin(theta);

   ret.push([coords.longitude + x, coords.latitude + y]);
  }

  ret.push(ret[0]);

  return {
   type: 'Feature',
   geometry: {
    type: 'Polygon',
    coordinates: [ret]
   }
  };
 });

 return {
  type: 'geojson',
  data: {
   type: 'FeatureCollection',
   features
  }
 };
}

function lineSource(centers, distanceInKm) {
 let features = [];
 centers.forEach(center => {
  const properties = blastData.features
   .filter(
    f => applyPrecision(f.geometry.coordinates).join(',') == center.join(',')
   )
   .map(f => f.properties);

  features = features.concat(
   properties.map(property => {
    const bearing = property['Blast Bearing'];
    const distanceX =
     distanceInKm / (111.32 * Math.cos((center[1] * Math.PI) / 180));
    const distanceY = distanceInKm / 110.574;

    var theta, x, y;
    theta = (bearing * Math.PI) / 180;
    x = distanceX * Math.cos(theta);
    y = distanceY * Math.sin(theta);

    return {
     type: 'Feature',
     properties: property,
     geometry: {
      type: 'LineString',
      coordinates: [center, [center[0] + x, center[1] + y]]
     }
    };
   })
  );
 });

 return {
  type: 'geojson',
  data: {
   type: 'FeatureCollection',
   features: features
  }
 };
}

const numOfSensors = Object.keys(coordinates).length;
document.getElementById('number-sensor').innerHTML = numOfSensors;

//Total number of blast recorded
const blastRecorded = Object.keys(blastData.features).length;
document.getElementById('number-detected').innerHTML = blastRecorded;

map.on('load', function() {
 const zoomControls = new mapboxgl.NavigationControl();
 map.addControl(zoomControls, 'bottom-right');
 map.addLayer({
  id: 'points',
  type: 'circle',
  source: {
   type: 'geojson',
   data: blastData
  },
  layout: {},
  paint: {
   'circle-color': '#463354',
   'circle-opacity': 0.8
  }
 });
 map.addSource('circles', circlesSource(coordinates, 30));
 map.addSource('lines', lineSource(coordinates, 30));
 map.addLayer({
  id: 'polygon',
  type: 'fill',
  source: 'circles',
  paint: {
   'fill-color': '#463354',
   'fill-opacity': 0.6
  }
 });

 map.addLayer({
  id: 'route',
  type: 'line',
  source: 'lines',
  layout: {
   'line-join': 'round',
   'line-cap': 'round'
  },
  paint: {
   'line-color': '#1798A6',
   'line-width': 1
  }
 });
 const filterGroup = document.getElementById('filter-group');
 const inputs = filterGroup.querySelectorAll('input[type=checkbox]');

 const handleFilter = e => {
  const checked = Array.from(inputs).filter(e => e.checked);

  // Combine filters for same property
  const filters = [];
  checked.forEach(checkbox => {
   const filter = filters.find(f => f[1] === checkbox.name);
   if (filter) {
    filter.push(checkbox.value);
   } else {
    filters.push(['in', checkbox.name, checkbox.value]);
   }
  });
  map.setFilter('route', ['all', ...filters]);
 };
 //Inital state
 Array.from(inputs).forEach(input => {
  input.checked = true;
  input.onclick = handleFilter;
 });
});
