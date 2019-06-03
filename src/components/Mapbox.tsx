import React, { useEffect, useState } from 'react';
import ReactMapboxGl, {
  ZoomControl,
  Source,
  Feature,
  Layer
} from 'react-mapbox-gl';

import { circlesSource, uniqueCoordinates, lineSource } from '../utils/data';
import { FilterValue } from './Filter';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN!
});

interface Props {
  data: any;
  filters: Array<FilterValue>;
}

function Mapbox({ data, filters }: Props) {
  const sensorCoordinates = uniqueCoordinates(data);
  const [blastLinesFilter, setBlastLinesFilter] = useState(['all'] as any[]);

  useEffect(() => {
    const filtersToApply: any[] = ['all'];
    filters.forEach(filter => {
      const found = filtersToApply.find(f => f[1] === filter[0]);
      if (found) {
        found.push(filter[1]);
      } else {
        filtersToApply.push(['in', ...filter]);
      }
    });
    setBlastLinesFilter(filtersToApply);
  }, [filters]);

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
        {sensorCoordinates.map(coordinates => (
          <Feature coordinates={coordinates} />
        ))}
      </Layer>

      <Source
        id="blast_radius_source"
        geoJsonSource={circlesSource(sensorCoordinates, 30)}
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
        geoJsonSource={lineSource(data, sensorCoordinates, 30)}
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
        filter={blastLinesFilter}
      />
    </Map>
  );
}

export default Mapbox;
