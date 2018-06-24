import React from 'react';
import {view as TechTable, stateKey, reducer} from '../components/TechTable';

const page = () => {
  return (
    <div>
      <TechTable />
    </div>
  );
};

const initialState = [{
  key: '1',
  id:'1',
  name: 'JavaScript',
  status: '精通'
}];

export {page, reducer, initialState, stateKey};
