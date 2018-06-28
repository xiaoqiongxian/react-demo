import React from 'react';
import AddTech from './addTech.js';
import SearchTech from './searchTech.js';
import TechTable from './techTable.js';
import './techs.css';

export default () => {
  return (
    <div>
    	<div className="tool-bar">
	      	<AddTech />
	      	<SearchTech />
      	</div>
      <TechTable />
    </div>
  );
}

