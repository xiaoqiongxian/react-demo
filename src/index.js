import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
registerServiceWorker();
