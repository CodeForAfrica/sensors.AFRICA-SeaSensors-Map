mapboxgl.accessToken = process.env.MapboxAccessToken;
var map = new mapboxgl.Map({
 container: 'map',
 style: 'mapbox://styles/codeforafrica/cju18pxjf12yj1gp7qhdmgicd',
 center: [39.299, -5.368],
 zoom: 7.66
});

//TODO: Load in a separate file
const blastData = {
 type: 'FeatureCollection',
 features: [
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 1,
    Location: 'Maziwe Island',
    Date: '6/4/2018',
    Day: 'Monday',
    Time: '12:29:53 PM',
    'Time of Day': 'PM',
    Year: 2018,
    'Tidal State': 'Falling',
    'Spring/Neap': 'Spring',
    'Wav-File-Name': 'Ish_Bomb20180604_122952_913',
    'Blast Bearing': 28.66,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 2,
    Location: 'Maziwe Island',
    Date: '6/16/2018',
    Day: 'Saturday',
    Time: '8:29:45 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180616_082945_232',
    'Blast Bearing': 33.14,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 3,
    Location: 'Maziwe Island',
    Date: '6/16/2018',
    Day: 'Saturday',
    Time: '9.22.11 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180616_092210_704',
    'Blast Bearing': 31.72,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 4,
    Location: 'Maziwe Island',
    Date: '6/16/2018',
    Day: 'Saturday',
    Time: '9:23:03 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180616_092302_771',
    'Blast Bearing': 33.14,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 5,
    Location: 'Maziwe Island',
    Date: '6/16/2018',
    Day: 'Saturday',
    Time: '9:24:45 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': 'Falling',
    'Spring/Neap': 'Spring',
    'Wav-File-Name': 'Ish_Bomb20180616_092445_315',
    'Blast Bearing': 33.14,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 6,
    Location: 'Maziwe Island',
    Date: '6/16/2018',
    Day: 'Saturday',
    Time: '9.29:45 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': 'High',
    'Spring/Neap': 'Normal',
    'Wav-File-Name': 'Ish_Bomb20180616_092956_809',
    'Blast Bearing': 33.14,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 7,
    Location: 'Maziwe Island',
    Date: '6/16/2018',
    Day: 'Saturday',
    Time: '11:08:16 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': 'Falling',
    'Spring/Neap': 'Normal',
    'Wav-File-Name': 'Ish_Bomb20180616_110815_511',
    'Blast Bearing': 24.59,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 8,
    Location: 'Maziwe Island',
    Date: '6/16/2018',
    Day: 'Saturday',
    Time: '11:13:16 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': 'Falling',
    'Spring/Neap': 'Spring',
    'Wav-File-Name': 'Ish_Bomb20180616_111315_609',
    'Blast Bearing': 31.48,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 9,
    Location: 'Maziwe Island',
    Date: '6/16/2018',
    Day: 'Saturday',
    Time: '11:27:47 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180616_112746_876',
    'Blast Bearing': 36.93,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 10,
    Location: 'Maziwe Island',
    Date: '6/25/2018',
    Day: 'Monday',
    Time: '8:15:53 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180625_081553_435',
    'Blast Bearing': 28.62,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 11,
    Location: 'Maziwe Island',
    Date: '6/25/2018',
    Day: 'Monday',
    Time: '9:06:39 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180625_090639_061',
    'Blast Bearing': 33.14,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 12,
    SLocation: 'Maziwe Island',
    Date: '7/8/2018',
    Day: 'Sunday',
    Time: '9:34:31 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180708_093430_749',
    'Blast Bearing': 26.95,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 13,
    Location: 'Maziwe Island',
    Date: '7/8/20187',
    Day: 'Sunday',
    Time: '12:52:37 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180708_125236_672',
    'Blast Bearing': 25.58,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 14,
    Location: 'Maziwe Island',
    Date: '7/10/2018',
    Day: 'Tuesday',
    Time: '9:31:09 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180710_093109_435',
    'Blast Bearing': 27.05,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 15,
    Location: 'Maziwe Island',
    Date: '7/11/2018',
    Day: 'Wednesday',
    Time: '7:59:01 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180711_075900_759',
    'Blast Bearing': 28.57,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 16,
    Location: 'Maziwe Island',
    Date: '7/11/2018',
    Day: 'Wednesday',
    Time: '8:40:15 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180711_084015_259',
    'Blast Bearing': 27.05,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 17,
    Location: 'Maziwe Island',
    Date: '7/11/2018',
    Day: 'Wednesday',
    Time: '8:40:34 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180711_084033_760',
    'Blast Bearing': 27.05,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 18,
    Location: 'Maziwe Island',
    Date: '7/12/2018',
    Day: 'Thursday',
    Time: '7:40:49 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180712_074048_850',
    'Blast Bearing': 22.77,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 19,
    Location: 'Maziwe Island',
    Date: '7/12/2018',
    Day: 'Thursday',
    Time: '8:40:25 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180712_084025_028',
    'Blast Bearing': 22.07,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 20,
    Location: 'Maziwe Island',
    Date: '7/13/2018',
    Day: 'Friday',
    Time: '9:30:39 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180713_093038_601',
    'Blast Bearing': 36.49,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 21,
    Location: 'Maziwe Island',
    Date: '7/13/2018',
    Day: 'Friday',
    Time: '9:50:32 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180713_095031_517',
    'Blast Bearing': 31.77,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 22,
    Location: 'Maziwe Island',
    Date: '7/14/2018',
    Day: 'Saturday',
    Time: '12:32:11 PM',
    'Time of Day': 'PM',
    Year: 2018,
    'Tidal State': '',
    'Spring/Neap': '',
    'Wav-File-Name': 'Ish_Bomb20180714_123210_673',
    'Blast Bearing': 34.84,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.3, -4.9]
   },
   properties: {
    id: 23,
    Location: 'Maziwe Island',
    Date: '7/15/2018',
    Day: 'Sunday',
    Time: '8:41:02 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': 'Falling',
    'Spring/Neap': 'Spring',
    'Wav-File-Name': 'Ish_Bomb20180715_084102_135',
    'Blast Bearing': 33.23,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.3, -4.9]
   },
   properties: {
    id: 24,
    Location: 'Fish Eagle',
    Date: '8/8/2018',
    Day: 'Wednesday',
    Time: '14:29:37 PM',
    'Time of Day': 'PM',
    Year: 2018,
    'Tidal State': 'High',
    'Spring/Neap': 'Normal',
    'Wav-File-Name': 'Ish_Bomb20180808_142936_784',
    'Blast Bearing': 15.38,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 25,
    Location: 'Fish Eagle',
    Date: '8/21/2018',
    Day: 'Tuesday',
    Time: '15:20:55 PM',
    'Time of Day': 'PM',
    Year: 2018,
    'Tidal State': 'Falling',
    'Spring/Neap': 'Normal',
    'Wav-File-Name': 'Ish_Bomb20180821_152054_827',
    'Blast Bearing': 15.41,
    'Detection Radius(km)': '30'
   }
  },
  {
   type: 'Feature',
   geometry: {
    type: 'Point',
    coordinates: [39.07, -5.49]
   },
   properties: {
    id: 26,
    Location: 'Maziwe Island',
    Date: '9/29/2018',
    Day: 'Saturday',
    Time: '9:35:14 AM',
    'Time of Day': 'AM',
    Year: 2018,
    'Tidal State': 'Falling',
    'Spring/Neap': 'Spring',
    'Wav-File-Name': 'Ish_Bomb20180929_093514_719',
    'Blast Bearing': 17.54,
    'Detection Radius(km)': '30'
   }
  }
 ]
};

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
  const bearings = blastData.features
   .filter(
    f => applyPrecision(f.geometry.coordinates).join(',') == center.join(',')
   )
   .map(f => f.properties['Blast Bearing']);

  features = features.concat(
   bearings.map(bearing => {
    const distanceX =
     distanceInKm / (111.32 * Math.cos((center[1] * Math.PI) / 180));
    const distanceY = distanceInKm / 110.574;

    theta = (bearing * Math.PI) / 180;
    x = distanceX * Math.cos(theta);
    y = distanceY * Math.sin(theta);

    return {
     type: 'Feature',
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
});
