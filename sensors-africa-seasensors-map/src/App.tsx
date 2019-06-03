import React, { Fragment } from 'react';
import Mapbox from './components/Mapbox';
import Filter from './components/Filter';
import Counter from './components/Counter';

function App() {
  return (
    <Fragment>
      <Filter />
      <Counter numberOfSensors={2} numberOfBlasts={42} />
      <Mapbox />
    </Fragment>
  );
}

export default App;
