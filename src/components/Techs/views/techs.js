import React from 'react';
import AddTech from './addTech.js';
import TechTable from './techTable.js';

export default () => {
  return (
    <div className="todos">
      <AddTech />
      <TechTable />
    </div>
  );
}
