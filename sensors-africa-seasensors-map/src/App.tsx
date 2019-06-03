import React, { Fragment, useState } from 'react';
import Mapbox from './components/Mapbox';
import Filter, { FilterValue } from './components/Filter';
import Counter from './components/Counter';

import blastData from './data/blasts.geo.json';
import { uniqueCoordinates } from './utils/data';

function App() {
  const [filters, setFilter] = useState([] as Array<FilterValue>);
  const coordinates = uniqueCoordinates(blastData);
  return (
    <Fragment>
      <Filter onFilter={setFilter} />
      <Counter
        numberOfSensors={coordinates.length}
        numberOfBlasts={blastData.features.length}
      />
      <Mapbox data={blastData} filters={filters} />
    </Fragment>
  );
}

export default App;
