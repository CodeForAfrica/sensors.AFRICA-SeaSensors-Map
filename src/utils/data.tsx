// Degree precision
// This allows to identify unique coordinates
// Note: Using a precision of 3,
//       This scale is said to unambiguously recognize a neighborhood or street
//       It works in our case
function applyPrecision(coordinates: [number, number]) {
  return coordinates.map(c => Number(c.toFixed(3)));
}

// Get unique coordinates to use for mapping
export function uniqueCoordinates(data: {
  features: Array<{
    geometry: {
      coordinates: [number, number];
    };
  }>;
}): Array<[number, number]> {
  const set = new Set<string>(
    data.features.map(feature =>
      applyPrecision(feature.geometry.coordinates).join(',')
    )
  );
  return Array.from(set).map(coordinates => {
    const str = coordinates.split(',');
    return [Number(str[0]), Number(str[1])];
  });
}

export function circlesSource(
  centers: Array<[number, number]>,
  radiusInKm: number,
  points: number = 64
) {
  const features = centers.map(center => {
    const coords = {
      latitude: center[1],
      longitude: center[0]
    };
    const km = radiusInKm;

    const ret = [];
    const distanceX =
      km / (111.32 * Math.cos((coords.latitude * Math.PI) / 180));
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
export function lineSource(
  data: {
    features: Array<{
      properties: { [key: string]: any };
      geometry: {
        coordinates: [number, number];
      };
    }>;
  },
  centers: Array<[number, number]>,
  distanceInKm: number
) {
  let features: any[] = [];
  centers.forEach(center => {
    const properties = data.features
      .filter(
        f =>
          applyPrecision(f.geometry.coordinates).join(',') === center.join(',')
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
      features
    }
  };
}
