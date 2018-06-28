import React from 'react';
import {view as Weather, stateKey, reducer} from '../components/Weather';

const page = () => {
  return (
    <div>
      <Weather />
    </div>
  );
};

const initialState = {
    status: "loading",
    cityName: "",
    weather: "",
    lowestTemp: "",
    highestTemp: ""
};

export {page, reducer, initialState, stateKey};
