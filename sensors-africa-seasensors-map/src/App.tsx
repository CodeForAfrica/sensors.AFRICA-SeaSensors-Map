import React, { Fragment, useState } from 'react';
import Mapbox from './components/Mapbox';
import Filter, { FilterValue } from './components/Filter';
import Counter from './components/Counter';

function App() {
  const [filters, setFilter] = useState([] as Array<FilterValue>);
  return (
    <Fragment>
      <Filter onFilter={setFilter} />
      <Counter numberOfSensors={2} numberOfBlasts={42} />
      <Mapbox filters={filters} />
    </Fragment>
  );
}

export default App;
