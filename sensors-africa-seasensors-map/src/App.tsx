import React, { Fragment } from 'react';
import Mapbox from './components/Mapbox';
import Filter from './components/Filter';

function App() {
  return (
    <Fragment>
      <Filter />
      <Mapbox />
    </Fragment>
  );
}

export default App;
