import React from 'react';
import {view as Techs, stateKey, reducer} from '../components/Techs';

const page = () => {
  return (
    <div>
      <Techs />
    </div>
  );
};

const initialState = [{
	key:'0',
  	id:'0',
  	name: 'JavaScript',
  	status: '精通'
}];

export {page, reducer, initialState, stateKey};
