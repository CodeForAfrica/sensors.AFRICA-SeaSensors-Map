import React from 'react';
import ReactMapboxGl, {
  ZoomControl,
  Source,
  Feature,
  Layer
} from 'react-mapbox-gl';

import blastData from '../data/blasts.geo.json';
import { circlesSource, uniqueCoordinates, lineSource } from '../utils/data';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoia2FheXIxbSIsImEiOiJjamtsaXF6MzMwYnRuM3dxcjRrbm1ieDVxIn0.D1swnEH7sufUKGAz3rWXKQ'
});

function Mapbox() {
  const coordinates = uniqueCoordinates(blastData);
  return (
    <Map
      style="mapbox://styles/codeforafrica/cju18pxjf12yj1gp7qhdmgicd"
      center={[39.299, -5.368]}
      zoom={[7.99]}
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <ZoomControl position="bottom-right" />

      <Layer
        id="blast_sensor_location"
        type="circle"
        coordinates
        paint={{
          'circle-color': '#463354',
          'circle-opacity': 0.8
        }}
      >
        {coordinates.map(coordinate => (
          <Feature coordinates={coordinate} />
        ))}
      </Layer>

      <Source
        id="blast_radius_source"
        geoJsonSource={circlesSource(coordinates, 30)}
      />
      <Layer
        id="blast_radius"
        type="fill"
        sourceId="blast_radius_source"
        paint={{
          'fill-color': '#463354',
          'fill-opacity': 0.6
        }}
      />

      <Source
        id="blast_lines_source"
        geoJsonSource={lineSource(blastData, coordinates, 30)}
      />
      <Layer
        id="blast_lines"
        type="line"
        sourceId="blast_lines_source"
        layout={{
          'line-join': 'round',
          'line-cap': 'round'
        }}
        paint={{
          'line-color': '#1798A6',
          'line-width': 1
        }}
      />
    </Map>
  );
}

export default Mapbox;
